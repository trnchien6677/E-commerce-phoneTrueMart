import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import NewsService from "../../services/NewsService";
import ProductService from "../../services/ProductService";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

class Tintuc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      event: [],
      topnew: [],
      content: [],
      currentPage: 1,
      size: 4,
      disabled1: "",
      disabled2: "",
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.hotBest = this.hotBest.bind(this);
  }
  changcurrentPage(currentPage) {
    let condition = Math.ceil(this.state.totalElements / this.state.size);
    if (this.state.currentPage < condition)
      if (currentPage === 1) this.setState({ disabled1: "disabled" });
      else this.setState({ disabled1: " " });
    if (currentPage === condition) this.setState({ disabled2: "disabled" });
    else this.setState({ disabled2: " " });
  }
  previousPage() {
    if (this.state.currentPage > 1) this.state.currentPage -= 1;
    this.hotBest(this.state.currentPage);
    this.changcurrentPage(this.state.currentPage);
  }
  nextPage() {
    let condition = Math.ceil(this.state.totalElements / this.state.size);
    if (this.state.currentPage < condition) this.state.currentPage += 1;
    this.hotBest(this.state.currentPage);
    this.changcurrentPage(this.state.currentPage);
  }
  hotBest(currentPage) {
    currentPage -= 1;
    NewsService.getPt(currentPage, this.state.size)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          content: data.content,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  }
  componentDidMount() {
    this.changcurrentPage(this.state.currentPage);
    this.hotBest(this.state.currentPage);

    ProductService.getProductXiaomi().then((res) => {
      this.setState({ product: res.data });
    });
    NewsService.getEvent().then((res) => {
      this.setState({ event: res.data });
    });
    NewsService.getTopNews().then((res) => {
      this.setState({ topnew: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="container-1">
          <Header />

          <section className="section-name padding-y bg">
            <div className="container-123">
              <div className="row">
                <div className="col-md-8">
                  <h3 className="title-description">
                    Tin tức công nghệ nổi bật
                  </h3>
                  <h5>
                    Những tin tức công nghệ mới nhất được cập nhật 24/7 giúp các
                    bạn nắm bắt thông tin.
                  </h5>
                  <div className="row">
                    <div className="col-md-8">
                      {this.state.topnew.map((listnew1) => (
                        <div
                          className="card-banner overlay-gradient"
                          style={{
                            minHeight: "320px",
                            backgroundImage:
                              'url("home/images/tintuc/top1.jpg")',
                          }}
                        >
                          <div className="card-img-overlay white">
                            <h3 className="card-title">
                              <br />
                              {listnew1.title}{" "}
                            </h3>
                            <p className="demo-2" style={{ maxWidth: "600px" }}>
                        
                              {ReactHtmlParser(listnew1.des)}
                            </p>
                            <a
                              href={"./tin-tuc-so-" + listnew1.id}
                              className="btn btn-warning"
                            >
                              Xem chi tiết
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>{" "}
                    <div className="col-md-4">
                      {this.state.event.map((listpro) => (
                        <div className="col-md-12">
                          <div className="card-banner border-bottom mt-2">
                            <div className="py-3" style={{ width: "90%" }}>
                              <h6 className="card-title">
                                <a
                                  href={"./tin-tuc-so-" + listpro.id}
                                  style={{
                                    color: "black",
                                    textDecoration: "none",
                                  }}
                                >
                                  <i class="fas fa-caret-right"></i> {listpro.title}
                                </a>
                              </h6>

                              <p>
                                {" "}
                                <span class="badge badge-info"> Sự kiện</span>
                              </p>
                            </div>
                            <img
                              src={`http://localhost:8080/images/${listpro.image}`}
                              height={69}
                              className="img-bg"
                            />
                          </div>
                        </div>
                      ))}

                      {/* card-banner //end */}
                    </div>{" "}
                    <div>
                      {this.state.content.map((listnew) => (
                        <article className="card card-product-list">
                          <div className="row no-gutters">
                            <aside className="col-md-3">
                              <a href="#" className="img-wrap">
                                <img
                                  src={ `http://localhost:8080/images/${listnew.image}`}
                                />
                               
                              </a>
                            </aside>{" "}
                            {/* col.// */}
                            <div className="col-md-9">
                              <div className="info-main">
                                <a
                                  href="#"
                                  className="h5 title"
                                  style={{ textDecoration: "none" }}
                                >
                                  {" "}
                                  <a
                                    href={"./tin-tuc-so-" + listnew.id}
                                    style={{ textDecoration: "none" }}
                                  >
                                    {listnew.title}
                                  </a>
                                </a>
                                <span class="badge badge-danger"> Tin Hot</span>
                                {/* rating-wrap.// */}
                                <p className="mb-3">
                                  <span className="tag">
                                    {" "}
                                    <i className="fa fa-check" /> Đã kiểm duyệt
                                  </span>
                                </p>
                                <strong className="demo-2">
                                  <div>{ReactHtmlParser(listnew.des)}</div>
                                </strong>
                              </div>{" "}
                              {/* info-main.// */}
                            </div>{" "}
                            {/* col.// */}
                          </div>{" "}
                          {/* row.// */}
                        </article>
                      ))}
                      <div></div>
                    </div>
                    {/* col.// */}
                  </div>{" "}
                  {/* row.// */}
                  {/* card-product .// */}
                </div>{" "}
                {/* col.// */}
                <aside className="col-md-4">
                  <div className="box">
                    <div className="col-md d-none d-lg-block flex-grow-1">
                      <aside className="special-home-right">
                        <h6 className="bg-blue text-center text-white mb-0 p-2">
                          Sản phẩm đang sale
                        </h6>

                        <div className="row">
                          {this.state.product.map((listpro) => (
                            <div className="col-md-6">
                              <div className="card-banner border-bottom">
                                <div className="py-3" style={{ width: "80%" }}>
                                  <h6 className="card-title">
                                    <a
                                      href={"./detail-product/" + listpro.id}
                                      style={{ textDecoration: "none" }}
                                    >
                                      {listpro.name}
                                    </a>
                                  </h6>

                                  <p>
                                    {" "}
                                    <span class="badge badge-danger">
                                      {" "}
                                      -{listpro.discount}%{" "}
                                    </span>
                                  </p>

                                  <p>
                                    {" "}
                                    <span class="badge badge-warning">
                                      {" "}
                                      Trả góp 0%{" "}
                                    </span>
                                  </p>
                                </div>
                                <img
                                  src={
                                    `http://localhost:8080/images/${listpro.image}`
                                  }
                                  height={80}
                                  className="img-bg"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </aside>
                    </div>{" "}
                    {/* col.// */}
                    <h5 className="title-description">Sự kiện</h5>
                    {this.state.event.map((listevent) => (
                      <article className="media mb-3">
                        <a href="#">
                          <img
                            className="img-sm mr-3"
                            src={`http://localhost:8080/images/${listevent.image}`}
                          />
                        </a>
                        <div className="media-body">
                          <h6 className="mt-0">
                            <a
                              href={"./tin-tuc-so-" + listevent.id}
                              style={{ textDecoration: "none" }}
                            >
                              {listevent.title}
                            </a>
                          </h6>
                          <strong className="demo-2">
                          { ReactHtmlParser(listevent.content) }
                          </strong>
                        </div>
                        <hr className="sidebar-divider my-0" />
                      </article>
                    ))}
                  </div>{" "}
                  <div className="box">
                    <div className="col-md d-none d-lg-block flex-grow-1 mb-3">
                      <aside className="special-home-right">
                        <h6 className="bg-red text-center text-white mb-0 p-2">
                          Tuyển dụng tại TrueMart
                        </h6>
                      </aside>
                    </div>{" "}
                    <article className="media mb-3">
                      <a href="#">
                        <img
                          className="img-sm mr-3"
                          src="home/images/tintuc/ketoan.jpg"
                        />
                      </a>
                      <div className="media-body">
                        <h6 className="mt-0">
                          <a href="#" style={{ textDecoration: "none" }}>
                            Cần tuyển dụng kế toán{" "}
                            <span class="badge badge-info"> Hot </span>
                          </a>
                        </h6>
                        <p className="mb-2">Thông tin liên hệ: 0332402668</p>
                        <p className="mb-2">
                          Gửi CV về địa chỉ:
                          www.truemart.com/thong-tin-tuyen-vien
                        </p>
                      </div>
                      <hr className="sidebar-divider my-0" />
                    </article>
                    <article className="media mb-3">
                      <a href="#">
                        <img
                          className="img-sm mr-3"
                          src="home/images/tintuc/banhang.jpg"
                        />
                      </a>
                      <div className="media-body">
                        <h6 className="mt-0">
                          <a href="" style={{ textDecoration: "none" }}>
                            Cần tuyển dụng nhân viên bán hàng{" "}
                            <span class="badge badge-info"> Hot </span>
                          </a>
                        </h6>
                        <p className="mb-2">Thông tin liên hệ: 0332402668</p>
                        <p className="mb-2">
                          Gửi CV về địa chỉ:
                          www.truemart.com/thong-tin-tuyen-vien
                        </p>
                      </div>
                      <hr className="sidebar-divider my-0" />
                    </article>
                    <article className="media mb-3">
                      <a href="#">
                        <img
                          className="img-sm mr-3"
                          src="home/images/tintuc/telesale.jpg"
                        />
                      </a>
                      <div className="media-body">
                        <h6 className="mt-0">
                          <a href="#" style={{ textDecoration: "none" }}>
                            Cần tuyển dụng telesale{" "}
                            <span class="badge badge-info"> Hot </span>
                          </a>
                        </h6>
                        <p className="mb-2">Thông tin liên hệ: 0332402668</p>
                        <p className="mb-2">
                          Gửi CV về địa chỉ:
                          www.truemart.com/thong-tin-tuyen-vien
                        </p>
                      </div>
                      <hr className="sidebar-divider my-0" />
                    </article>
                  </div>{" "}
                  {/* box.// */}
                </aside>{" "}
                <div className="hihi" style={{ marginLeft: "-510px" }}>
                  <ul className="pagination" style={{ marginRight: "100px" }}>
                    <li className={"page-item " + this.state.disabled1}>
                      <button
                        className="page-link"
                        href="#"
                        onClick={this.previousPage}
                      >
                        Trước
                      </button>
                    </li>
                    <li className="page-item active">
                      <a
                        className="page-link"
                        href="#"
                        value={this.state.currentPage}
                        onChange={this.changcurrentPage}
                      >
                        {this.state.currentPage}
                      </a>
                    </li>
                    <li className={"page-item " + this.state.disabled2}>
                      {" "}
                      <button
                        className="page-link"
                        href="#"
                        onClick={this.nextPage}
                      >
                        Sau
                      </button>
                    </li>
                  </ul>
                </div>
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </div>{" "}
            {/* container .//  */}
          </section>

          {/* ========================= SECTION CONTENT END// ========================= */}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Tintuc;
