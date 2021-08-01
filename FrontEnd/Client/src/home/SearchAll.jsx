import React, { Component } from "react";
import ProductService from "../services/ProductService";
import NumberFormat from "react-number-format";
import Footer from "./Footer";
import {add, onChange } from 'cart-localstorage'
import Header from "./Header";

class SearchAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const keyword = this.props.match.params.keyword;
    ProductService.findByName(keyword).then((res) =>
      this.setState({ data: res.data }),
    );
  }
  AddCart(id, name, price,image) {
    if ((localStorage.getItem("cart_id")) == null) {
      var crypto = require("crypto");
      var id_order = crypto.randomBytes(3).toString("hex");
      localStorage.setItem("cart_id", id_order);
    } else {
       id_order =(localStorage.getItem("cart_id"));
    }

    add({ id: id, name: name, price: price,image:image,id_order });
    onChange();
    alert("Thêm vào giỏ hàng thành công")
}

  render() {
    return (
      <div>
        <div className="container-1">
          <Header />
          <div>
              <div className="searchkey mt-2">
                  <h3>Kết quả tìm kiếm</h3>
              </div>

            <div className="row">
              {this.state.data.map((listpro) => (
                <div className="col-md-3">
                  <div className="card card-product-grid mr-7">
                    <a href="#" className="img-wrap">
                      {" "}
                      <img
                            src={"http://localhost:8080/images/" + listpro.image}
                            className="image-product"
                          />
                    </a>
                    <figcaption className="info-wrap">
                      
                      <div>
                        <a href="#" className="text-muted ml-4" style={{color:"black", fontWeight:"bold",fontSize:"19px",textDecoration:"none"}}>
                          <a href={"http://localhost:3000/detail-product/" + listpro.id}  style={{color:"black", fontWeight:"bold",fontSize:"19px",textDecoration:"none"}}>
                            {listpro.name}  <span class="badge badge-info"> Trả góp: 0% </span>
                          </a>
                        </a>
                    
                      </div>
                      <div>
                        <a href="#" className="text-muted ml-4" style={{color:"black", fontWeight:"bold",fontSize:"19px",textDecoration:"none"}}>
                        <NumberFormat value={listpro.price} displayType={'text'} thousandSeparator={true} /> đ
                        </a>
                    
                      </div>
                      <div>
                        <a href="#" className="text-muted ml-4" style={{textDecoration:"none"}}>
                        <del><NumberFormat value={listpro.price+(listpro.price*listpro.discount/100)} displayType={'text'} thousandSeparator={true} /> đ</del>
                       
                        </a>
                    
                      </div>
                      <div className="product-gift ml-4" style={{color:"chocolate", fontWeight:"bold"}}>
                  <label>Quà: 300.000d</label>
                
      
                </div>
                <ul className="rating-stars mb-1 ml-2 ml-4">
  <li style={{width: '70%'}} className="stars-active">
    <img src="../home/images/stars-active.svg" alt="" />
  </li>
  <li>
    <img src="../home/images/starts-disable.svg" alt="" />
  </li>
</ul>
                    </figcaption>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchAll;
