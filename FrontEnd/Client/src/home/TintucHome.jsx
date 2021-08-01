import React, { Component } from 'react';
import NewsService from '../services/NewsService';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class TintucHome extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        
          event: [],
          topnew: []
        };
      }
      componentDidMount() {
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
                 <section className="section-name padding-y bg">
            <div className="container-123">
            <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Tin tức 24h</h4>
          </header>
              <div className="row">
                  
              <div className="col-md-7">
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
                          <br />{listnew1.title}{" "}
                          </h3>
                          <p
                            className="demo-2"
                            style={{ maxWidth: "700px" }}
                          >
                            { ReactHtmlParser(listnew1.des) }
                          </p>
                          <a href={"./tin-tuc-so-" + listnew1.id} className="btn btn-warning">
                            Xem chi tiết
                          </a>
                        
                        </div>
                      </div>
                    ))}
              
                     
                    </div>{" "}
               
                    <div className="col-md-5">
        
                    {this.state.event.map((listpro) => (
                            <div className="col-md-12">
                              <div className="card-banner border-bottom">
                                <div className="py-3" style={{ width: "65%" }}>
                                  <h6 className="demo-2">
                                  <a href={"./tin-tuc-so-" + listpro.id} style={{color:"black",textDecoration:"none"}}>
                                      { ReactHtmlParser(listpro.content) }
                                    </a>
                                  </h6>

                                  <p>
                                    {" "}
                                    <span class="badge badge-info">
                                      {" "}
                                      Sự kiện
                                    </span>
                                  </p>
                                </div>
                                <img
                                  src={"home/images/tintuc/" + listpro.image}
                                  height={100}
                                  className="img-bg"
                                />
                              </div>
                            </div>
                          ))}
                           <a href="http://localhost:3000/news">
                     <button className="btn btn-info ml-4 mt-2">Xem thêm</button></a>
                      {/* card-banner //end */}
                    </div>{" "}
                    
                </div>
                </div>
                </section>
            </div>
        );
    }
}

export default TintucHome;