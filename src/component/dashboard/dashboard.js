import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DragDropFile from "../drop/dragDropFile";
import "./dashboard.css";
import { getValue } from "../utils";
import { useNavigate } from "react-router";
import TagInput from "../tag/taginput";

const Dashboard = () => {
  const [title, setTitle] = useState();
  const { imageReducer = {} } = useSelector((state) => state);
  const { tagReducer = {} } = useSelector((state) => state);
  const navigate = useNavigate();
  const getId = getValue("userid");

  useEffect(() => {
    const getId = getValue("userid");
    if (getId === null) {
      navigate("/login");
    }
  }, []);

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
                <div className="">
                  <img src={imageReducer.url} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="drop">
                <DragDropFile />
              </div>
            </div>
          </div>
          <div className="Submit">
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
