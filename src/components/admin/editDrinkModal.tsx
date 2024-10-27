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
        <div className="modal-title">
          {beer ? `Edit ${editBeerName}` : "Add beer"}
        </div>
        <div>
          <label className="input-label">Name:</label>
          <input
            className="edit-input edit-input-100-percent"
            value={editBeerName.toUpperCase()}
            onChange={(e) => setEditBeerName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <label className="input-label">Description:</label>
          <input
            className="edit-input edit-input-100-percent"
            value={editBeerDescription}
            onChange={(e) => setEditBeerDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div>
          <label className="input-label">ABV:</label>
          <input
            className="edit-input"
            value={editBeerABV}
            onChange={(e) => setEditBeerABV(e.target.value)}
            placeholder="ABV"
            type="number"
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
