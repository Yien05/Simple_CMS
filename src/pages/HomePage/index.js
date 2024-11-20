import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="container mx-auto my-5" style={{ maxWidth: "500px" }}>
        <h1 className="h1 mb-4 text-center">My Blog</h1>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 4</h5>
            <p className="card-text">Here's some content about post 4</p>
            <div className="text-end">
              <Link to="/post" className="btn btn-primary btn-sm">Read More</Link>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 3</h5>
            <p className="card-text">This is for post 3</p>
            <div className="text-end">
              <Link to="/post" className="btn btn-primary btn-sm">Read More</Link>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 2</h5>
            <p className="card-text">This is about post 2</p>
            <div className="text-end">
              <Link to="/post" className="btn btn-primary btn-sm">Read More</Link>
            </div>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">Post 1</h5>
            <p className="card-text">This is a post</p>
            <div className="text-end">
              <Link to="/post" className="btn btn-primary btn-sm">Read More</Link>
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-center gap-3">
          <Link to="/login" className="btn btn-link btn-sm">Login</Link>
          <Link to="/signup" className="btn btn-link btn-sm">Sign Up</Link>
        </div>
      </div>
    );
  }
  
  export default Home;
  