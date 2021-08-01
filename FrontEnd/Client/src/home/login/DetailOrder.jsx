import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import OrderService from "../../services/OrderService";
import authService from "../../services/auth.service";
class DetailOrder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
        order: [],
        users: {},
    } 
    this.logOut = this.logOut.bind(this);
  }
  logOut() {
    authService.logout();
    this.props.history.push("/");
  
  }
  componentDidMount(){
    OrderService.ListOrder(this.state.id).then((res) => {
      this.setState({ order: res.data});
  });
  authService.getUser(this.state.id).then((res) => {
    this.setState({users: res.data});
    
  });
 
  }
  Huy(id, fullname, id_order, phone, user_id, address, status) {
    let order = {
      fullname: fullname,
      id_order: id_order,
      phone: phone,
      user_id: user_id,
      address: address,
    };
    if (status == true) {
      OrderService.CancelOrder(order, id).then((res) => {});
    }
    if (status == false) {
      OrderService.NoCancelOrder(order, id).then((res) => {});
    }
  }
  render() {
    return (
      <div>
        <div className="container-1">
          <Header />
          <main className="orderbody mt-3">
            <div className="row" style={{height:"615px"}}>
            <aside className="col-md-2">
                    <nav className="list-group">
                      <a
                        className="list-group-item"
                        href={"http://localhost:3000/profile/"+this.state.users.id} style={{textDecoration:"none"}}
                      >
                        {" "}
                        Thông tin cá nhân
                      </a>
                    
                      <a className="list-group-item" style={{textDecoration:"none"}} href={"http://localhost:3000/detail-order/"+this.state.users.id}>
                        {" "}
                        Danh sách đơn hàng{" "}
                      </a>
                     
                      <a className="list-group-item" onClick={this.logOut}>
                        {" "}
                        Đăng xuất{" "}
                      </a>
                    </nav>
                  </aside>{" "}
            <article className="col-md-10">
              <header className="card-header">
                
                <strong className="d-inline-block mr-3">
                  <h2>Đơn hàng</h2>
                </strong>
               
              </header>
            
                {/* row.// */}
             
              {/* card-body .// */}
              <div className="table-responsive">
                <table className="table table-hover">
                <thead>
                            <tr>
                              <th> Tên & mã đơn hàng</th>
                              <th>Ngày đặt</th>
                              <th> Địa chỉ & Số điện thoại</th>
                           <th>Trạng thái</th>
                            
                         
                            </tr>
                          </thead>
                  <tbody>
                  {this.state.order.map((listorder) => ( 
                    <tr>
      
                      <td style={{color:"black",fontSize:"19px"}}>
                      Người đặt: {listorder.fullname1}<br/>
                        <var className="price text-muted" style={{fontSize:"14px "}}>Mã đơn hàng: {listorder.id_order}</var>
                       
                      </td>
                      <td style={{color:"black",fontSize:"19px"}}>
                        {" "}
                        {listorder.date} <br />
                      </td>
                      <td style={{color:"black",fontSize:"19px"}}>Địa chỉ: {listorder.address} <br/>Số điện thoại: {listorder.phone}</td>
                    
                    
                      <td width={250}>
                        {" "}
                        <a href={"http://localhost:3000/order/detail/"+listorder.id_order} className="btn btn-outline-primary">
                          Chi tiết đơn hàng
                        </a>
                       
                        {/* dropdown.// */}
                      </td>
                    </tr>
                  ))}
                   </tbody>
                </table>
              </div>{" "}
              {/* table-responsive .end// */}
            </article>{" "}
            </div>
            {/* card order-item .// */}
          
          </main>{" "}
          {/* col.// */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetailOrder;
