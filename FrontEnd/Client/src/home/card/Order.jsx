import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";
import {
  total,
  list,
  quantity,
  add,
  remove,
  onChange,
} from "cart-localstorage";
import NumberFormat from "react-number-format";

import Header from "../Header";
import Footer from "../Footer";
import OrderService from "../../services/OrderService";

const tong = total();
const userid = JSON.parse(localStorage.getItem("user"));
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Điền vào đây
      </div>
    );
  }
};

class Order extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      id: this.props.match.params.id,
      fullname: userid.username,
      phone: userid.phone,
      address: userid.address,
      fullname1: userid.fullname1,
      // date: userid.date,
      id_order: localStorage.getItem("cart_id"),
      user_id: userid.id,
      date:date,
      carts: list(),
      loading: false,
      message: ""
      
    };
    this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeIdOrderHandler = this.changeIdOrderHandler.bind(this);
    this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
    this.saveOrupDateInfo = this.saveOrupDateInfo.bind(this);
  }
  saveOrupDateInfo = (e) => {
    e.preventDefault();
    let info = {
      fullname: this.state.fullname,
      phone: this.state.phone,
      address: this.state.address,
      fullname1: this.state.fullname1,
      date:this.state.date,
      id_order: this.state.id_order,
      user_id: this.state.user_id,
     
    };
    console.log("info => " + JSON.stringify(info));
    
    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      OrderService.CreateInfos(info).then(
        (res) => {
          alert("Đặt hàng thành công");
          this.props.history.push("/");
          window.location.reload();
          let data = localStorage.getItem("__cart");
          axios
            .post("http://localhost:8080/order", JSON.parse(data))
            .then((res) => console.log("thanh cong"))
            .catch((e) => console.log("that bai"));
      
          localStorage.removeItem("__cart");
          localStorage.removeItem("cart_id");
          this.props.history.push("/");
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
    
   
  };
  

  changeFullNameHandler = (event) => {
    this.setState({ fullname: event.target.value });
  };
  changeFullName1Handler = (event) => {
    this.setState({ fullname1: event.target.value });
  };
  changeDateHandler = (event) => {
    this.setState({ date: event.target.value });
  };
  changePhoneHandler = (event) => {
    this.setState({ phone: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeIdOrderHandler = (event) => {
    this.setState({ id_order: event.target.value });
  };
  changeUserIdHandler = (event) => {
    this.setState({ user_id: event.target.value });
  };

  DeleteAddCart(id) {
    quantity(id, -1);
  }
  RemoveAddCart(id) {
    remove(id);
    if (localStorage.getItem("__cart") == "[]") {
      localStorage.removeItem("__cart");
    }
  }
  render() {
    if (localStorage.getItem("__cart") !=null) {
      return (
        <div>
          <div className="container-1">
          <Header/>
         
          <div>
            <div>
              <div className="row">
              
                <div className="col-md-12 mb-5">
                <h3 style={{marginLeft:"490px",color:"#3d75b1",marginTop:"30px"}}>Điền thông tin khách hàng</h3>


                  <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                    <Form
            onSubmit={this.saveOrupDateInfo}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <Input
              className="form-control"
              type="text"
            
              value={this.state.fullname}
              onChange={this.changeFullNameHandler}
                validations={[required]}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Họ và tên*</label>
              <Input
                 className="form-control"
                 type="text"
               
                 value={this.state.fullname1}
                 onChange={this.changeFullName1Handler}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Số điện thoại*</label>
              <Input
                 className="form-control"
                 type="text"
                
                 value={this.state.phone}
                 onChange={this.changePhoneHandler}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Địa chi*</label>
              <Input
                 className="form-control"
                 type="text"
               
                 value={this.state.address}
                 onChange={this.changeAddressHandler}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mã đơn hàng</label>
              <Input
                 className="form-control"
                 placeholder="Mã đơn hàng"
              
                 value={this.state.id_order}
                 onChange={this.changeIdOrderHandler}
                validations={[required]}
              />
            </div>
            <div className="row">

              <div className="col-md-3">
              <div className="form-group">
           
           <Input
              className="form-control"
              placeholder="Mã khách hàng"
              type="hidden"
           
              value={this.state.user_id}
              onChange={this.changeUserIdHandler}
             validations={[required]}
           />
         </div>
              </div>
              <div className="col-md-6">
              <div className="form-group">
              
              <Input
                  className="form-control"
                  type="date"
                  type="hidden"
                 
                  value={this.state.date}
                  onChange={this.changeDateHandler}
                validations={[required]}
              />
            </div>
              </div>
            </div>
         
         
            <div className="form-group">
              <button
                className="btn btn-primary btn-block" style={{width:"200px",marginLeft:"440px"}}
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Thanh toán</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
                     
                        
                       
                        
                       
                      

                        <div className="form-group">
                          <h4 htmlFor="username"> Đơn hàng bao gồm:</h4>
                          {this.state.carts.map((cat) => (

                        
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody><tr>
                        <td width={100}>
                          <img src={"http://localhost:8080/images/" + cat.image} className="img-xs border" />
                          
                        </td>
                        <td width={300}> 
                          <a href={"/detail-product/"+cat.id} style={{textDecoration:"none",color:"black",fontSize:"19px"}}> <p className="title mb-0">{cat.name}</p></a>
                         
                          <var className="price text-muted"><NumberFormat value={cat.price} displayType={'text'} thousandSeparator={true} /> đ</var>
                        </td>
                        <td>Màu: {cat.color}</td>
                        <td>Số lượng: {cat.quantity}</td>
                      
                      </tr>
                    
                    </tbody></table>
                </div>
                              
          
           
                          
                          ))}
                          <h5 className="total" style={{color:"red"}}> Tổng tiền: <NumberFormat
                        value={tong}
                        displayType={"text"}
                        thousandSeparator={true}
                      /> vnd</h5>
                        </div>
                        
                        
                     
                    </div>


                  </div>


                </div>
              </div>
            </div>
          </div>
          </div>
         <Footer/>
        </div>
      );
    }
    else
    {
      return (
        <div>
          <div className="container-1">
          <Header />
          <section className="section-content padding-y">
            <div className="container-1">
              <h5>Không có sản phẩm nào</h5>
            
            </div>{" "}
            {/* container .//  */}
          </section>
          </div>
          <Footer />
        </div>
      );
    }
    
    
  }
}

export default Order;
