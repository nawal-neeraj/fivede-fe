import DragDropFile from "../drop/dragDropFile";
import "./dashboard.css";

const Dashboard = () => {
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
              <input type="text" id="sample title" />
            </div>
          </div>
          <div className="row form-fill">
            <div className="col-6">
              <div className="row">
                <div>
                  <p className="ti">Tags</p>
                </div>
                <div>
                  <input type="text" id="sample tags" />
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
