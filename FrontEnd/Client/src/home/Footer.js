import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
       
{/* ========================= SECTION SUBSCRIBE END// ========================= */}
        <footer className="section-footer bg-secondary mt-2">
    <div className="container">
   

      <section className="footer-top padding-y-lg text-white">
        <div className="row">
          <aside className="col-md col-6">
            <h6 className="title">Thương hiệu</h6>
            <ul className="list-unstyled1">
              <li> <a href="http://localhost:3000/iphone" style={{textDecoration:"none"}}>Iphone</a></li>
              <li> <a href="http://localhost:3000/samsung" style={{textDecoration:"none"}}>Samsung</a></li>
              <li> <a href="http://localhost:3000/Xiaomi" style={{textDecoration:"none"}}>Xiaomi</a></li>
              <li> <a href="http://localhost:3000/Vivo"style={{textDecoration:"none"}}>Vivo</a></li>
            </ul>
          </aside>
          <aside className="col-md col-6">
            <h6 className="title">Chi nhánh</h6>
            <ul className="list-unstyled">
              <li> <a href="http://localhost:3000/lien-he" style={{textDecoration:"none"}}>Liên hệ chúng tôi</a></li>
              <li> <a href="http://localhost:3000/chinh-sach-bao-hanh" style={{textDecoration:"none"}}>Chính sách bảo hành</a></li>
              <li> <a href="http://localhost:3000/chinh-sach-doi-tra" style={{textDecoration:"none"}}>Chính sách đổi trả</a></li>
              <li> <a href="http://localhost:3000/dia-chi" style={{textDecoration:"none"}}>Tìm store</a></li>
             
            </ul>
          </aside>
          <aside className="col-md col-6">
            <h6 className="title">Trợ giúp</h6>
            <ul className="list-unstyled">
              <li> <a href="http://localhost:3000/bao-cao-gop-y" style={{textDecoration:"none"}}>Liên lạc</a></li>
              <li> <a href="#" style={{textDecoration:"none"}}>Trả tiền</a></li>
              <li> <a href="http://localhost:3000/card" style={{textDecoration:"none"}}>Đặt hàng</a></li>
              <li> <a href="http://localhost:3000/news" style={{textDecoration:"none"}}>Tin tức</a></li>
            
            </ul>
          </aside>
          <aside className="col-md col-6">
            <h6 className="title">Tài khoản</h6>
            <ul className="list-unstyled">
              <li> <a href="http://localhost:3000/login" style={{textDecoration:"none"}}> Đăng nhập </a></li>
              <li> <a href="http://localhost:3000/register" style={{textDecoration:"none"}}> Đăng ký </a></li>
            </ul>
          </aside>
          <aside className="col-md">
            <h6 className="title">Social</h6>
            <ul className="list-unstyled">
              <li><a href="#" style={{textDecoration:"none"}}> <i className="fab fa-facebook" /> Facebook </a></li>
              <li><a href="#" style={{textDecoration:"none"}}> <i className="fab fa-twitter" /> Twitter </a></li>
              <li><a href="#" style={{textDecoration:"none"}}> <i className="fab fa-instagram" /> Instagram </a></li>
              <li><a href="#" style={{textDecoration:"none"}}> <i className="fab fa-youtube" /> Youtube </a></li>
            </ul>
          </aside>
        </div> {/* row.// */}
      </section>	{/* footer-top.// */}
      <section className="footer-bottom text-center">
        <p className="text-white">Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
        <p className="text-muted"> © 2019 Company name, All rights reserved </p>
        <br />
      </section>
    </div>{/* //container */}
  </footer>
  {/* ========================= FOOTER END // ========================= */}
      </div>
    );
  }
}

export default Footer;
