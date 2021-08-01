import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Iphone from "./Iphone";

import BannerT from "./BannerT";
import BannerB from "./BannerB";
import BannerB1 from "./BannerB1";
import BannerB2 from "./BannerB2";
import Footer from "./Footer";


import Header from "./Header";
import Banner from "./Banner";

import Pt from "./Pt";

import Samsung from "./Samsung";
import Oppo from "./Oppo";
import Xiaomi from "./Xiaomi";
import Phukien from "./Phukien";
import TintucHome from "./TintucHome";
import Vivo from "./Vivo";
import authService from "../services/auth.service";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = authService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_USER"),
      });
    }
    if (user !== null) {

      if (user.roles.includes("ROLE_USER") === false) {
        authService.logout();
        this.props.history.push("/");
        window.location.reload()
        
      }
    //   if (user.roles.includes("ROLE_ADMIN") === false) {
    //  
    // }
    }else{
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <div className="container-1">
          <Header />

          <Banner />

          <BannerB2 />

          <Iphone />

          <BannerB1 />

          <Xiaomi />

          <BannerB2 />

          <Pt />

          <BannerB1 />
          <BannerB2 />
          <Samsung />

          <Oppo />

          <BannerT />
          <Vivo/>
          <BannerT />
          <Phukien />

          <TintucHome/>



        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
