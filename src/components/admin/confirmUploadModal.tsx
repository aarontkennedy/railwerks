import * as React from "react";
import { useState } from "react";
import "../../styles/adminPage.scss";
import Drink from "../../types/drink";
import { getCsvString } from "./drinkEditor";

const ConfirmUploadModal = ({
  drinks,
  drinkLabel,
  onCancel,
  onSubmit,
}: {
  drinks: Drink[];
  drinkLabel: "beer" | "cocktail";
  onCancel: () => void;
  onSubmit: (password: string, supportABV: boolean) => void;
}) => {
  const supportABV = drinkLabel === "beer";
  const [password, setPassword] = useState("");

  const handleChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div className="admin-page__delete-modal modal">
      <div className="modal-content">
        <div className="modal-title">
          Are you sure you want to upload to the server?{" "}
          <div style={{ fontSize: "14px" }}>
            Always verify successful upload by checking the website in a
            private/incognito window.
          </div>
        </div>
        <pre>{getCsvString(drinks, supportABV)}</pre>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="admin-page__button-container">
          <button onClick={onCancel}>Cancel</button>
          <button
            onClick={() => {
              onSubmit(password, supportABV);
            }}
            disabled={!password}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmUploadModal;
