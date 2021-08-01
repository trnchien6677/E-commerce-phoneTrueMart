import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import NewsService from '../../services/NewsService';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ProductService from '../../services/ProductService';
class DetailNews extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.match.params.id,
          news: {},
          new:[],
          product: [],
    
          // products: []
        };
  
      }
      componentDidMount() {
        NewsService.getNewsById(this.state.id).then((res) => {
            this.setState({news: res.data});
        });
        NewsService.getNewsAnotherId(this.state.id).then((res) => {
            this.setState({ new: res.data });
          });
          ProductService.getProductLimitVivo().then((res) => {
            this.setState({ product: res.data });
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
                      <h3 className="title-description"></h3>
                      <h2>
                      {this.state.news.title}
                      </h2>
                      <br></br>
                    <p style={{fontSize:"17px"}}>   <div className="cofihaha">{ ReactHtmlParser(this.state.news.content) }</div></p>
                    
                 
                    <a href="http://localhost:3000/news" className="btn btn-light mt-5"> « Trở lại</a>
                      {/* card-product .// */}
                    </div>{" "}
                    
                    {/* col.// */}
                    <aside className="col-md-4">
                    
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

    
    
                      <div className="box">
                        <div className="col-md d-none d-lg-block flex-grow-1 mb-3">
                          <aside className="special-home-right">
                            <h6 className="bg-red text-center text-white mb-0 p-2">
                              Tin tức liên quan
                            </h6>
    
    
                          </aside>
                        </div>{" "}
    
                        {this.state.new.map((listnew => ( 
                        <article className="media mb-3">
                          <a href="#">
                            <img className="img-sm mr-3" src={`http://localhost:8080/images/${listnew.image}`}/>
                          
                          </a>
                          <div className="media-body">
                            <h6 className="mt-0">
                              <a href={"http://localhost:3000/tin-tuc-so-" + listnew.id}style={{textDecoration:"none"}}>{listnew.title} <span class="badge badge-info"> Hot </span></a>
                            
                            </h6>
                            <p className="demo-2">
                            {listnew.des}
                            </p>
                          </div>
                          <hr className="sidebar-divider my-0" />
    
                          
                        </article>
                         )))}
    
                     
                
    
                      
                      </div>{" "}
                      {/* box.// */}
                    </aside>{" "}
    
                    
                    {/* col.// */}
                  </div>{" "}
                  {/* row.// */}
                </div>{" "}
                {/* container .//  */}
              </section>
              {/* ========================= SECTION CONTENT END// ========================= */}
              <div id="comment" className="border">
          <h5 className="title" style={{ fontWeight: "bold", marginLeft: "34px" }}>BÌNH LUẬN</h5>
          <div class="fb-comments" style={{ marginLeft: "30px" }} data-href="http://localhost:3000" data-width="1300" data-numposts="1"></div>
        </div>
            </div>
           
            <Footer />
          </div>
        )}
    
    }
    
export default DetailNews;