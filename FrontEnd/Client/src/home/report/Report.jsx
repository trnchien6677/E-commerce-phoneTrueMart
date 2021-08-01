import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

import OrderService from "../../services/OrderService";
import ReportService from "../../services/ReportService";

class Report extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
        this.saveReport = this.saveReport.bind(this);
       
      }
      componentDidMount() {
        return;
      }
    
      saveReport = (e) => {
        e.preventDefault();
        let report = {
          title: this.state.title,
          description: this.state.description,
          fullname: this.state.fullname,
          email: this.state.email,
          phone: this.state.phone,
          theme: this.state.theme,
        };
    
        ReportService.createReport(report).then((res) => {
            alert('Cảm ơn quý khách đã đóng góp ý kiến: Câu trả lời sẽ được gửi trực tiếp đến email của bạn');
            this.props.history.push("/");
        });
        
      };
    
      addTitle = (event) => {
        this.setState({ title: event.target.value });
      };
    
      addDescription = (event) => {
        this.setState({ description: event.target.value });
      };
    
      addFullname = (event) => {
        this.setState({ fullname: event.target.value });
      };
      addEmail = (event) => {
        this.setState({ email: event.target.value });
      };
      addPhone = (event) => {
        this.setState({ phone: event.target.value });
      };
      addTheme = (event) => {
        this.setState({ theme: event.target.value });
      };
     
  render() {
    return (
      <div>
        <div className="container-1">
          <Header />
          <div className="container-123">
            <header className="section-heading heading-line mt-4">
              <h2 className="title-section text-uppercase">
               MỌI THẮC MẮC HOẶC BÁO CÁO SỰ CỐ
              </h2>
            </header>
            <div className="row">
              
              <div className="col-md-6" style={{margin:"0 auto"}}>
              <div className="contact-form relative">
  <div className="preloader">
    <div className="loaderweb" />
  </div>
  <form method="post" id="contact-form" style={{height:"600px"}}>
    <h1>Hỗ Trợ Quý Khách</h1>
    <div className="the-form-wrapper" style={{margin:"0 auto"}}>
      <div className="topic mb-3">
        <label htmlFor="topic-filter">Quý khách đang quan tâm về*: </label>
        
        <select
              className="form-control"
              name="categoryId"
              value={this.state.theme}
              onChange={this.addTheme}
            >
           
                <option value="">--Chọn--</option>
                <option value="Bảo hành">Bảo hành</option>
                <option value="Báo máy hỏng">Báo máy hỏng</option>
                <option value="Đóng góp chung">Đóng góp chung</option>
                <option value="Đổi trả">Đổi trả</option>
                <option value="Liên hệ">Liên hệ</option>
              
            </select>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="title">Tiêu đề</label>
          
        </div>
        <div className="input-wrapper">
          <input type="text"
                                placeholder="Tên tiêu đề"
                                name="name"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.addTitle}/>
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="message">Nội dung</label>
         
        </div>
        <div className="input-wrapper">
          <textarea type="text"
                                placeholder="Nhập nội dung"
                                name="name"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.addDescription}/>
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="fullname">Họ và tên</label>
          
        </div>
        <div className="input-wrapper">
          <input type="text"
                                placeholder="Họ tên đầy đủ"
                                name="name"
                                className="form-control"
                                value={this.state.fullname}
                                onChange={this.addFullname}/>
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="email">Địa chỉ email</label>
          
        </div>
        <div className="input-wrapper">
          <input type="email"
                                placeholder="Email"
                                name="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.addEmail}/>
        </div>
      </div>
      <div className="row-wrapper ">
        <div className="label-wrapper">
          <label htmlFor="tel">Số điện thoại</label>
  
        </div>
        <div className="input-wrapper">
          <input type="email"
                                placeholder="Số điện thoại"
                                name="email"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.addPhone} maxLength={10} />
        </div>
      
      </div>
      <button
                              className="btn btn-success"
                              onClick={this.saveReport}
                            style={{marginLeft:"510px"}}>
                              Gửi liên hệ
                            </button>
    </div>
    <div className="submit-wrapper">
    
    </div>
    <input name="AntiforgeryFieldname" type="hidden" defaultValue="CfDJ8FRMdZElwYFItzzLAfC9E2fHWrTjICosjK_zS-shgkPT6cBTWvIWwME6iWRHgeqMJvYH0J5UdpPtd-ab8neX9yA8m8LcfYGBrequS-S9rt8G9FkY8ziA9h7qX0Z6qmXjnKjXX6AhEyEpIs7QB9uvKqQ" /></form>
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

export default Report;

