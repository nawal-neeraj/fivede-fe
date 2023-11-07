import { useState } from "react";
import "./dragdropfile.css";

const DragDropFile = () => {
  const [file, setFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event.dataTransfer.files);
  };

  const handleBrowes = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    if (e.target.files[0] !== null) {
      setFile(URL.createObjectURL(e.target.files[0]));
      // window.location.reload();
    }
  };

  console.log("====>", file);
  return (
    <>
      {!file && (
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
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
      )}
    </>
  );
};

export default DragDropFile;
