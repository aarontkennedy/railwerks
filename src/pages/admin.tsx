import * as React from "react";
import MetaHelper from "../components/MetaHelper";
import { useState, useEffect } from "react";
import Beer from "../types/beer";
import { getCsvData, arrayToCsv } from "../helpers/getCsvData";
import PageLayout from "../components/pageLayout";
import "../styles/adminPage.scss";
import { useScreenDetector } from "../helpers/useScreenDetector";
import { StaticImage } from "gatsby-plugin-image";
import {
  desktopHeroImageStyle,
  mobileHeroImageStyle,
} from "../helpers/constants";
import TrashIcon from "../images/svg/trashIcon";
import EditIcon from "../images/svg/editIcon";
import { DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const beerCsvUrl = "https://railwerks.s3.us-east-2.amazonaws.com/beers.csv";

const DeleteBeerModal = ({
  onCancel,
  onSubmit,
  beer,
}: {
  onCancel: () => void;
  onSubmit: () => void;
  beer: Beer | null;
}) => {
  if (!beer) return null;
  const beerName = beer.name.toUpperCase();
  return (
    <div className="admin-page__delete-modal modal">
      <div className="modal-content">
        <div className="modal-title">
          Are you sure you want to delete {beerName}?
        </div>
        <div>{beerName}</div>
        <div>{beer.description}</div>
        <div>{beer.alcoholPercent}%</div>
        <div className="admin-page__button-container">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSubmit}>Delete {beerName}</button>
        </div>
      </div>
    </div>
  );
};

const EditBeerModal = ({
  isOpen,
  onCancel,
  onSubmit,
  beer,
  editBeerName,
  editBeerDescription,
  editBeerABV,
  setEditBeerName,
  setEditBeerDescription,
  setEditBeerABV,
}: {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  beer: Beer | null;
  editBeerName: string;
  editBeerDescription: string;
  editBeerABV: string;
  setEditBeerName: (v: string) => void;
  setEditBeerDescription: (v: string) => void;
  setEditBeerABV: (v: string) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="admin-page__edit-modal modal">
      <div className="modal-content">
        <div>
          <input
            value={editBeerName}
            onChange={(e) => setEditBeerName(e.target.value)}
          />
        </div>
        <div>
          <input
            value={editBeerDescription}
            onChange={(e) => setEditBeerDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            value={editBeerABV}
            onChange={(e) => setEditBeerABV(e.target.value)}
          />
        </div>
        <div className="admin-page__button-container">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSubmit}>Update</button>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const { isMobile, isTablet, isDesktop } = useScreenDetector();
  const [beerSelectedForDeletion, setBeerSelectedForDeletion] =
    useState<Beer | null>(null);
  const [beerSelectedForEdit, setBeerSelectedForEdit] = useState<Beer | null>(
    null
  );
  const [showAddBeerModal, setShowAddBeerModal] = useState(false);
  const [editBeerName, setEditBeerName] = useState("");
  const [editBeerDescription, setEditBeerDescription] = useState("");
  const [editBeerABV, setEditBeerABV] = useState("");

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setBeers((beers) => {
        const oldIndex = beers.findIndex((f) => f.name === active.id);
        const newIndex = beers.findIndex((f) => f.name === over.id);
        return arrayMove(beers, oldIndex, newIndex);
      });
    }
  };

  const SortableItem = ({ b }: { b: Beer }): JSX.Element => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: b.name });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <li ref={setNodeRef} style={style}>
        <div>{b.name.toUpperCase()}</div>
        <div>{b.description}</div>
        <div>{b.alcoholPercent}</div>
        <div>
          <button
            className="icon"
            onClick={() => setBeerSelectedForDeletion(b)}
          >
            <TrashIcon width={30} hexColor="#FFFFFF" />
          </button>
          <button
            className="icon"
            onClick={() => {
              setEditBeerName(b.name);
              setEditBeerDescription(b.description);
              setEditBeerABV(b.alcoholPercent.toString());
              setBeerSelectedForEdit(b);
            }}
          >
            <EditIcon width={30} hexColor="#FFFFFF" />
          </button>
          <button {...attributes} {...listeners}>
            ⣿
          </button>
        </div>
      </li>
    );
  };

  const filterOutBeer = (
    beers: Beer[],
    beerSelectedForDeletion: Beer | null
  ): Beer[] => {
    return beers.filter((b) => {
      return (
        beerSelectedForDeletion?.name !== b.name &&
        beerSelectedForDeletion?.alcoholPercent !== b.alcoholPercent
      );
    });
  };

  useEffect(() => {
    try {
      getCsvData(beerCsvUrl, false).then((rawBeerData) => {
        const beers: Beer[] = [];
        rawBeerData.forEach((row) => {
          if (row[0]) {
            beers.push(new Beer(row[0], row[2], row[1]));
          }
        });
        setBeers(beers);
      });
    } catch (e) {
      // do nothing
    }
  }, []);

  const downloadBeerList = (): void => {
    // convert the beer list array to a csv string - https://medium.com/@idorenyinudoh10/how-to-export-data-from-javascript-to-a-csv-file-955bdfc394a9
    if (!beers || beers.length <= 0) {
      return; // todo handle error
    }

    // convert beers array to array of data for csv
    const headerValues = Object.keys(beers[0]);
    const csvData = [];
    csvData.push(headerValues);
    beers.forEach((b) => {
      csvData.push(Object.values(b));
    });

    // format data in array csv string
    const csvString = arrayToCsv(csvData);

    // initiate download
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8," });
    const objUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", objUrl);
    link.setAttribute("download", "beers.csv");
    link.click();
  };

  return (
    <PageLayout>
      <div className="page__hero-wrapper">
        <StaticImage
          alt="Beer Flight"
          src="../images/flight.jpg"
          placeholder="blurred"
          layout="fullWidth"
          imgStyle={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
          style={isDesktop ? desktopHeroImageStyle : mobileHeroImageStyle}
        />
        <div className="page__hero-title">Admin</div>
      </div>
      <div className="admin-page">
        <div className="admin-page__content">
          <div>
            <div>Name</div>
            <div>Description</div>
            <div>ABV</div>
          </div>
          <DndContext onDragEnd={handleDragEnd}>
            <SortableContext
              items={beers.map((b) => b.name)}
              strategy={verticalListSortingStrategy}
            >
              <ol className="">
                {beers.map(function (b) {
                  return <SortableItem key={b.name} b={b} />;
                })}
              </ol>
            </SortableContext>
          </DndContext>
          <div className="admin-page__button-container">
            <button
              onClick={() => {
                setEditBeerName("");
                setEditBeerDescription("");
                setEditBeerABV("");
                setShowAddBeerModal(true);
              }}
            >
              Add new beer
            </button>
            <button onClick={downloadBeerList}>Download beer list</button>

            {/* <button>Save beer list</button>
            </div> */}
          </div>
        </div>
        <DeleteBeerModal
          beer={beerSelectedForDeletion}
          onCancel={() => setBeerSelectedForDeletion(null)}
          onSubmit={() => {
            const remainingBeers = filterOutBeer(
              beers,
              beerSelectedForDeletion
            );
            setBeers(remainingBeers);
            setBeerSelectedForDeletion(null);
          }}
        />
        <EditBeerModal
          isOpen={!!(beerSelectedForEdit || showAddBeerModal)}
          beer={beerSelectedForEdit}
          onCancel={() => {
            setBeerSelectedForEdit(null);
            setShowAddBeerModal(false);
          }}
          onSubmit={() => {
            const remainingBeers = beerSelectedForEdit
              ? filterOutBeer(beers, beerSelectedForEdit)
              : beers;

            remainingBeers.unshift(
              new Beer(
                editBeerName,
                parseFloat(editBeerABV),
                editBeerDescription
              )
            );
            setBeers(remainingBeers);
            setBeerSelectedForEdit(null);
            setShowAddBeerModal(false);
          }}
          editBeerName={editBeerName}
          editBeerDescription={editBeerDescription}
          editBeerABV={editBeerABV}
          setEditBeerName={setEditBeerName}
          setEditBeerDescription={setEditBeerDescription}
          setEditBeerABV={setEditBeerABV}
        />
      </div>
    </PageLayout>
  );
};

export const Head = () => (
  <MetaHelper title="Admin" description="Manage beer list" />
);

export default AdminPage;
