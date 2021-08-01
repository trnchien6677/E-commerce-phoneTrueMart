import React, { Component } from 'react';
import authService from '../../services/auth.service';
import OrderService from '../../services/OrderService';

class HeaderProfile extends Component {
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
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default HeaderProfile;