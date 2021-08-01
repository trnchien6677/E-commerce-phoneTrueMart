import React, { Component } from "react";
import ProductService from "../../services/ProductService";
import Footer from "../Footer";
import Header from "../Header";
import Carousel from "react-elastic-carousel";
import NumberFormat from "react-number-format";
import { add, onChange } from "cart-localstorage";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Phukien from "../Phukien";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class DetailLinhkien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      product: {},
      productimage: [],
      productRe: [],
      image: [],
     
      // quan:'1'
      // products: []
    };
    this.changeimage = this.changeimage.bind(this);

    // this.changeValue = this.changeValue.bind(this);
  }
  componentDidMount() {
    ProductService.getProductById(this.state.id).then((res) => {
      let product = res.data;
      this.setState({
        productimage: product.productimage,
        image: product.image,
        product: res.data,
      });
    });
    ProductService.getReProduct(this.state.id).then((res) => {
      this.setState({ productRe: res.data });
    });
  }
  changeimage(change) {
    this.setState({ image: change });
  }
  AddCart(id, name, price, image,color) {
    // const count = Number(this.state.quan);
    if (localStorage.getItem("cart_id") == null) {
      var crypto = require("crypto");
      var id_order = crypto.randomBytes(3).toString("hex");
      localStorage.setItem("cart_id", id_order);
    } else {
      id_order = localStorage.getItem("cart_id");
    }

    add({ id: id, name: name, price: price, image: image, id_order,color:this.state.color});
    onChange();
    alert("Thêm vào giỏ hàng thành công");
    window.location.reload(false)
  }
  changeValueColor(e) {
    const value = e.target.value;
    this.setState({ color: value });
  }
  // changeValue(e) {
  //   const value = e.target.value;
  //   this.setState({ quan: value });
  // }
  render() {
    const { items } = this.state;
    const pricesale=this.state.product.price-(this.state.product.price*this.state.product.discount/100)
    return (
      <div>
        <div className="container-1">
          <Header />

          <div>
            {/* ========================= SECTION CONTENT ========================= */}
            <section className="section-main padding-y">
              <div className="container-2">
                {/* ============================ ITEM DETAIL ======================== */}
                <div className="row">
                  <aside className="col-md-6 mt-3">
                    <div className="card">
                      <article className="gallery-wrap">
                        <div className="img-big-wrap">
                          <div>
                            <TransformWrapper>
                              <TransformComponent>
                                <img
                                  style={{ marginLeft: "80px" }}
                                  src={
                                    "http://localhost:8080/images/" +
                                    this.state.image
                                  }
                                  alt="test"
                                />
                              </TransformComponent>
                            </TransformWrapper>
                          </div>
                        </div>
                        {/* slider-product.// */}
                        {/* slider-product.// */}
                        <div className="thumbs-wrap">
                          
                          {this.state.productimage.map((listimg) => (
                            <img
                              className="item-thumb"
                              onClick={() => this.changeimage(listimg.image)}
                              src={
                                "http://localhost:8080/images/" + listimg.image
                              }
                              alt="logo"
                            />
                          ))}
                          
                        </div>{" "}
                        {/* slider-nav.// */}
                      </article>
                      {/* gallery-wrap .end// */}
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-6">
                        <div className="tag" style={{ borderRadius: "5px" }}>
                          <h6>
                            <i class="fas fa-undo"></i> Hư gì đổi nấy 12 tháng
                            tại 2625 siêu thị toàn quốc. (miễn phí tháng đầu)
                          </h6>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="tag" style={{ borderRadius: "5px" }}>
                          <h6>
                            <i class="fas fa-shield-alt"></i> Bảo hành chính
                            hãng điện thoại 1 năm
                          </h6>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="tag" style={{ borderRadius: "5px" }}>
                          <h6>
                            <i class="fas fa-box-open"></i> Bộ sản phẩm gồm:
                            Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div className="card mt-3">
                      <article className="gallery-wrap">
                        <div className="img-big-wrap">
                          <div>
                            <img
                              style={{ marginLeft: "30px" }}
                              src={
                                "http://localhost:8080/images/" + this.state.product.content
                              }
                              alt="test"
                            />
                          </div>
                          {this.state.content}
                        </div>

                        {/* slider-nav.// */}
                      </article>
                      {/* gallery-wrap .end// */}
                    </div>
                    {/* card.// */}
                  </aside>

                  <main className="col-md-6">
                    <article className="product-info-aside">
                      <h2 className="title mt-3">{this.state.product.name}</h2>
                    
                      {/* <div className="rating-wrap my-3">
                        <ul className="rating-stars">
                          <li style={{ width: "80%" }} className="stars-active">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </li>
                        </ul>
                        <small className="label-rating text-muted">
                          132 reviews
                        </small>
                        <small className="label-rating text-success">
                          <i className="fa fa-clipboard-check" /> 154 orders
                        </small>
                      </div> */}
                      {/* rating-wrap.// */}
                      {/* <div className="mb-3" style={{ color: "red" }}>
                        <var className="price h4">
                          Giá:{" "}
                          <NumberFormat
                            value={this.state.product.price}
                            displayType={"text"}
                            thousandSeparator={true}
                          />{" "}
                          đ
                        </var>
                      </div> */}

                      {/* price-detail-wrap .// */}
                      <dl className="row">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <th
                                colSpan={2}
                                style={{
                                  backgroundColor: "rgba(215 98 54/1)",
                                  borderRadius: "5px",
                                  textAlign: "center",
                                }}
                              >
                                <h5 style={{ color: "white" }}>
                                  Mua ngay giảm sốc{" "}
                                </h5>
                              </th>
                            </tr>
                            <tr>
                              <th
                                colSpan={2}
                                style={{
                                  textAlign: "center",
                                  color: "red",
                                  fontSize: "20px",
                                  backgroundColor: "#f1f1f1",
                                }}
                              >
                               <NumberFormat
                                  value={this.state.product.price-(this.state.product.price*this.state.product.discount/100)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />{" "}
                                đ <br/>

                                <del style={{color:"black", fontSize:"18px"}}><NumberFormat
                                  value={this.state.product.price}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />{" "}
                                đ</del>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </dl>

                      <dl className="row">
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <th
                                colSpan={2}
                                style={{
                                  backgroundColor: "#f1f1f1",
                                  borderRadius: "5px",
                                }}
                              >
                                <h5>Khuyến mãi trị giá 100.000đ</h5>
                              </th>
                            </tr>
                            <tr>
                              <th colSpan={2} style={{ color: "green" }}>
                                <i class="fas fa-angle-right"></i> Tặng Phiếu
                                mua hàng 50,000đ áp dụng mua thẻ cào, thẻ game
                                <br></br>
                                <br></br>
                                <i class="fas fa-angle-right"></i> Giảm giá
                                60,000đ khi tham gia thu cũ đổi mới <br></br>
                                <br></br>
                                <i class="fas fa-angle-right"></i> Giảm 50% giá
                                mua gói bảo hiểm rơi vỡ 6 tháng <br></br>
                                <br></br>
                                <i class="fas fa-angle-right"></i> Giảm 50% giá
                                gói cước 1 năm (Vina350/Vina500) cho Sim
                                VinaPhone trả sau <br></br>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </dl>
                      <dl className="row">
                        {/* <dt className="col-sm-3">Sản phẩm</dt>
                        <dd className="col-sm-9">
                         
                        </dd>
                        <dt className="col-sm-3">Số lượng</dt>
                        <dd className="col-sm-9">{this.state.product.total}</dd>
                        <dt className="col-sm-3">Bảo hành</dt>
                        <dd className="col-sm-9">2 năm</dd>
                        <dt className="col-sm-3">Đổi trả</dt>
                        <dd className="col-sm-9">3-4 ngày</dd>
                        <dt className="col-sm-3">Trả góp 0% thẻ tín dụng </dt>
                        <dd className="col-sm-9">CCCD/Sổ hộ khẩu</dd> */}
                        <table className="table table-bordered">
                          <tbody>
                            <tr>
                              <th colSpan={2}>Sản phẩm</th>
                            </tr>

                            <tr>
                              <td>Bảo hành</td>
                              <td>2 năm</td>
                            </tr>
                            <tr>
                              <td>Đổi trả</td>
                              <td>3-4 ngày</td>
                            </tr>
                            <tr>
                              <td>Trả góp 0% thẻ tín dụng</td>
                              <td>CCCD/Sổ hộ khẩu</td>
                            </tr>
                            <tr>
                              <th colSpan={2}>
                                (*) Giá hoặc khuyến mãi không áp dụng trả góp
                                lãi suất đặc biệt (0%, 0.5%, 1%)
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </dl>
                   
                     
                      <div className="form-row">
                        {/* col.// */}
                        <div
                          className="form-group col-md"
                          style={{
                            backgroundColor: "#2f80ed",
                            borderRadius: "5px",
                            textAlign: "center",
                          }}
                        >
                          <a
                            href="#"
                            className="hihi"
                            style={{
                              textAlign: "center",
                              textDecoration: "none",
                              color: "white",
                            }}
                          >
                            <span
                              className="text"
                              onClick={(e) =>
                                this.AddCart(
                                  this.state.product.id,
                                  this.state.product.name,
                                  pricesale,
                                  this.state.product.image,
                                  this.state.color
                                )
                              }
                            >
                              <h3 style={{ textAlign: "center" }}>MUA NGAY</h3>
                            </span>
                          </a>
                        
                          {/* <select onChange={this.changeValue}>
                            <option value=" 1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                           
                          </select> */}
                        </div>
                        {/* col.// */}
                      </div>
                      <h5 className="title-description">
                        Thông số của: {this.state.product.name}
                      </h5>
                      { ReactHtmlParser(this.state.product.description) }
                      {/* row.// */}
                    </article>
                    {/* product-info-aside .// */}
                  </main>
                  {/* col.// */}
                </div>
                {/* row.// */}
                {/* ================ ITEM DETAIL END .// ================= */}
              </div>
              {/* container .//  */}
            </section>
            {/* ========================= SECTION CONTENT END// ========================= */}
            {/* ========================= SECTION  ========================= */}
           
            {/* ========================= SECTION CONTENT END// ========================= */}
          </div>

         
          <Phukien />
          <div id="comment" className="border">
          <h5 className="title" style={{ fontWeight: "bold", marginLeft: "34px" }}>BÌNH LUẬN</h5>
          <div class="fb-comments" style={{ marginLeft: "30px" }} data-href="http://localhost:3000" data-width="1300" data-numposts="1"></div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetailLinhkien;
