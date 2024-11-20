import { Link } from "react-router-dom";

function PostManage() {
    return (
      <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Manage Posts</h1>
          <div className="text-end">
            <Link to="/manage-posts/add" className="btn btn-primary btn-sm">
              Add New Post
            </Link>
          </div>
        </div>
        <div className="card mb-2 p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col" style={{ width: "40%" }}>Title</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 5, title: "Post 5", status: "Pending Review", badge: "warning", disabled: true },
                { id: 4, title: "Post 4", status: "Publish", badge: "success" },
                { id: 3, title: "Post 3", status: "Publish", badge: "success" },
                { id: 2, title: "Post 2", status: "Publish", badge: "success" },
                { id: 1, title: "Post 1", status: "Publish", badge: "success" }
              ].map(post => (
                <tr key={post.id}>
                  <th scope="row">{post.id}</th>
                  <td>{post.title}</td>
                  <td>
                    <span className={`badge bg-${post.badge}`}>{post.status}</span>
                  </td>
                  <td className="text-end">
                    <div className="buttons">
                      <Link to="/post"
                        target="_blank"
                        className={`btn btn-primary btn-sm me-2 ${post.disabled ? "disabled" : ""}`}
                      >
                        <i className="bi bi-eye"></i>
                      </Link>
                      <Link to="/manage-posts/edit"
                        className="btn btn-secondary btn-sm me-2"
                      >
                        <i className="bi bi-pencil"></i>
                      </Link>
                      <Link to="#" className="btn btn-danger btn-sm">
                        <i className="bi bi-trash"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <Link to="/dashboard" className="btn btn-link btn-sm">
            <i className="bi bi-arrow-left"></i> Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }
  
  export default PostManage;
  