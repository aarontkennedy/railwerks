import * as React from "react";
import Drink from "../../types/drink";
import "../../styles/adminPage.scss";

const EditDrinkModal = ({
  isOpen,
  onCancel,
  onSubmit,
  drink,
  editDrinkName,
  editDrinkDescription,
  editDrinkABV,
  setEditDrinkName,
  setEditDrinkDescription,
  setEditDrinkABV,
}: {
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  drink: Drink | null;
  editDrinkName: string;
  editDrinkDescription: string;
  editDrinkABV: string | null;
  setEditDrinkName: (v: string) => void;
  setEditDrinkDescription: (v: string) => void;
  setEditDrinkABV: null | ((v: string) => void);
}) => {
  if (!isOpen) return null;

  return (
    <div className="admin-page__edit-modal modal">
      <div className="modal-content">
        <div className="modal-title">
          {drink ? `Edit ${editDrinkName}` : "Add"}
        </div>
        <div>
          <label className="input-label">Name:</label>
          <input
            className="edit-input edit-input-100-percent"
            value={editDrinkName.toUpperCase()}
            onChange={(e) => setEditDrinkName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <label className="input-label">Description:</label>
          <input
            className="edit-input edit-input-100-percent"
            value={editDrinkDescription}
            onChange={(e) => setEditDrinkDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        {setEditDrinkABV && (
          <div>
            <label className="input-label">ABV:</label>
            <input
              className="edit-input"
              value={editDrinkABV ?? ""}
              onChange={(e) => setEditDrinkABV(e.target.value)}
              placeholder="ABV"
              type="number"
            />
          </div>
        )}
        <div className="admin-page__button-container">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSubmit}>
            {drink ? `Update ${editDrinkName}` : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDrinkModal;
