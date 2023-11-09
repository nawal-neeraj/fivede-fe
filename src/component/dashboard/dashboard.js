import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DragDropFile from "../drop/dragDropFile";
import "./dashboard.css";
import { getValue } from "../utils";
import { useNavigate } from "react-router";
import TagInput from "../tag/taginput";
import Notiflix from "notiflix";
import authService from "../service/authService";
import { momentValidation } from "../validation/validation";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const { imageReducer = {} } = useSelector((state) => state);
  const { tagReducer = {} } = useSelector((state) => state);
  const maxlength = 100;
  const getUserId = "userid";
  const navigate = useNavigate();
  console.log(imageReducer.url);

  useEffect(() => {
    const getId = getValue(getUserId);
    if (getId === null) {
      navigate("/login");
    }
  }, []);

  const handleSubmit = () => {
    let userid = getValue(getUserId);
    const data = {
      title: title,
      tag: tagReducer.arr,
      image: imageReducer.url,
      comment: comment,
      userId: userid.replace(/"/g, ""),
    };
    if (momentValidation(data) === null) {
      return null;
    }
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
                <div>
                  <p className="ti">Comment</p>
                </div>
                <div className="textarea">
                  <textarea
                    onChange={(e) => setComment(e.target.value)}
                    maxLength={maxlength}
                    className="text-area"
                  />
                  <p className="cmnt">
                    Words: {Math.abs(comment.length - 100)}
                  </p>
                </div>
              </div>
              <div className="row">
                {imageReducer.url !== "" && (
                  <div>
                    <div className="img-title">
                      <p>Uploading</p>
                    </div>
                    <div className="side-img">
                      <img className="img-tag" src={imageReducer.url} alt="" />
                    </div>
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
        </div>
        <div className="Submit">
          <button onClick={() => handleSubmit()} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
