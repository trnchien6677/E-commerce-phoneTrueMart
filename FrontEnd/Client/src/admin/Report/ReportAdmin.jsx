import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import ReportService from "../../services/ReportService";
import HearderAdmin from "../HearderAdmin";

class ReportAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      report: [],
    };
 
    this.deleteReport = this.deleteReport.bind(this);

  }

  componentDidMount() {
    ReportService.getReport().then((res) => {
      this.setState({ report: res.data });
    });
    
  }
 
  deleteReport(id) {
    ReportService.deleteReport(id).then((res) => {
      this.setState({
        report: this.state.report.filter((report) => report.id !== id),
      });
    });
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
                  <h1 className="h3 mb-2 text-gray-800">Trang quản trị báo cáo và đóng góp ý kiến</h1>
                 
                  {/* DataTales Example */}
                  <div className="card shadow mb-4">
                    
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          className="table table-bordered"
                          width="100%"
                          cellSpacing={0}
                        >
                          <thead>
                            <tr>
                            
                              <th style={{width:"200px",textAlign:"center"}}> Chủ đề</th> 
                              <th style={{width:"180px",textAlign:"center"}}> Họ và tên</th>
                              <th style={{width:"180px",textAlign:"center"}}> Số điện thoại</th>
                              <th style={{width:"230px",textAlign:"center"}}> Email</th>
                              <th> Nội dung</th>                      
                              <th style={{width:"20px",textAlign:"center"}}> Hoạt động </th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.report.map((listcate) => (
                              <tr key={listcate.id}>
                              
                                <td > {listcate.theme} </td>
                                <td> {listcate.fullname} </td>
                                <td> {listcate.phone} </td>
                                <td> {listcate.email}</td>
                                <td> {listcate.description}</td>
                                
                                <td>
                             

                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.deleteReport(listcate.id)
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
export default ReportAdmin;
