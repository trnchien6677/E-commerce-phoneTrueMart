import React, { Component } from "react";
import ProductService from "../services/ProductService";
import NumberFormat from "react-number-format";
import { total, list, quantity, add, onChange } from "cart-localstorage";
class Pt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      currentPage: 1,
      size: 8,
      disabled1: "",
      disabled2: "",
    };
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
    ProductService.getAllPr(currentPage, this.state.size)
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
  AddCart(id, name, price, image) {
    if (localStorage.getItem("cart_id") == null) {
      var crypto = require("crypto");
      var id_order = crypto.randomBytes(3).toString("hex");
      localStorage.setItem("cart_id", id_order);
    } else {
      id_order = localStorage.getItem("cart_id");
    }

    add({ id: id, name: name, price: price, image: image, id_order });
    onChange();
    alert("Thêm vào giỏ hàng thành công");
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        {/* =============== SECTION 1 =============== */}
        <section className="padding-bottom" style={{paddingBottom:"10px"}}>
          <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Sản phẩm mới</h4>
          </header>
          <div className="card card-home-category" style={{ height: "670px" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <div className="home-category-banner">
                  {/* <h5 className="title"></h5>
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                  <a href="#" className="btn btn-outline-primary rounded-pill">
                    Source now
                  </a> */}
                  <img
                    src="home/images/body/3.jpg"
                    className="img-banner"
                    style={{ width: "100%", height: "669px" }}
                  />
                </div>
              </div>{" "}
              {/* col.// */}
              <div className="col-md-8">
                <ul className="row no-gutters bordered-cols">
                  {this.state.content.map((hotnew) => (
                    <li className="col-6 col-lg-3 col-md-4">
                      <div className="card-body">
                        <a href={"./detail-product/" + hotnew.id}>
                          <img
                            className="img-sm"
                            style={{ marginLeft: "36px" }}
                            src={`http://localhost:8080/images/${hotnew.image}`}
                            alt="logo"
                          />
                        </a>
                        <div className="name-all mt-2 ml-30">
                          {" "}
                          <span class="badge badge-info">
                            {" "}
                            Trả góp: 0%{" "}
                          </span>{" "}
                          <span class="badge badge-danger">
                            <i class="fas fa-birthday-cake" /> Giảm sốc
                          </span>
                        </div>

                        <div className="name-all mt-2 ml-30">
                          <a
                            href={"./detail-product/" + hotnew.id}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              fontSize: "19px",
                              fontWeight: "bold",
                            }}
                          >
                            {hotnew.name}
                          </a>
                        </div>

                        <div className="price-all mt-1 mr-6">
                          <h6>
                            Giá:{" "}
                            <NumberFormat
                              value={
                                hotnew.price -(hotnew.price*hotnew.discount/100)
                              }
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                            <sup>VNĐ</sup>
                          </h6>
                        </div>

                        <div
                          className="price-all-1 mt-1 mr-6"
                          style={{ color: "black" }}
                        >
                          <del>
                            Giá:{" "}
                            <NumberFormat
                              value={hotnew.price}
                              displayType={"text"}
                              thousandSeparator={true}
                            />{" "}
                            đ
                          </del>
                        </div>
                        <div className="product-gift-1 ml-5">
                          Quà: 300.000 đ
                          <ul className="rating-stars mb-1 ml-2">
                            <li
                              style={{ width: "90%" }}
                              className="stars-active"
                            >
                              <img src="home/images/stars-active.svg" alt="" />
                            </li>
                            <li>
                              <img
                                src="home/images/starts-disable.svg"
                                alt=""
                              />
                            </li>
                          </ul>
                        </div>

                        {/* <div className="product-gift">
                     
                       <label>Quà: 300.000 đ</label><button className="btn btn-info ml-4" onClick={(e) => this.AddCart(hotnew.id, hotnew.name, hotnew.price,hotnew.image)}><i class="fas fa-cart-plus"></i></button>
             
                       </div> */}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <ul className="pagination" style={{marginLeft:"1283px"}}>
          <li className={"page-item " + this.state.disabled1}>
            <button className="page-link" href="#" onClick={this.previousPage}>
              Trước
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
    );
  }
}

export default Pt;
