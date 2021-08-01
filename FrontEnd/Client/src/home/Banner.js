import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div>
        <section className="section-main padding-2">
          <main className="card">
            <div className="card-body">
              <div className="row">
                <aside className="col-lg col-md-4 flex-lg-grow-0">
                  <nav className="nav-home-aside">
                    <h6 className="title-category" style={{fontSize:"20px", color:"red"}}>
                      CÔNG NGHỆ 24H{" "}<i class="fas fa-laptop"></i>
                     
                    </h6>
                    <ul className="menu-category">
                      <li>
                        <a href="http://localhost:3000/xu-huong-cong-nghe"style={{textDecoration:"none"}}><i class="fas fa-layer-group"></i> Xu hướng công nghệ</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/tin-do-ky-thuat-so" style={{textDecoration:"none"}}><i class="fas fa-laptop-code"></i> Tín đồ kỹ thuật số</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/news"style={{textDecoration:"none"}}><i class="fas fa-pen-alt"></i> Cập nhật tin tức công nghệ</a>
                      </li>
                      {/* <li>
                        <a href="http://localhost:3000/news"style={{textDecoration:"none"}}><i class="fab fa-itch-io"></i> Công nghệ hàng đầu</a>
                      </li> */}
                      <li className="has-submenu">
                        <a href="#" style={{textDecoration:"none"}}><i class="fas fa-mobile-alt"></i> Điện thoại theo loại</a>
                        <ul className="submenu">
                          <li>
                            <a href="http://localhost:3000/iphone" style={{textDecoration:"none"}}><i class="fas fa-caret-right"></i> iPhone</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/samsung" style={{textDecoration:"none"}}><i class="fas fa-caret-right"></i> Samsung</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/oppo" style={{textDecoration:"none"}}><i class="fas fa-caret-right"></i> Oppo</a>
                          </li>
                         
                          <li>
                            <a href="http://localhost:3000/xiaomi" style={{textDecoration:"none"}}><i class="fas fa-caret-right"></i> Xiaomi</a>
                          </li>
                          <li>
                            <a href="http://localhost:3000/vivo" style={{textDecoration:"none"}}><i class="fas fa-caret-right"></i> Vivo</a>
                          </li>
                           <li>
                            <a href="http://localhost:3000/nokia" style={{textDecoration:"none"}}><i class="fas fa-caret-right"></i> Nokia</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="http://localhost:3000/lien-he"style={{textDecoration:"none"}}><i class="fas fa-phone-square-alt" style={{textDecoration:"none"}}></i> Liên hệ</a>
                      </li>
                      <li>
                        <a href="http://localhost:3000/chinh-sach-doi-tra"style={{textDecoration:"none"}}><i class="fas fa-info-circle" style={{textDecoration:"none"}}></i> Đổi trả sản phẩm</a>
                      </li>
                      <li className="has-submenu">
                        <a href="#"style={{textDecoration:"none"}}><i class="fas fa-bug" style={{textDecoration:"none"}}></i> Báo cáo</a>
                        <ul className="submenu">
                          <li>
                            <a href="http://localhost:3000/bao-cao-gop-y" style={{textDecoration:"none"}}><i class="fas fa-exclamation-triangle"></i> Báo cáo và góp ý</a>
                          </li>
                         
                          <li>
                            <a href="http://localhost:3000/chinh-sach-bao-hanh" style={{textDecoration:"none"}}><i class="fas fa-shipping-fast"></i> Bảo hành</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </aside>{" "}
                {/* col.// */}
                <div className="col-md-10 col-xl-9">
                  {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}
                  <div
                    id="carousel1_indicator"
                    className="slider-home-banner carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carousel1_indicator"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carousel1_indicator"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carousel1_indicator"
                        data-slide-to={2}
                      />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="home/images/banner/banner3.jpg"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="home/images/banner/banner4.jpg"
                          alt="Second slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                         src="home/images/banner/banner1.png"
                          alt="Third slide"
                        />
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carousel1_indicator"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carousel1_indicator"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  {/* ==================  COMPONENT SLIDER BOOTSTRAP end.// ==================  .// */}
                </div>{" "}
                {/* col.// */}
             
              </div>{" "}
              {/* row.// */}
            </div>{" "}
            {/* card-body.// */}
          </main>{" "}
          {/* card.// */}
        </section>
      </div>
    );
  }
}

export default Banner;
