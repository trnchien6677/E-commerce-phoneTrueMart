import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container-1">
          <Header />
          <div className="container-123">
            <header className="section-heading heading-line mt-4">
              <h2 className="title-section text-uppercase">
                THÔNG TIN LIÊN HỆ KHÁC
              </h2>
            </header>
            <div className="row">
              <div className="col-md-6">
                <article>
                  <h2 style={{ color: "red" }}>TrueMart</h2>{" "}
                  <h3>
                    {" "}
                    Tìm siêu thị Thế Giới Di Động? Xin mời ghé thăm trang Tìm
                    siêu thị để xem bản đồ và địa chỉ các siêu thị trên toàn
                    quốc.
                  </h3>
                  <h4>
                    Báo chí, hợp tác: liên hệ{" "}
                    <a href="http://localhost:3000/">baochi@truemart.com</a>
                  </h4>
                  <h4>
                    Tổng đài tư vấn, hỗ trợ khách hàng (7h30 đến 22h):{" "}
                    <a style={{ color: "red" }}>1800.1000</a> hoặc{" "}
                    <a style={{ color: "red" }}>0332.402.668</a>
                  </h4>
                  <h4>
                    Tổng đài khiếu nại:{" "}
                    <a style={{ color: "red" }}>1800.1000</a>
                  </h4>
                  <h5>
                    Email:{" "}
                    <a href="http://localhost:3000/">trnchien6677@gmail.com</a>
                  </h5>
                  <article className="gallery-wrap1" style={{ width: "100%" }}>
                    <div className="img-big-wrap">
                      <div>
                        <img
                          style={{ height: "200px", width: "100%" }}
                          src="../../home/images/lienhe/lien-he.jpg"
                          alt="test"
                        />
                      </div>
                    </div>

                    {/* slider-nav.// */}
                  </article>
                  <br />
                </article>
             
              </div>
              <div className="col-md-6">
              <div className="card1">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.751695036165!2d106.77279011483682!3d10.830304561158334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEPDtG5nIFRoxrDGoW5nIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1625570895464!5m2!1svi!2s"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="col-5">
    

      </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
