import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import PolicyService from "../../services/PolicyService";
import HearderAdmin from "../HearderAdmin";
import ReactHtmlParser, {
    processNodes,
    convertNodeToElement,
    htmlparser2,
  } from "react-html-parser";
class Policy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      policy: [],
    };
    this.addPolicy = this.addPolicy.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.plusCategory = this.plusCategory.bind(this);
  }

  componentDidMount() {
    PolicyService.getPolicy().then((res) => {
      this.setState({ policy: res.data });
    });
  }
  addPolicy() {
    this.props.history.push("/admin-policy-add");
  }
  deleteCategory(id) {
    PolicyService.deletePolicy(id).then((res) => {
      this.setState({
        policy: this.state.policy.filter((policy) => policy.id !== id),
      });
    });
  }
  editCategory(id) {
    this.props.history.push(`/admin-policy-update-${id}`);
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
                  <h1 className="h3 mb-2 text-gray-800">Trang quản trị trang</h1>
                 
                  {/* DataTales Example */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <button
                        className="btn btn-primary"
                        onClick={this.addPolicy}
                      >
                        Tạo trang mới
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
                          
                              <th> Tên</th>
                              <th> Nội dung</th>
                                                     
                              <th> Hoạt động </th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.policy.map((listcate) => (
                              <tr key={listcate.id}>
                                <td> {listcate.id} </td>
                              
                                <td> {listcate.name} </td>
                                <td>  <p className="demo-2" style={{ maxWidth: "600px" }}>
                        
                        {ReactHtmlParser(listcate.content)}
                      </p></td>
                                
                                
                                <td>
                                  <button
                                    onClick={() =>
                                      this.editCategory(listcate.id)
                                    }
                                    className="btn btn-info"
                                  >
                                    <i class="fas fa-edit"></i>
                                  </button>

                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.deleteCategory(listcate.id)
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
export default Policy;
