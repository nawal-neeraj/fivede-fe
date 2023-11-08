import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./dragdropfile.css";
import { setImage } from "../redux/action";

const DragDropFile = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files[0] !== null) {
      dispatch(setImage(URL.createObjectURL(event.dataTransfer.files[0])));
    }
  };

  const handleBrowes = (e) => {
    e.preventDefault();
    if (e.target.files[0] !== null) {
      dispatch(setImage(URL.createObjectURL(e.target.files[0])));
    }
  };
  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h3>Drag and drop Files</h3>
        <h3>Or</h3>
        <h3>select file</h3>
        <button className="btn-browse">
          browse
          <input
            type="file"
            title="browse"
            // hidden
            onChange={(event) => handleBrowes(event)}
          />
        </button>
      </div>
    </>
  );
};

export default React.memo(DragDropFile);
