import React, { Component } from 'react';
import HearderAdmin from "../HearderAdmin";
import OrderService from '../../services/OrderService';
import NumberFormat from 'react-number-format';

class OrderDetailAdmin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          id: this.props.match.params.id,
          orderdetails: []
        } 
        this.listOrder = this.listOrder.bind(this);
      }
      componentDidMount(){
        OrderService.ListOrderDetail(this.state.id).then((res) => {
          this.setState({ orderdetails: res.data});
    
    });
      }
      listOrder(){
        this.props.history.push("/admin-order");
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
                        <button
                      className="btn btn-primary"
                      onClick={this.listOrder}
                    >
                      Danh sách đơn hàng
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
                                  <th> ID Order</th>
                                  <th style={{width:"120px"}}> Hình ảnh</th>
                                  <th> Tên Sản Phẩm</th>
                                  
                         
                                  <th> Giá</th> 
                                  <th> Số lượng</th>                       
                                  <th style={{width:"120px"}}> Màu</th>
                                </tr>
                              </thead>
    
                              <tbody>
                                {this.state.orderdetails.map((listnews) => (
                                  <tr key={listnews.id}>
                                        <td> {listnews.id_order}</td>
                                        <td > <img
                  src={"http://localhost:8080/images/" + listnews.image}
                  className="image-product" style={{width:"100px", height:"100px", }}
                /> </td>
                                    <td> {listnews.name} </td>
                       
                                    <td> <NumberFormat value={listnews.price} displayType={'text'} thousandSeparator={true} /> đ</td>
                                
                                    <td> {listnews.quantity}</td>
                                  
                                    
                                    <td>
                                   {listnews.color}
    
                                      
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

export default OrderDetailAdmin;