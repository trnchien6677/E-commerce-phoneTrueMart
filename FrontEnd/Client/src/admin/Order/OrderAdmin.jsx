import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import NewsService from "../../services/NewsService";
import OrderService from "../../services/OrderService";
import HearderAdmin from "../HearderAdmin";

class OrderAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      order: [],
    };
   
    this.detailOrder = this.detailOrder.bind(this);
   this.deleteOrder = this.deleteOrder.bind(this);
  }

  componentDidMount() {
    OrderService.getOrderAll().then((res) => {
      this.setState({ order: res.data });
    });
  }

  detailOrder(id) {
    this.props.history.push(`/admin-detail-order/${id}`);
  }
  deleteOrder(id) {
    OrderService.deleteOrder(id).then((res) => {
      this.setState({
        order: this.state.order.filter((order) => order.id !== id),
      });
    });
    
  }
  Huy(id, fullname, id_order, phone, user_id, address, status) {
    let order = {
      fullname: fullname,
      id_order: id_order,
      phone: phone,
      user_id: user_id,
      address: address,
    };
    if (status == true) {
      OrderService.CancelOrder(order, id).then((res) => {});
    }
    if (status == false) {
      OrderService.NoCancelOrder(order, id).then((res) => {});
    }
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
                  <h1 className="h3 mb-2 text-gray-800">Trang quản trị đơn hàng</h1>
               
                  {/* DataTales Example */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                     
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
                              <th> Tên Khách Hàng</th>
                              <th> Địa chỉ</th>
                     
                              <th> Số điện thoại</th> 
                              <th> Mã đơn hàng</th>                       
                              <th style={{width:"230px"}}> Hoạt động </th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.order.map((listnews) => (
                              <tr key={listnews.id}>
                                    <td> {listnews.id}</td>
                                <td> {listnews.fullname1} </td>
                                <td> {listnews.address} </td>
                                <td> {listnews.phone}</td>
                            
                                <td> {listnews.id_order}</td>
                              
                                
                                <td>
                                  <button
                                    onClick={() =>
                                      this.detailOrder(listnews.id_order)
                                    }
                                    className="btn btn-info"
                                  >
                                    Chi tiết
                                  </button>
                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.deleteOrder(listnews.id)
                                    }
                                    className="btn btn-danger"
                                  >
                                    Đã giao hàng
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
export default OrderAdmin;
