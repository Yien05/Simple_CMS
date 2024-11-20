import { Link } from "react-router-dom";

function Dashboard() {
    return (
      <div className="container mx-auto my-5" style={{ maxWidth: "800px" }}>
        <h1 className="h1 mb-4 text-center">Dashboard</h1>
        <div className="row">
          <div className="col">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <div className="mb-1">
                    <i className="bi bi-pencil-square" style={{ fontSize: "3rem" }}></i>
                  </div>
                  Manage Posts
                </h5>
                <div className="text-center mt-3">
                  <Link to ="/manage-posts" className="btn btn-primary btn-sm">
                    Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title text-center">
                  <div className="mb-1">
                    <i className="bi bi-people" style={{ fontSize: "3rem" }}></i>
                  </div>
                  Manage Users
                </h5>
                <div className="text-center mt-3">
                  <Link to="/manage-users" className="btn btn-primary btn-sm">
                    Access
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link to="/dashboard" className="btn btn-link btn-sm">
            <i className="bi bi-arrow-left"></i> Back
          </Link>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  