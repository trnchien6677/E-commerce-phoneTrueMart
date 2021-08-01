import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
class Cnhangdau extends Component {
    render() {
        return (
            <div>
                <div className="container-1">
                    <Header/>
                    <div>
  <header className="container-1 m-5">
    <h2 className="section-title" style={{textAlign:"center",color:"red"}}>TRUNG TÂM HỖ TRỢ TRA CỨU THÔNG TIN, CHÍNH SÁCH BẢO HÀNH SẢN PHẨM CHÍNH HÃNG</h2>
  </header>{/* sect-heading */}
  <article>
    <p> <h3>TrueMart</h3> Xin lỗi vì sự cố khiến điện thoại của quý khách bị hỏng và phải đi bảo hành. TrueMart có 2 hỗ trợ dành riêng cho khách hàng mua điện thoại tại đây trong thời gian đi bảo hành như sau:</p>
    <p>TrueMart cung cấp cho khách hàng một điện thoại (0332402668) đã qua sử dụng để khách hàng sử dụng tạm thời trong thời gian bảo hành. Chi tiết máy cung cấp quý khách có thể hỏi nhân viên siêu thị hoặc xem trên giấy tiếp nhận bảo hành/sửa chữa dịch vụ.</p>
    <h3 style={{color:"green"}}>Bảo hành có cam kết trong 12 tháng(Hư là đổi)</h3>
<p>
Nếu máy gửi đi bảo hành quá 15 ngày hãng chưa trả máy cho khách hàng, hoặc phải bảo hành lại sản phẩm lần nữa trong 30 ngày kể từ lần bảo hành trước), khách hàng được áp dụng phương thức Hư gì đổi nấy ngay và luôn hoặc Hoàn tiền với mức phí giảm 50%

Lưu ý: Chỉ áp dụng cho điện thoại và phải còn trong điều kiện bảo hành.</p>
   <br />
  </article>
  <div className="card1">
                      <article className="gallery-wrap1"style={{width:"100%"}}>
                        <div className="img-big-wrap" >
                          <div>
                            <img
                              style={{ height:"600px",width:"100%"}}
                              src=
                                "../../home/images/baohanh/chinh-sach-bao-hanh-Pando.vn_.png"
                              
                              alt="test"
                            />
                          </div>
                        </div>

                        {/* slider-nav.// */}
                      </article>
                      {/* gallery-wrap .end// */}
                    </div>
</div>


                </div>
                <Footer/>
            </div>
        );
    }
}

export default Cnhangdau;

