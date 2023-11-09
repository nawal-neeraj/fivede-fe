import React from "react";
import { useDispatch } from "react-redux";
import "./dragdropfile.css";
import { setImage, setProgress } from "../redux/action";
import axios from "axios";

const DragDropFile = () => {
  const cloudUrl = "https://api.cloudinary.com/v1_1";
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
    const cloudName = process.env.REACT_APP_CLOUDE_NAME;
    const preset_key = process.env.REACT_APP_PRESEST_KEY;
    try {
      if (e.target.files[0] !== null) {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", preset_key);
        let url = `${cloudUrl}/${cloudName}/image/upload`;
        axios
          .post(`${url}`, formData, {
            onUploadProgress: (event) => {
              dispatch(
                setProgress(Math.round((100 * event.loaded) / event.total))
              );
            },
          })
          .then((res) => {
            dispatch(setImage(res.data.secure_url));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
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
