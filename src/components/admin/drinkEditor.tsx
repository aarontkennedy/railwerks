import * as React from "react";
import { useState, useEffect } from "react";
import { getCsvData, arrayToCsv } from "../../helpers/getCsvData";
import EditDrinkModal from "../../components/admin/editDrinkModal";
import "../../styles/adminPage.scss";
import { useScreenDetector } from "../../helpers/useScreenDetector";
import { DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DeleteDrinkModal from "../../components/admin/deleteDrinkModal";
import SortableItem from "../../components/admin/sortableItem";
import Drink from "../../types/drink";
import ConfirmUploadModal from "./confirmUploadModal";

const filterOutDrink = (
  drinks: Drink[],
  drinkSelectedForRemoval: Drink | null
): Drink[] => {
  return drinks.filter((d) => {
    return drinkSelectedForRemoval?.name !== d.name;
  });
};

const handleError = (message: string): void => {
  alert("Error: " + message);
};

export const getCsvString = (drinks: Drink[], supportABV: boolean): string => {
  // convert the drink list array to a csv string - https://medium.com/@idorenyinudoh10/how-to-export-data-from-javascript-to-a-csv-file-955bdfc394a9
  if (!drinks || drinks.length <= 0) {
    throw new Error("Missing data? Attempting to remove all?");
  }

  // convert array to array of data for csv
  let headerValues = Object.keys(drinks[0]);
  if (!supportABV) {
    headerValues = headerValues.filter((h) => h !== "alcoholPercent");
  }

  const csvData = [];
  csvData.push(headerValues);
  drinks.forEach((d) => {
    csvData.push(supportABV ? Object.values(d) : [d.name, d.description]);
  });

  // format data in array csv string
  return arrayToCsv(csvData);
};

const DrinkEditor = ({
  drinkCsvUrl,
  s3Bucket,
  s3Key,
  lambdaUpdateUrl,
  drinkLabel,
}: {
  drinkCsvUrl: string;
  lambdaUpdateUrl: string;
  s3Bucket: string;
  s3Key: string;
  drinkLabel: "beer" | "cocktail";
}): JSX.Element => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [drinkSelectedForDeletion, setDrinkSelectedForDeletion] =
    useState<Drink | null>(null);
  const [drinkSelectedForEdit, setDrinkSelectedForEdit] =
    useState<Drink | null>(null);
  const [showAddDrinkModal, setShowAddDrinkModal] = useState(false);
  const [editDrinkName, setEditDrinkName] = useState("");
  const [editDrinkDescription, setEditDrinkDescription] = useState("");
  const [editDrinkABV, setEditDrinkABV] = useState("");
  const [showUploadConfirmation, setShowUploadConfirmation] = useState(false);
  const supportABV = drinkLabel === "beer";

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setDrinks((d) => {
        const oldIndex = d.findIndex((f) => f.name === active.id);
        const newIndex = d.findIndex((f) => f.name === over.id);
        return arrayMove(d, oldIndex, newIndex);
      });
    }
  };

  const loadData = (): void => {
    try {
      getCsvData(drinkCsvUrl, false).then((rawDrinkData) => {
        const drinks: Drink[] = [];
        rawDrinkData.forEach((row) => {
          if (row[0]) {
            drinks.push(new Drink(row[0], row[1], row[2]));
          }
        });
        setDrinks(drinks);
      });
    } catch (e: any) {
      handleError(e.message);
    }
  };

  useEffect(loadData, []);

  const downloadDrinkList = (supportABV: boolean): void => {
    const csvString = getCsvString(drinks, supportABV);

    // initiate download
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8," });
    const objUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", objUrl);
    link.setAttribute("download", s3Key);
    link.click();
  };

  const submitDrinkList = (password: string, supportABV: boolean): void => {
    const url = lambdaUpdateUrl;
    let csvString;
    try {
      csvString = getCsvString(drinks, supportABV);
    } catch (e) {
      handleError("Failed to convert to csv!");
    }
    const postData = {
      bucket: s3Bucket,
      key: s3Key,
      contents: csvString,
      password: password,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        if (data === "Success") {
          setShowUploadConfirmation(false);
          loadData();
        } else {
          handleError("Failed to upload to csv!");
        }
      })
      .catch((error) => {
        handleError("Failed to upload to csv! " + error.message);
      });
  };

  return (
    <>
      <div className="admin-page__editor">
        <div className="admin-page__editor-header">
          <div className="cocktail-page__section-title">
            {`${drinkLabel}s`.toUpperCase()}
          </div>
        </div>
        <DndContext onDragEnd={handleDragEnd}>
          <SortableContext
            items={drinks.map((b) => b.name)}
            strategy={verticalListSortingStrategy}
          >
            <ol className="admin-page__editor-body">
              {drinks.map(function (d) {
                return (
                  <SortableItem
                    key={d.name}
                    drink={d}
                    setDrinkSelectedForDeletion={setDrinkSelectedForDeletion}
                    setEditDrinkName={setEditDrinkName}
                    setEditDrinkDescription={setEditDrinkDescription}
                    setEditDrinkABV={supportABV ? setEditDrinkABV : null}
                    setDrinkSelectedForEdit={setDrinkSelectedForEdit}
                  />
                );
              })}
            </ol>
          </SortableContext>
        </DndContext>
        <div className="admin-page__button-container">
          <button
            onClick={() => {
              setEditDrinkName("");
              setEditDrinkDescription("");
              setEditDrinkABV("");
              setShowAddDrinkModal(true);
            }}
          >
            Add new {drinkLabel.toLowerCase()}
          </button>
          <button
            onClick={() => {
              downloadDrinkList(supportABV);
            }}
          >
            Download {drinkLabel.toLowerCase()} list
          </button>
          <button
            onClick={() => {
              setShowUploadConfirmation(true);
            }}
          >
            Upload {drinkLabel.toLowerCase()} list
          </button>
        </div>
      </div>
      <DeleteDrinkModal
        drink={drinkSelectedForDeletion}
        onCancel={() => setDrinkSelectedForDeletion(null)}
        onSubmit={() => {
          const remainingDrinks = filterOutDrink(
            drinks,
            drinkSelectedForDeletion
          );
          setDrinks(remainingDrinks);
          setDrinkSelectedForDeletion(null);
        }}
      />
      <EditDrinkModal
        isOpen={!!(drinkSelectedForEdit || showAddDrinkModal)}
        drink={drinkSelectedForEdit}
        onCancel={() => {
          setDrinkSelectedForEdit(null);
          setShowAddDrinkModal(false);
        }}
        onSubmit={() => {
          const remainingDrinks = drinkSelectedForEdit
            ? filterOutDrink(drinks, drinkSelectedForEdit)
            : drinks;

          remainingDrinks.unshift(
            new Drink(
              editDrinkName,
              editDrinkDescription,
              supportABV ? parseFloat(editDrinkABV) : null
            )
          );
          setDrinks(remainingDrinks);
          setDrinkSelectedForEdit(null);
          setShowAddDrinkModal(false);
        }}
        editDrinkName={editDrinkName}
        editDrinkDescription={editDrinkDescription}
        editDrinkABV={supportABV ? editDrinkABV : ""}
        setEditDrinkName={setEditDrinkName}
        setEditDrinkDescription={setEditDrinkDescription}
        setEditDrinkABV={supportABV ? setEditDrinkABV : null}
      />
      {showUploadConfirmation && (
        <ConfirmUploadModal
          onSubmit={submitDrinkList}
          onCancel={() => {
            setShowUploadConfirmation(false);
          }}
          drinks={drinks}
          drinkLabel={drinkLabel}
        />
      )}
    </>
  );
};

export default DrinkEditor;
