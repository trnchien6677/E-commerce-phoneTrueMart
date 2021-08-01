import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
import NewsService from "../../services/NewsService";
import HearderAdmin from "../HearderAdmin";
import authService from "../../services/auth.service";

class UpdateNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      username: "",
      email: "",
      password: "",
    };
    this.updateUser = this.updateUser.bind(this);
  
  }
  componentDidMount() {
    // console.log("id_user => " + JSON.stringify(this.state.id));
    authService.getUser(this.state.id).then((res) => {
      let user = res.data;
      this.setState({
        username: user.username,
        email: user.email,
        password: user.password
      });
     
    });
    
  }
  updateUser = (e) => {
    e.preventDefault();
    let user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
    };
    authService.updateUser(user, this.state.id).then((res) => {
      this.props.history.push("/admin-user");
    });
  };

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
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
                <h1 className="h3 mb-2 text-gray-800">Trang quản trị tài khoản</h1>
               
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <button
                      className="btn btn-primary"
                      onClick={this.listNews}
                    >
                      Danh sách tài khoản
                    </button>
                  </div>
                  <br></br>
                  <div className="container">
                    <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                        {<h3 className="text-center">Thay đổi thông tin tài khoản</h3>}
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                              <label> Tài khoản </label>
                              <input
                                type="text"
                                placeholder="Title News"
                                name="title"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.changeUsername}
                              />
                            </div>
                            <div className="form-group">
                              <label> Email </label>
                              <input
                                type="text"
                                placeholder="Des"
                                name="des"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.changeEmail}
                              />
                            </div>

                            <div className="form-group">
                              <label> Password </label>
                              <input
                                type="password"
                                placeholder="Des"
                                name="des"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.changePassword}
                              />
                            </div>
                          
                            <button
                              className="btn btn-success"
                              onClick={this.updateUser}
                            >
                              Save
                            </button>
                           
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
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
    );
  }
}

export default UpdateNews;
