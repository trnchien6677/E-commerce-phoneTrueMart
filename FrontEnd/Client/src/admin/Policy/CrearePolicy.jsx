import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import PolicyService from "../../services/PolicyService";
import HearderAdmin from "../HearderAdmin";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
class CrearePolicy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      content: "",
    };
    this.saveCategory = this.saveCategory.bind(this);
    this.listCategory = this.listCategory.bind(this);
  
  }
  componentDidMount() {
    return;
  }

  saveCategory = (e) => {
    e.preventDefault();
    let policy = {
      name: this.state.name,
      content: this.state.content,
    };

    PolicyService.createPolicy(policy).then((res) => {
      this.props.history.push("/admin-policy");
    });
  };
 
  addName = (event) => {
    this.setState({ name: event.target.value });
  };

  addContent = (event, editor) => {
    const data = editor.getData();
    this.setState({ content: data });
    console.log("STATE", { data });
  };

 
  cancel() {
    this.props.history.push("/admin_category");
  }
  listCategory() {
    this.props.history.push("/admin-policy");
  }
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
                <h1 className="h3 mb-2 text-gray-800">Trang quản trị trang</h1>
              
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <button
                      className="btn btn-primary"
                      onClick={this.listCategory}
                    >
                      Danh sách trang
                    </button>
                  </div>
                  <br></br>
                  <div className="container">
                    <div className="row">
                      <div className="card col-md-12">
                        {<h3 className="text-center">Tạo trang</h3>}
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                              <label> Tên trang</label>
                              <input
                                type="text"
                                placeholder="Tên nhóm sản phẩm"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.addName}
                              />
                            </div>
                         
                            <div className="form-group">
                              <label> Nội dung </label>
                              <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
       value={this.state.content}
       onChange ={this.addContent}
       config = {
        {
           // plugins: [ Essentials ],
          ckfinder: {
              // The URL that the images are uploaded to.
              uploadUrl: '/upload', 
  
              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,
  
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                  'X-CSRF-TOKEN': 'CSFR-Token',
                   Authorization: 'Bearer <JSON Web Token>'
              }
        } }

     }
       
     />

                            </div>
                          
                            <button
                              className="btn btn-success"
                              onClick={this.saveCategory}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={this.cancel.bind(this)}
                              style={{ marginLeft: "10px" }}
                            >
                              Cancel
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

export default CrearePolicy;
