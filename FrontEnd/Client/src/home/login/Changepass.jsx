import React, { Component } from "react";
import authService from "../../services/auth.service";
import Footer from "../Footer";
import Header from "../Header";
class Changepass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      users: {},
     

      // products: []
    };
    this.logOut = this.logOut.bind(this);
    this.editPass = this.editPass.bind(this);
   
  }
  logOut() {
    authService.logout();
    this.props.history.push("/");
  
  }
  componentDidMount() {
    authService.getUser(this.state.id).then((res) => {
      this.setState({users: res.data});
      
    });
  }
  editPass() {
    this.props.history.push(`/edit-pass/`+this.state.users.id);
  }
 
  render() {
    return (
      <div>
        <div className="container-1">
          <Header />

          <div>
          
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-content mb-5">
              <div className="bodybrow mt-3">
                <div className="row" style={{height:"615px"}}>
                  <aside className="col-md-3">
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
                  {/* col.// */}
                  <main className="col-md-9">
                    <div className="card">
                      <div className="card-body">
                      <figure className="icontext">
      <div className="icon">
        <img className="rounded-circle img-sm border" src="../home/images/body/avata/avatar.png" />
      </div>
      <div className="text">
        <strong> {this.state.users.username} </strong> <br /> 
        <p className="mb-2"> {this.state.users.email}</p> 
        <a className="btn btn-light btn-sm" onClick={this.editPass}>Thay đổi mật khẩu</a>
      </div>
    </figure>
                      </div>
                      {/* card-body.// */}
                    </div>{" "}
                    {/* card .// */}
                  </main>{" "}
                  {/* col.// */}
                </div>
              </div>{" "}
              {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Changepass;
