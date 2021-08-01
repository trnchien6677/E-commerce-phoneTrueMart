import React, { Component } from 'react';
import ProductService from '../services/ProductService';
import { total, list, quantity, add, onChange } from 'cart-localstorage'
import NumberFormat from 'react-number-format';
class Vivo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            product: []
        } 
      }
      componentDidMount(){
        ProductService.getProductLimitVivo().then((res) => {
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
        return (
            <div className="container-12">
                <div id="content">
  <div id="content_top">
    <div className="row">
      <div className="col-md-11"><h3>Điện thoại Vivo</h3></div>
      <div className="col-md-1"><p style={{fontSize:"12px"}}><a href="http://localhost:3000/vivo" style={{textDecoration:"none"}}>Xem tất cả <i class="fas fa-caret-right"></i></a></p></div>
    </div>
    
  </div>
  <div id="content_bot">
    <div id="content_left">
      <div className="left-pro">
        <img src="home/images/body/body1.jpg" />
        
      </div>
      <div className="left-pro">
        <img src="home/images/body/body2.jpg" />
       
      </div>
    </div>
    <div id="content_right">
    {this.state.product.map((listpro) => ( 
      <div className="product">
        <img src={`http://localhost:8080/images/${listpro.image}`} className="image-product" />
        <span class="badge badge-info"> Trả góp: 0% </span>
        <div className="product-name"><a href={"./detail-product/" + listpro.id} style={{textDecoration:"none",color:"black"}}>{listpro.name}   </a>
        <span class="badge badge-danger"> -{listpro.discount}% </span>
       
        </div>
        <div className="product-price">
        Giá: <NumberFormat value={listpro.price-(listpro.price*listpro.discount/100)} displayType={'text'} thousandSeparator={true} /> đ
        
        </div>
        
        <div className="product-gift">
          <del>Giá: <NumberFormat value={listpro.price} displayType={'text'} thousandSeparator={true} /> đ</del>
        </div>

        <div className="product-gift-1">
            Quà: 300.000 đ 
            </div>
            <ul className="rating-stars mb-1 ml-2">
  <li style={{width: '90%'}} className="stars-active">
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
</div>

            </div>
        );
    }
}

export default Vivo;