import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProductService from "../services/ProductService";
import NumberFormat from 'react-number-format';
import { total, list, quantity, add, onChange } from 'cart-localstorage'

class Phukien extends Component {
  constructor(props) {
    super(props)

    this.state = {
        product: []
    } 
  }
  componentDidMount(){
    ProductService.getProductPhukien().then((res) => {
      this.setState({ product: res.data});
  });
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
    const { items } = this.state;
    return (
      <div>
       <section class="padding-bottom mt-3">
	 <div class="card card-deal">
		 <div class="col-heading content-body-1">
          <div className="container-2">
          <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Phụ kiện nổi bật</h4>
          </header>
            
            <Carousel itemsToShow={6}>
            {this.state.product.map((listpro) => (
              <div className="product-all mt-1">
                <a href={"http://localhost:3000/detail-phukien-" + listpro.id}>
               
                <img
                  src={"http://localhost:8080/images/" + listpro.image}
                
                  className="image-product"
                />
                </a>
                <span class="badge badge-info"> Trả góp: 0% </span> <span class="badge badge-danger"><i class="fas fa-birthday-cake"/>  Giảm sốc</span>
                <div className="product-name"><a href={"http://localhost:3000/detail-phukien-" + listpro.id}>  {listpro.name}</a></div>
                <div className="product-price">Giá:  <NumberFormat value={listpro.price-(listpro.price*listpro.discount/100)} displayType={'text'} thousandSeparator={true} /> đ</div>
                <div className="product-price-ori">
                <del>Giá: <NumberFormat value={listpro.price} displayType={'text'} thousandSeparator={true} /> đ</del>
                </div>
                <div className="product-gift">
                  {/* <label>Quà: 300.000 đ</label> <button className="btn btn-info ml-4" onClick={(e) => this.AddCart(listpro.id, listpro.name, listpro.price,listpro.image)}><i class="fas fa-cart-plus"></i></button> */}
                </div>
                <ul className="rating-stars mb-1 ml-2">
  <li style={{width: '87%'}} className="stars-active">
    <img src="home/images/stars-active.svg" alt="" />
  </li>
  <li>
    <img src="home/images/starts-disable.svg" alt="" />
  </li>
</ul>
              </div>))
              }
            </Carousel>
          </div>
        </div>
      </div>
      </section>
      </div>
    );
  }
}

export default Phukien;
