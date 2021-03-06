import React, { Component } from "react";

import HearderAdmin from "../HearderAdmin";
import NumberFormat from "react-number-format";
import ProductService from "../../services/ProductService";
class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      currentPage: 1,
      size: 8,
      disabled1: "",
      disabled2: "",
    };
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.detailProduct = this.detailProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.hotBest = this.hotBest.bind(this);
  }
  changcurrentPage(currentPage) {
    let condition = Math.ceil(this.state.totalElements / this.state.size);
    if (this.state.currentPage < condition)
      if (currentPage === 1) this.setState({ disabled1: "disabled" });
      else this.setState({ disabled1: " " });
    if (currentPage === condition) this.setState({ disabled2: "disabled" });
    else this.setState({ disabled2: " " });
  }
  previousPage() {
    if (this.state.currentPage > 1) this.state.currentPage -= 1;
    this.hotBest(this.state.currentPage);
    this.changcurrentPage(this.state.currentPage);
  }
  nextPage() {
    let condition = Math.ceil(this.state.totalElements / this.state.size);
    if (this.state.currentPage < condition) this.state.currentPage += 1;
    this.hotBest(this.state.currentPage);
    this.changcurrentPage(this.state.currentPage);
  }
  hotBest(currentPage) {
    currentPage -= 1;
    ProductService.getPt(currentPage, this.state.size)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          content: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  }
  componentDidMount() {
    this.changcurrentPage(this.state.currentPage);
    this.hotBest(this.state.currentPage);
  }
  addProduct() {
    this.props.history.push("/admin-product/add");
  }
  editProduct(id) {
    this.props.history.push(`/admin-product-update-${id}`);
  }
  detailProduct(id) {
    this.props.history.push(`/admin-product-detail/${id}`);
  }
  deleteProduct(id) {
    ProductService.deleteProduct(id).then((res) => {
      this.setState({
        content: this.state.content.filter((content) => content.id !== id),
      });
    });
    
  }
  render() {
    return (
      <div>
        <div>
          <div id="wrapper">
            <HearderAdmin />
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}

                <div className="container-fluid">
                  {/* Page Heading */}
                  <br></br>
                  <h1 className="h3 mb-2 text-gray-800">
                    Trang qu???n tr??? s???n ph???m
                  </h1>

                  {/* DataTales Example */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <button
                        className="btn btn-primary"
                        onClick={this.addProduct}
                      >
                        T???o s???n ph???m m???i
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
                              <th style={{ width: 120 }}> ID</th>
                              <th style={{ width: 120 }}> H??nh ???nh </th>
                              <th style={{ width: 120 }}> Chi ti???t</th>
                              <th> T??n</th>
                              <th style={{ width: 250 }}> Gi??</th>

                              <th style={{ width: 200 }}> Action </th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.content.map((listpro) => (
                              <tr key={listpro.id}>
                                <td > {listpro.id} </td>
                                <td>
                                  {" "}
                                  <img
                                    src={
                                      `http://localhost:8080/images/${listpro.image}`
                                    }
                                    className="image-product"
                                    style={{ width: "100px", height: "100px" }}
                                  />{" "}
                                </td>
                                <td>
                                  {" "}
                                  <img
                                    src={
                                      `http://localhost:8080/images/${listpro.content}`
                                    }
                                    className="image-product"
                                    style={{ width: "100px", height: "100px" }}
                                  />{" "}
                                </td>
                                <td> {listpro.name} </td>
                                <td>
                                  {" "}
                                  <NumberFormat
                                    value={listpro.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />{" "}
                                  ??
                                </td>

                                <td>
                                  <button
                                    onClick={() => this.editProduct(listpro.id)}
                                    className="btn btn-info"
                                  >
                                    <i class="fas fa-edit"></i>
                                  </button>

                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.deleteProduct(listpro.id)
                                    }
                                    className="btn btn-danger"
                                  >
                                    <i class="fas fa-trash-alt"></i>
                                  </button>

                                  <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() =>
                                      this.detailProduct(listpro.id)
                                    }
                                    className="btn btn-primary"
                                  >
                                    Chi ti???t
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                
                  
                        </table>
                     
            
                      </div>
                     
                    </div>
                    <div className="cfd" style={{marginLeft:"-150px"}}>
                        <ul className="pagination">
          <li className={"page-item " + this.state.disabled1}>
            <button className="page-link" href="#" onClick={this.previousPage}>
              Tr?????c
            </button>
          </li>
          <li className="page-item active">
            <a
              className="page-link"
              href="#"
              value={this.state.currentPage}
              onChange={this.changcurrentPage}
            >
              {this.state.currentPage}
            </a>
          </li>
          <li className={"page-item " + this.state.disabled2}>
            {" "}
            <button className="page-link" href="#" onClick={this.nextPage}>
              Sau
            </button>
          </li>
        </ul>
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
                    <span>Copyright ?? Your Website 2020</span>
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
                    <span aria-hidden="true">??</span>
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

export default Product;
