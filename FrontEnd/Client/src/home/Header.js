import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import AuthService from "../services/auth.service";
import CategoryService from "../services/CategoryService";
import { total, list, quantity, add,remove, onChange } from "cart-localstorage";
import NumberFormat from 'react-number-format';
import HeaderSearch from "./HeaderSearch";
const tongsp=list().length;
class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();


    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
  
        <header className="section-header">
          <section className="header-main border-bottom">
            <div className="container-2">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3 col-md-12">
                  <a
                    href="/"
                    className="brand-wrap"
                  >
                    <img className="logo" src="../../home/images/image/logo.png" />
                  </a>{" "}
                  {/* brand-wrap.// */}
                </div>

                <div className="col-xl-6 col-lg-5 col-md-6">
                 <HeaderSearch/>
                  {/* search-wrap .end// */}
                </div>{" "}
                
                {/* col.// */}
                <div className="col-xl-4 col-lg-4 col-md-6">
                 
                  {currentUser ? (
                    <div className="widgets-wrap float-md-right">

<div className="widget-header mr-3">
                      <a href={"http://localhost:3000/detail-order/"+currentUser.id} className="widget-view" style={{textDecoration:"none"}}>
                        <div className="icon-area">
                        <i class="fab fa-amazon"/>
                        
                        </div>
                        <small className="text">????n h??ng</small>
                      </a>
                    </div>

                    <div className="widget-header mr-3">
                      <a href={"http://localhost:3000/profile/"+currentUser.id} className="widget-view" style={{textDecoration:"none"}}>
                        <div className="icon-area">
                          <i className="fa fa-user" />
                        
                        </div>
                        <small className="text">  {currentUser.username} </small>
                      </a>
                    </div>
                  
                    <div className="widget-header mr-3">
                      <a href="http://localhost:3000/login" className="widget-view" style={{textDecoration:"none"}}>
                        <div className="icon-area">
                          <i className="fas fa-sign-out-alt" />
                        
                        </div>
                        <small className="text">  <a href="/" className="nav-link" onClick={this.logOut}>
                  ????ng xu???t
                </a> </small>
                      </a>
                    </div>
                
                   
                   
                    <div className="widget-header">
                      <a href="http://localhost:3000/card" className="widget-view" style={{textDecoration:"none"}}>
                        <div className="icon-area">
                          <i className="fa fa-shopping-cart" />
                        </div>
                        <small className="text">Card: <NumberFormat
                            value={tongsp}
                            displayType={"text"}
                            thousandSeparator={true}
                          /></small>
                      </a>
                    </div>
                  </div>
           
                 
               
            
          ) : (
            <div className="widgets-wrap float-md-right">
            <div className="widget-header mr-3">
              <a href="http://localhost:3000/login" className="widget-view" style={{textDecoration:"none"}}>
                <div className="icon-area">
                  <i className="fa fa-user" />
                
                </div>
                <small className="text"> ????ng nh???p </small>
              </a>
            </div>
            <div className="widget-header mr-3">
              <a href="http://localhost:3000/register" className="widget-view" style={{textDecoration:"none"}}>
                <div className="icon-area">
                <i class="fas fa-user-plus"/>
                
                </div>
                <small className="text"> ????ng k?? </small>
              </a>
            </div>
            
            <div className="widget-header">
                      <a href="http://localhost:3000/card" className="widget-view" style={{textDecoration:"none"}}>
                        <div className="icon-area">
                          <i className="fa fa-shopping-cart" />
                        </div>
                        <small className="text">Card: <NumberFormat
                            value={tongsp}
                            displayType={"text"}
                            thousandSeparator={true}
                          /></small>
                       
                    
                        
                      </a>
                    </div>
          </div>
          )}
                  {/* widgets-wrap.// */}
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </div>{" "}
            {/* container.// */}
          </section>{" "}
          {/* header-main .// */}
          <nav className="navbar navbar-expand-lg">
            <div className="container-2">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main_nav"
                aria-controls="main_nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                <li className="nav-item" style={{width:"130px",textAlign:"center"}}>
                    <a className="nav-link" href="http://localhost:3000/" style={{fontSize:"17px"}}>
                    <i class="fas fa-home" />  Trang ch???
                    </a>
                  </li>
                  <li className="nav-item" style={{width:"130px",textAlign:"center"}}>
                    <a className="nav-link" href="http://localhost:3000/news" style={{fontSize:"17px"}}>
                    <i class="far fa-newspaper"/>   Tin t???c 
                    </a>
                  </li>
                 

                

                  <li className="nav-item" style={{width:"130px",textAlign:"center"}}>
                    <a className="nav-link" href="http://localhost:3000/dia-chi" style={{fontSize:"17px"}}>
                    <i class="fas fa-map-marker-alt"/> ?????a ch???
                    </a>
                  </li>
                  <li className="nav-item" style={{width:"130px",textAlign:"center"}}>
                    <a className="nav-link" href="http://localhost:3000/lien-he" style={{fontSize:"17px"}}>
                    <i class="fas fa-phone-square-alt"/>  Li??n h???
                    </a>
                  </li>
                  <li className="nav-item" style={{width:"200px",textAlign:"center"}}>
                    <a className="nav-link" href="http://localhost:3000/chinh-sach-bao-hanh" style={{fontSize:"17px"}}>
                    <i class="fas fa-dolly"/> Ch??nh s??ch b???o h??nh
                    </a>
                  </li>
                  <li className="nav-item" style={{width:"200px",textAlign:"center"}}>
                    <a className="nav-link" href="http://localhost:3000/chinh-sach-doi-tra" style={{fontSize:"17px"}}>
                    <i class="fas fa-shipping-fast"/> Ch??nh s??ch ?????i tr???
                    </a>
                  </li>
                  <li className="nav-item" style={{width:"200px",textAlign:"center"}}>
                    <a className="nav-link" href="http://localhost:3000/bao-cao-gop-y" style={{fontSize:"17px"}}>
                    <i class="fas fa-exclamation-circle"></i> B??o c??o v?? g??p ??
                    </a>
                  </li>
                </ul>
              
              </div>{" "}
              {/* collapse .// */}
            </div>{" "}
            {/* container .// */}
          </nav>
        </header>{" "}
        {/* section-header.// */}
      
      </div>
        );
  }
}

export default Header;
