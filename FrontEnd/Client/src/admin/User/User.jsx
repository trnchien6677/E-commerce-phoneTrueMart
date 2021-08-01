import React, { Component } from "react";
import authService from "../../services/auth.service";
import CategoryService from "../../services/CategoryService";
import HearderAdmin from "../HearderAdmin";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.plusCategory = this.plusCategory.bind(this);
  }

  componentDidMount() {
    authService.getAllUser().then((res) => {
      this.setState({ users: res.data });
    });

  }
  addUser() {
    this.props.history.push("/admin-user-add/add");
  }
  deleteUser(id) {
    authService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((users) => users.id !== id),
      });
    });
  }
  editUser(id) {
    this.props.history.push(`/admin-user-update/${id}`);
  }
  plusCategory(id){
    this.props.history.push(`/admin-product/add/${id}`);
  }
  render() {
    return (
      <div>
        <div>
          <div id="wrapper">
           <HearderAdmin/>
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}

                <div className="container-fluid">
                  {/* Page Heading */}
                  <br></br>
                  <h1 className="h3 mb-2 text-gray-800">Trang quản trị tài khoản người dùng</h1>
                 
                  {/* DataTales Example */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <button
                        className="btn btn-primary"
                        onClick={this.addUser}
                      >
                        Tạo tài khoản
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-bordered"
                          width="100%"
                          cellSpacing={0}
                        >
                          <thead>
                            <tr>
                              <th> ID</th>
                              <th> UserName</th>
                              <th> Email</th>
                                             
                              <th> Action </th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.users.map((listuser) => (
                              <tr key={listuser.id}>
                                <td> {listuser.id} </td>
                                <td> {listuser.username} </td>
                                <td> {listuser.email}</td>
                           
                                
                                <td>
                                  <button
                                    onClick={() =>
                                      this.editUser(listuser.id)
                                    }
                                    className="btn btn-info"
                                  >
                                    <i class="fas fa-edit"></i>
                                  </button>

                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.deleteUser(listuser.id)
                                    }
                                    className="btn btn-danger"
                                  >
                                    <i class="fas fa-trash-alt"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.container-fluid */}
              </div>
              {/* End of Main Content */}
              {/* Footer */}
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website 2020</span>
                  </div>
                </div>
              </footer>
              {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
          </div>
          {/* End of Page Wrapper */}
          {/* Scroll to Top Button*/}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
          {/* Logout Modal*/}
          <div
            className="modal fade"
            id="logoutModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Ready to Leave?
                  </h5>
                  <button
                    className="close"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  Select "Logout" below if you are ready to end your current
                  session.
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <a className="btn btn-primary" href="login.html">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default User;
