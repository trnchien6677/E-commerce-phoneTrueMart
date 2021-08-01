import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import HearderAdmin from "../HearderAdmin";
import NumberFormat from 'react-number-format';
class DetailProductAdmin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.match.params.id,
          product: {},
         
          // quan:'1'
          // products: []
        };
        this.addProduct = this.addProduct.bind(this);
 
      }
      componentDidMount() {
        ProductService.getProductById(this.state.id).then((res) => {
          let product = res.data;
          this.setState({
            productimage: product.productimage,
            image: product.image,
            product: res.data,
          });
        });
       
  }
  addProduct(){
    this.props.history.push("/admin_product")
  }
  render() {
    return (
      <div>
        <div>
          <div id="wrapper">
         <HearderAdmin/>
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}

                <div className="container-fluid">
                  {/* Page Heading */}
                  <br></br>
                  <h1 className="h3 mb-2 text-gray-800">Chi tiết sản phẩm</h1>
                  
                  {/* DataTales Example */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <button
                        className="btn btn-primary"
                        onClick={this.addProduct}
                      >
                        Danh sách sản phẩm
                      </button>
                    </div>
                    <div className="mt-3 ml-3">
                  Hình ảnh: <img
                  src={`http://localhost:8080/images/` + this.state.product.image}
                  className="image-product" style={{width:"200px", height:"200px", }}
                />
                Chi tiết: <img
                  src={`http://localhost:8080/images/` + this.state.product.content}
                  className="image-product" style={{width:"200px", height:"200px", }}
                /><br/>
                        Tên Sản Phẩm: {this.state.product.name}<br/>
                        Giá:  <NumberFormat
                                  value={this.state.product.price}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />{" "}
                                đ <br/>
                                Số lượng: {this.state.product.total}<br/>
                                Giảm giá: {this.state.product.discount}%<br/>
          
                                Camera: {this.state.product.camera}<br/>
                                Cpu: {this.state.product.cpu}<br/>
                                Màn hình: {this.state.product.display}<br/>
                                Chiều rộng: {this.state.product.width}<br/>
                                Chiều cao: {this.state.product.height}<br/>
                                Độ dày: {this.state.product.thick}<br/>
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

export default DetailProductAdmin;

