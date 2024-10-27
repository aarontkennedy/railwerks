import * as React from "react";
import "../../styles/adminPage.scss";
import TrashIcon from "../../images/svg/trashIcon";
import EditIcon from "../../images/svg/editIcon";
import DragIcon from "../../images/svg/dragIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Drink from "../../types/drink";

const SortableItem = ({
  drink,
  setDrinkSelectedForDeletion,
  setEditDrinkName,
  setEditDrinkDescription,
  setEditDrinkABV,
  setDrinkSelectedForEdit,
}: {
  drink: Drink;
  setDrinkSelectedForDeletion: (d: Drink) => void;
  setEditDrinkName: (name: string) => void;
  setEditDrinkDescription: (description: string) => void;
  setEditDrinkABV?: (abv: string) => void;
  setDrinkSelectedForEdit: (d: Drink) => void;
}): JSX.Element => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: drink.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
  };

  return (
    <li ref={setNodeRef} style={style} className="row">
      <div>
        <div>
          {drink.name.toUpperCase()}{" "}
          {setEditDrinkABV ? `- ${drink.alcoholPercent}%` : ""}
        </div>
        <div>{drink.description}</div>
      </div>
      <div style={{ minWidth: "fit-content" }}>
        <button
          className="icon"
          onClick={() => setDrinkSelectedForDeletion(drink)}
        >
          <TrashIcon width={30} hexColor="#FFFFFF" />
        </button>
        <button
          className="icon"
          onClick={() => {
            setEditDrinkName(drink.name);
            setEditDrinkDescription(drink.description);
            if (setEditDrinkABV) {
              setEditDrinkABV(
                drink.alcoholPercent ? drink.alcoholPercent.toString() : ""
              );
            }
            setDrinkSelectedForEdit(drink);
          }}
        >
          <EditIcon width={30} hexColor="#FFFFFF" />
        </button>
        <button className="icon" {...attributes} {...listeners}>
          <DragIcon width={30} hexColor="#FFFFFF" />
        </button>
      </div>
    </li>
  );
};
export default SortableItem;
