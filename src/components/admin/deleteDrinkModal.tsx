import * as React from "react";
import "../../styles/adminPage.scss";
import Drink from "../../types/drink";

const DeleteDrinkModal = ({
  onCancel,
  onSubmit,
  drink,
}: {
  onCancel: () => void;
  onSubmit: () => void;
  drink: Drink | null;
}) => {
  if (!drink) return null;

  const drinkName = drink.name.toUpperCase();

  return (
    <div className="admin-page__delete-modal modal">
      <div className="modal-content">
        <div className="modal-title">
          Are you sure you want to delete {drinkName}?
        </div>
        <div className="admin-page__button-container">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSubmit}>Delete {drinkName}</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDrinkModal;
