import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import OrderService from '../../services/OrderService';
import NumberFormat from 'react-number-format';
import authService from '../../services/auth.service';

class DetailOrderPa extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
      
          id: this.props.match.params.id,
          orderdetails: [],
         
        } 
       
      }
   
      componentDidMount(){
        OrderService.ListOrderDetail(this.state.id).then((res) => {
          this.setState({ orderdetails: res.data});
    
    });
   
    
      }
    render() {
        return (
            <div>
                <div className="container-1">
                    <Header/>
                    <div>

  {/* ========================= SECTION PAGETOP END// ========================= */}
  {/* ========================= SECTION CONTENT ========================= */}
  <section className="section-content padding-y">
    <div className="container-123">
      <div className="row">
       

      <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Đơn hàng bao gồm: </h4>
          </header>
              
               <article className="col-md-12" style={{width:"100%",height:"615px"}}>
              
               {this.state.orderdetails.map((list) => (
               <div className="table-responsive">
                 <table className="table table-hover">
                   <tbody><tr>
                       <td width={100}>
                         <img src={"http://localhost:8080/images/" + list.image} className="img-xs border" />
                         
                       </td>
                       <td width={300}> 
                         <a href={"/detail-product/"+list.id} style={{textDecoration:"none",color:"black",fontSize:"19px"}}> <p className="title mb-0">{list.name}</p></a>
                        
                        
                       </td>
                       <td>  <var className="price text-muted"><NumberFormat value={list.price} displayType={'text'} thousandSeparator={true} /> đ</var></td>
                       <td>Màu: {list.color}</td>
                       <td>Số lượng: {list.quantity}</td>
                     
                     </tr>
                   
                   </tbody></table>
               </div>
                             
              ))}
             </article>
        
              
           
 
      </div>
    </div> {/* container .//  */}
  </section>
  {/* ========================= SECTION CONTENT END// ========================= */}
</div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default DetailOrderPa;