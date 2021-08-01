import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import NumberFormat from "react-number-format";
import { total, list, quantity, add,remove, onChange } from "cart-localstorage";
const tong = total();
const user =localStorage.getItem("user");
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listcart: list(),
    };
  }
  AddCart(id, title, price, image, e) {
    add({ id: id, title: title, price: price, image: image });
    onChange();
  }
  DeleteAddCart(id) {
    quantity(id, -1);
  }
  
  RemoveAddCart(id) {
    remove(id);
  }
  checkout(){
    if(user==null){
      this.props.history.push("/login");
    }else{
      this.props.history.push("/order");
    }
  }
  
  render() {
    return (
      <div>
        <div className="container-1">
          <Header />
          <section className="section-content padding-y">
            <div className="container-2">
              <div className="row">
                <main className="col-md-9">
                  <div className="card">
                    <table className="table table-borderless table-shopping-cart">
                      <thead className="text-muted">
                        <tr className="small text-uppercase">
                          <th scope="col" width={100}></th>
                          <th scope="col" width={160}>
                            Tên sản phẩm
                          </th>
                          <th scope="col" width={120} style={{textAlign:"center"}}>
                            Giá
                          </th>
                          <th scope="col" width={120}>
                            Số lượng
                          </th>
                          <th scope="col" width={120}>
                            Thành tiền
                          </th>
                          <th scope="col" width={20} style={{textAlign:"center"}}>
                            
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.listcart.map((cart) => (
                          <tr>
                            <td>
                              <div className="imagecartshop">
                                <img
                                  src={
                                    "http://localhost:8080/images/" + cart.image
                                  }
                                  className="image-product"
                                />
                              </div>
                            </td>
                            <td>
                              <figure className="itemside">
                          
                                <figcaption className="info">
                                  <a href={"./detail-product/" + cart.id} className="title text-dark" style={{textDecoration:"none"}}>
                                    {cart.name}
                                  </a>
                                  {/* <p className="text-muted small">
                                   {cart.width}, Color: blue, <br /> Brand: Gucci
                                  </p> */}
                                </figcaption>
                              </figure>
                            </td>

                            <td>
                              <div className="price-wrap">
                                <div className="product-price">
                                  <NumberFormat
                                    value={cart.price}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />{" "}
                                   đ
                                </div>
                              </div>{" "}
                              {/* price-wrap .// */}
                            </td>
                            <td className="">
<div className="quanty-style">
                            <a
                            href=""
                              className="btn btn"
                              onClick={(e) =>
                                this.DeleteAddCart(
                                  cart.id,
                                  e
                                )
                              }
                            >
                              -
                              </a>
                              <a  className="btn btn">{cart.quantity}</a>
                            <a
                              className="btn btn"
                              href=""
                              onClick={(e) =>
                                this.AddCart(
                                  cart.id,
                                  cart.title,
                                  cart.price,
                                  cart.image,
                                  e
                                )
                              }
                            >
                              +
                              </a>
                              
                              </div>
                            </td>
                            <td>
                              <div className="price-wrap1" style={{textAlign:"center"}}>
                              <NumberFormat
                                    value={cart.price*cart.quantity}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />{" "}
                                  đ
                              </div>{" "}
                              {/* price-wrap .// */}
                            </td>

                            <td className="text-right1" style={{textAlign:"center"}}>
                            
                            <a
                              href=""
                              className=""
                              onClick={(e) => this.RemoveAddCart(cart.id)}
                            >
                              <i class="fas fa-trash-alt"></i>
                            </a>
                          </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* <div className="card-body border-top">
                    
                        
                      <a href="http://localhost:3000" className="btn btn-light">
                        {" "}
                        <i className="fa fa-chevron-left" /> Tiếp tục mua hàng{" "}
                      </a>

                      <button className="btn btn-success" onClick={()=>this.checkout()}>Thanh toán</button>
                    </div> */}

<div className="card-body border-top">
                        <button onClick={()=>this.checkout()} className="btn btn-success float-md-right">
                          {" "}
                         Thanh toán <i className="fa fa-chevron-right" />{" "}
                        </button>
                        <button onClick={this.backhome} className="btn btn-info">
                          {" "}<a href="/" style={{textDecoration:"none",color:"white",fontWeight:"bold"}}>  <i className="fa fa-chevron-left" /> Tiếp tục mua sắm{" "}</a>
                        
                        </button>
                      </div>

                  </div>{" "}
                  {/* card.// */}
                  <div className="alert alert-success mt-3">
                    <p className="icontext">
                      <i className="icon text-success fa fa-truck" /> Giao hàng miễn phí trong vòng 1-2 tuần 
                    </p>
                  </div>
                </main>{" "}
                {/* col.// */}
                {/* <aside className="col-md-3">
            
                  <div className="card">
                    <div className="card-body">
                      <dl className="dlist-align">
                        <dt>Tổng:</dt>
                       
                          <strong> <NumberFormat
                                    value={tong}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                  />{" "}
                                  d</strong>
                      
                      </dl>
                    </div>{" "}
                  
                  </div>{" "}
               
                </aside>{" "} */}
                 <aside className="col-md-3">
                   
                   {/* card .// */}
                   <div className="card">
                     <div className="card-body">
                   
                      
                       <dl className="dlist-align">
                         <dt>Tổng:</dt>
                         <dd className="text-right  h5">
                           <strong>
                             <NumberFormat
                               value={tong}
                               displayType={"text"}
                               thousandSeparator={true}
                             />
                             đ
                           </strong>
                         </dd>
                       </dl>
                       <hr />
                       <p className="text-center mb-3">
                         <img
                           src="home/images/payments.png"
                           height={26}
                         />
                       </p>
                     </div>{" "}
                     {/* card-body.// */}
                   </div>{" "}
                   {/* card .// */}
                 </aside>{" "}
                {/* col.// */}
              </div>
            </div>{" "}
            {/* container .//  */}
          </section>
          {/* ========================= SECTION CONTENT END// ========================= */}
          {/* ========================= SECTION  ========================= */}
          <section className="section-name border-top padding-y">
            <div className="container-2">
              <h6>Chính sách thanh toán và hoàn tiền</h6>
              <p>
              Khách hàng sau khi đồng ý sử dụng dịch vụ của SpeedSMS sẽ được cung cấp một tài khoản trên hệ thống của SpeedSMS. Sau đó khách hàng đăng nhập vào hệ thống bằng tài khoản được cung cấp và tiến hành mua gói dịch vụ và tiến hành thanh toán thông qua các hình thức như sau:
1. Chuyển khoản trực tiếp: Khách hàng chuyển khoản số tiền tương ứng và tài khoản của CÔNG TY TNHH CÔNG NGHỆ MPOWER VIỆT NAM để mua gói dịch vụ
2. Thanh toán qua cổng thanh toán trung gian Nganluong.vn sử dụng thẻ thanh toán nội địa hoặc thẻ Visa/Master card
              </p>
              <p>
              Về quy trình hoàn tiền: Khi nhận được yêu cầu trả hàng và/hoặc hoàn tiền từ phía Người mua, Shopee sẽ thông báo cho Người bán trên Ứng dụng và/hoặc thư điện tử và/hoặc tin nhắn điện thoại. Người bán cần gửi phản hồi trong vòng 02 ngày lịch kể từ ngày nhận được thông báo của Shopee. Sau thời gian này mà Shopee không nhận được bất cứ phản hồi nào từ Người bán, Shopee hiểu rằng Người bán hoàn toàn đồng ý với yêu cầu của Người mua, và tự động hoàn tiền cho Người mua. Việc hoàn tiền cho người mua có thể được thực hiện mà không cần người mua phải hoàn trả hàng cho Người bán.
              </p>
            </div>
            {/* container // */}
          </section>
          {/* ========================= SECTION  END// ========================= */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Card;
