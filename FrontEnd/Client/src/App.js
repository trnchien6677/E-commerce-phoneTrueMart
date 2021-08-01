import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Category from "./admin/Category/Category";
import CreateCategory from "./admin/Category/CreateCategory";
import Product from "./admin/Product/Product";
import UpdateCategory from "./admin/Category/UpdateCategory";
import "./App.css";
import CreateProduct from "./admin/Product/CreateProduct";
import Home from "./home/Home";

import Login from "./home/login/Login";
import Register from "./home/login/Register";
import DetailProduct from "./home/detail/DetailProduct";
import Card from "./home/card/Card";
import Order from "./home/card/Order";
import News from "./admin/News/News";
import CreateNews from "./admin/News/CreateNews";
import Tintuc from "./home/news/Tintuc";
import SearchAll from "./home/SearchAll";
import UpdateNews from "./admin/News/UpdateNews";
import DetailOrder from "./home/login/DetailOrder";
import Changepass from "./home/login/Changepass";
import User from "./admin/User/User";
import ChangePa from "./home/login/ChangePa";
import DetailOrderPa from "./home/login/DetailOrderPa";
import doitra from "./home/chinhsach/doitra";
import baohanh from "./home/chinhsach/baohanh";
import diachi from "./home/diachi/diachi";
import DetailNews from "./home/news/DetailNews";
import DetailLinhkien from "./home/detail/DetailLinhkien";
import Contact from "./home/lienhe/Contact";
import OrderAdmin from "./admin/Order/OrderAdmin";
import OrderDetailAdmin from "./admin/Order/OrderDetailAdmin";
import DetailProductAdmin from "./admin/Product/DetailProductAdmin";
import UpdateProductAdmin from "./admin/Product/UpdateProductAdmin";
import Report from "./home/report/Report";
import ReportAdmin from "./admin/Report/ReportAdmin";
import AllApple from "./home/detail/AllApple";
import AllOppo from "./home/detail/AllOppo";
import AllXiaomi from "./home/detail/AllXiaomi";
import AllSamSung from "./home/detail/AllSamSung";
import AllPhuKien from "./home/detail/AllPhukien";
import Xuhuongcn from "./home/banner/Xuhuongcn";
import Tindokythuat from "./home/banner/Tindokythuat";
import Capnhattintuc from "./home/banner/Capnhattintuc";
import Cnhangdau from "./home/banner/Cnhangdau";
import CreateUserAdmin from "./admin/User/CreateUserAdmin";
import AllVivo from "./home/detail/AllVivo";
import AllNokia from "./home/detail/AllNokia";
import UpdateUserAdmin from "./admin/User/UpdateUserAdmin";
import HeaderProfile from "./home/login/HeaderProfile";
import Policy from "./admin/Policy/Policy";
import CrearePolicy from "./admin/Policy/CrearePolicy";
import UpdatePolicy from "./admin/Policy/UpdatePolicy";
import LoginAdmin from "./home/login/LoginAdmin";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Home */}
          <Route path="/" exact component={Home}></Route>
          {/* Detail Product */}
          <Route path="/detail-product/:id" component={DetailProduct}></Route>
          <Route
            path="/detail-phukien-:id"
            component={DetailLinhkien}
          ></Route>
          {/* Login */}
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>

          <Route path="/profile/:id" component={Changepass}></Route>
          <Route path="/edit-pass/:id" component={ChangePa}></Route>
          {/* Card */}
          <Route path="/card" exact component={Card}></Route>
           {/* Detail Page Product */}
           <Route path="/iphone" exact component={AllApple}></Route>
           <Route path="/oppo" exact component={AllOppo}></Route>
           <Route path="/xiaomi" exact component={AllXiaomi}></Route>
           <Route path="/samsung" exact component={AllSamSung}></Route>
           <Route path="/phukien" exact component={AllPhuKien}></Route>
           <Route path="/vivo" exact component={AllVivo}></Route>
           <Route path="/nokia" exact component={AllNokia}></Route>
          {/* Contact */}
          <Route path="/lien-he" exact component={Contact}></Route>
          <Route path="/bao-cao-gop-y" exact component={Report}></Route>
          <Route path="/xu-huong-cong-nghe" exact component={Xuhuongcn}></Route>
          <Route path="/tin-do-ky-thuat-so" exact component={Tindokythuat}></Route>
          <Route path="/cap-nhat-tin-tuc-cong-nghe" exact component={Capnhattintuc}></Route>
          <Route path="/cong-nghe-hang-dau" exact component={Cnhangdau}></Route>
          {/* News */}
          <Route path="/news" exact component={Tintuc}></Route>
          <Route path="/tin-tuc-so-:id" exact component={DetailNews}></Route>

          {/* Search */}
          <Route path="/search/:keyword" component={SearchAll}></Route>
          {/* Order */}
          <Route path="/order" exact component={Order}></Route>
          <Route path="/detail-order/:id" exact component={DetailOrder}></Route>
          <Route
            path="/order/detail/:id"
            exact
            component={DetailOrderPa}
          ></Route>
          {/* Chinh sach*/}
          <Route path="/chinh-sach-doi-tra" exact component={doitra}></Route>
          <Route path="/chinh-sach-bao-hanh" exact component={baohanh}></Route>
          {/* Dia chi*/}
          <Route path="/dia-chi" exact component={diachi}></Route>

          {/* Admin Category */}
          <Route path="/admin_category" component={Category}></Route>
          <Route path="/admin-login" component={LoginAdmin}></Route>
          <Route path="/admin-category/:add" component={CreateCategory}></Route>
          <Route
            path="/admin-category-update/:id"
            component={UpdateCategory}
          ></Route>
          {/* Admin Product */}
          <Route path="/admin_product" component={Product}></Route>
          <Route path="/admin-product/:add" component={CreateProduct}></Route>

          <Route
            path="/admin-product-detail/:id"
            component={DetailProductAdmin}
          ></Route>
          <Route
            path="/admin-product-update-:id"
            component={UpdateProductAdmin}
          ></Route>

          {/* Admin News */}
          <Route path="/admin-news" component={News}></Route>

          <Route path="/admin-news-add/addnews" component={CreateNews}></Route>
          <Route path="/admin-news-update-:id" component={UpdateNews}></Route>
          {/* Admin User */}
          <Route path="/admin-user" component={User}></Route>
          <Route path="/admin-user-add/:add" component={CreateUserAdmin}></Route>
          <Route path="/admin-user-update/:id" component={UpdateUserAdmin}></Route>
          
          
          {/* Admin Report */}
          <Route path="/admin-report" component={ReportAdmin}></Route>
 {/* Admin Policy */}
 <Route path="/admin-policy" component={Policy}></Route>
 <Route path="/admin-policy-add" component={CrearePolicy}></Route>
 <Route path="/admin-policy-update-:id" component={UpdatePolicy}></Route>
 
          {/* Admin Order */}
          <Route path="/admin-order" component={OrderAdmin}></Route>
          <Route
            path="/admin-detail-order/:id"
            component={OrderDetailAdmin}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
