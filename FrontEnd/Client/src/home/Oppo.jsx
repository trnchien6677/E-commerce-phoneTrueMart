import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import ProductService from "../services/ProductService";
import NumberFormat from 'react-number-format';
import { total, list, quantity, add, onChange } from 'cart-localstorage'


class Oppo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            product: []
        } 
      }
      componentDidMount(){
        ProductService.getProductOppo().then((res) => {
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
     <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Điện thoại Oppo</h4>
          </header>
			<Marquee gradientColor pauseOnClick>
            {this.state.product.map((listpro) => ( 
              <div className="product-all mt-1">
                
                <img
                  src={`http://localhost:8080/images/${listpro.image}`}
                  className="image-product"
                />
                 <span class="badge badge-info"> Trả góp: 0% </span>
                <div className="product-name"><a href={"./detail-product/" + listpro.id}>{listpro.name}</a></div>
                <div className="product-price">Giá: <NumberFormat value={listpro.price-(listpro.price*listpro.discount/100)} displayType={'text'} thousandSeparator={true} /> đ</div>
                <div className="product-price-ori">
                <del>Giá: <NumberFormat value={listpro.price} displayType={'text'} thousandSeparator={true} /> đ</del>
                </div>
                {/* <div className="product-gift"> */}
                  {/* <label>Quà: 300.000 đ</label> <button className="btn btn-info ml-4" onClick={(e) => this.AddCart(listpro.id, listpro.name, listpro.price,listpro.image)}><i class="fas fa-cart-plus"></i></button> */}
                {/* </div> */}
                <div className="product-gift">
                  <label>Quà: 300.000 đ</label>
                </div>
                <ul className="rating-stars mb-1 ml-2">
  <li style={{width: '70%'}} className="stars-active">
    <img src="home/images/stars-active.svg" alt="" />
  </li>
  <li>
    <img src="home/images/starts-disable.svg" alt="" />
  </li>
</ul>
              </div>))
              }
            </Marquee>

          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default Oppo;
