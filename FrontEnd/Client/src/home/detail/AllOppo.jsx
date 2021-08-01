import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NumberFormat from "react-number-format";
import ProductService from "../../services/ProductService";
class AllOppo extends Component {
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
  render() {
    return (
      <div>
        <div className="container-1">
          <Header />
          <div className="container-12">
        <div id="body-detail-product">
        <div className="searchkey mt-2 ml-6">
            <div className="col-md-3"> <p style={{marginLeft:"10px"}}>Home <i class="fas fa-caret-right"></i> Điện thoại <i class="fas fa-caret-right"></i> Oppo</p></div>
               
            </div>
        <div className="searchkey mt-3 ml-6">
            <div className="row"> 
            
            <div className="col-md-4"> <h5 style={{marginLeft:"15px"}}>Điện thoại Oppo</h5></div> 
            <div className="col-md-1 huchuc"><a href="http://localhost:3000/iphone" style={{textDecoration:"none",color:"black"}}>iPhone</a></div>
            <div className="col-md-1 huchuc"><a href="http://localhost:3000/samsung" style={{textDecoration:"none",color:"black"}}>Samsung</a></div> 
            <div className="col-md-1 huchuc"><a href="http://localhost:3000/xiaomi" style={{textDecoration:"none",color:"black"}}>Xiaomi</a></div> 
            <div className="col-md-1 huchuc"><a href="http://localhost:3000/oppo" style={{textDecoration:"none",color:"black"}}>Oppo</a></div> 
            <div className="col-md-1 huchuc"><a href="http://localhost:3000/vivo" style={{textDecoration:"none",color:"black"}}>Vivo</a></div>
            <div className="col-md-1 huchuc"><a href="http://localhost:3000/nokia" style={{textDecoration:"none",color:"black"}}>Nokia</a></div> 
            <div className="col-md-1 huchuc"><a href="http://localhost:3000/phukien" style={{textDecoration:"none",color:"black"}}>Phụ kiện</a></div> 
            </div>
               
            </div>

           
        <div className="row mt-2">
              {this.state.product.map((listpro) => (
                <div className="col-md-3">
                  <div className="card card-product-grid mr-7">
                    <a href="#" className="img-wrap">
                      {" "}
                      <img
                            src={`http://localhost:8080/images/${listpro.image}`}
                            className="image-product"
                          />
                    </a>
                    <figcaption className="info-wrap" style={{marginLeft:"35px"}}>
                      
                      <div>

                        <a href="#" className="text-muted ml-4" style={{color:"black", fontWeight:"bold",fontSize:"19px",textDecoration:"none"}}>
                          <a href={"http://localhost:3000/detail-product/" + listpro.id}  style={{color:"black", fontWeight:"bold",fontSize:"19px",textDecoration:"none"}}>
                            {listpro.name}  <span class="badge badge-danger"> -{listpro.discount}% </span>
                          </a>
                        </a>
                
                      </div>
                      
                      <div style={{color:"red", fontWeight:"bold",fontSize:"19px",textDecoration:"none"}}>
                        <a href="#" className="text-mut ml-4" style={{color:"red", fontWeight:"bold",fontSize:"19px",textDecoration:"none"}}>
                        <NumberFormat value={listpro.price-(listpro.price*listpro.discount/100)} displayType={'text'} thousandSeparator={true} /> đ
                        </a>
                      </div>

                      <div>
                        <a href="#" className="text-muted ml-4" style={{textDecoration:"none"}}>
                        <del><NumberFormat value={listpro.price} displayType={'text'} thousandSeparator={true} /> đ</del>
                       
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
     
      </div>
      <Footer />
      </div>
    );
  }
}

export default AllOppo;
