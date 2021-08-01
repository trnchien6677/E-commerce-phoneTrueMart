import React, { Component } from "react";
import ProductService from "../services/ProductService";
import { total, list, quantity, add, onChange } from "cart-localstorage";
import NumberFormat from "react-number-format";
class Xiaomi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      currentPage: 1,
      size: 3,
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
    ProductService.getSamsung(currentPage, this.state.size)
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
  render() {
    return (
      <div className="container-12">
        <div id="content-samsung">
          <div id="content_top">
            <h3>Điện thoại Samsung</h3>
          </div>
          <div id="content_bot">
            <div id="content_left">
              <div className="left-pro">
                <img src="home/images/body/da.jpg" />
              </div>
            </div>
            <div id="content_right">
              {this.state.content.map((listpro) => (
                <div className="product">
                  <img
                    src={`http://localhost:8080/images/${listpro.image}`}
                    className="image-product"
                  />
                  <span class="badge badge-info"> Trả góp: 0% </span>
                  <div className="product-name">
                    <a
                      href={"./detail-product/" + listpro.id}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {listpro.name}{" "}
                    </a>
                    <span class="badge badge-danger">
                      {" "}
                      -{listpro.discount}%{" "}
                    </span>
                  </div>
                  <div className="product-price">
                    Giá:{" "}
                    <NumberFormat
                      value={
                        listpro.price -(listpro.price*listpro.discount/100)
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                    />{" "}
                    đ
                  </div>

                  <div className="product-gift">
                    <del>
                      Giá:{" "}
                      <NumberFormat
                        value={listpro.price}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      đ
                    </del>
                  </div>

                  <div className="product-gift-1">Quà: 300.000 đ</div>
                  <ul className="rating-stars mb-1 ml-2">
                    <li style={{ width: "90%" }} className="stars-active">
                      <img src="home/images/stars-active.svg" alt="" />
                    </li>
                    <li>
                      <img src="home/images/starts-disable.svg" alt="" />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
    <ul className="pagination" style={{marginLeft:"1264px"}}>
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
        </div>
      </div>
    );
  }
}

export default Xiaomi;
