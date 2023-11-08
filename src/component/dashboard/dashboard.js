import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DragDropFile from "../drop/dragDropFile";
import "./dashboard.css";
import { getValue } from "../utils";
import { useNavigate } from "react-router";
import TagInput from "../tag/taginput";
import Notiflix from "notiflix";
import authService from "../service/authService";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const { imageReducer = {} } = useSelector((state) => state);
  const { tagReducer = {} } = useSelector((state) => state);
  // console.log("----->", imageReducer.url);
  const navigate = useNavigate();

  useEffect(() => {
    const getId = getValue("userid");
    if (getId === null) {
      navigate("/login");
    }
  }, []);

  const handleSubmit = () => {
    let userid = getValue("userid");
    // console.log(id);
    if (title === "") {
      console.log("aa");
      Notiflix.Notify.failure("Please Enter title");
      return null;
    }
    if (tagReducer.arr.length <= 0) {
      Notiflix.Notify.failure("Please Enter tags");
      return null;
    }
    if (imageReducer.url === "") {
      Notiflix.Notify.failure("Please select images");
      return null;
    }
    const data = {
      title: title,
      tag: tagReducer.arr,
      image: imageReducer.url,
      comment: "check",
      userId: userid.replace(/"/g, ""),
    };
    try {
      authService.addMoment(data).then((res) => {
        if (res !== null) {
          Notiflix.Notify.success("Data saved Successfully");
          window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dash">
      <div className="dash-body">
        <div className="title">
          <h5 className="ps-2">Add new moment</h5>
        </div>
        <div className="form-box">
          <div className="row">
            <div>
              <p className="ti">Title</p>
            </div>
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="dash-input"
                id="sample-title"
              />
            </div>
          </div>
          <div className="row form-fill">
            <div className="col-6">
              <div className="row">
                <div>
                  <p className="ti">Tags</p>
                </div>
                <div>
                  <TagInput />
                </div>
              </div>
              <div className="row">
                {imageReducer.url !== "" && (
                  <div className="side-img">
                    <img className="img-tag" src={imageReducer.url} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="drop">
                <DragDropFile />
              </div>
            </div>
          </div>
          <div className="Submit">
            <button onClick={() => handleSubmit()} className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
