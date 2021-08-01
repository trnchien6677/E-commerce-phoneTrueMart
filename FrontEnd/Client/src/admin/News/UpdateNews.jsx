import React, { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ckeditor, { CKEditor } from "@ckeditor/ckeditor5-react";
import NewsService from "../../services/NewsService";
import HearderAdmin from "../HearderAdmin";
import ProductService from "../../services/ProductService";
var image=[];
class UpdateNews extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      id: this.props.match.params.id,
      title: "",
      des: "",
      image: "",
      content: "",
      type: "",
      imagred:"",
    };
    this.updateNews = this.updateNews.bind(this);
    this.listNews = this.listNews.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  componentDidMount() {
    NewsService.getNewsById(this.state.id).then((res) => {
      let news = res.data;
      this.setState({
        title: news.title,
        des: news.des,
        image:news.image,
        content: news.content,
        type: news.type,
      });
      this.setState({imagred:this.state.image});
    });

  }
  updateNews = (e) => {
    e.preventDefault();
    let news = {
      title: this.state.title,
      des: this.state.des,
      image: this.state.image,
      content: this.state.content,
      type: this.state.type
    };
    console.log("id => " + JSON.stringify(this.state.id));

    NewsService.updateNews(news, this.state.id).then((res) => {

   
      this.addImage1(image);

      this.props.history.push("/admin-news");
    });
    
  };
  addImage1 = async (a) => {
    await ProductService.addImage(a);
  };

  addTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  addDes = (event) => {
    this.setState({ des: event.target.value });
  };
  changeImage = (e) => {
    image=[];
    let file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('imageFile', file);
    this.setState({image: file.name});
    image=imageData;
  }
 
 
  addContent  = (event, editor) => {
    const data = editor.getData();
    this.setState({ content: data });
    console.log("STATE", { data });
  };
  addType = (event) => {
    this.setState({ type: event.target.value });
  };
  cancel() {
    this.props.history.push("/admin-news");
  }
  listNews() {
    this.props.history.push("/admin-news");
  }
  render() {
    return (
      <div>
        <div id="wrapper">
        <HearderAdmin/>
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}

              <div className="container-fluid">
                {/* Page Heading */}
                <br></br>
                <h1 className="h3 mb-2 text-gray-800">Trang quản trị tin tức và sự kiện</h1>
               
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <button
                      className="btn btn-primary"
                      onClick={this.listNews}
                    >
                      Danh sách tin tức và sự kiện
                    </button>
                  </div>
                  <br></br>
                  <div className="container">
                    <div className="row">
                      <div className="card col-md-12">
                        {<h3 className="text-center">Sửa tin tức và sự kiện</h3>}
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                              <label> Tiêu đề </label>
                              <input
                                type="text"
                                placeholder="Title News"
                                name="title"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.addTitle}
                              />
                            </div>
                            <div className="form-group">
                              <label> Mô tả </label>
                              <input
                                type="text"
                                placeholder="Des"
                                name="des"
                                className="form-control"
                                value={this.state.des}
                                onChange={this.addDes}
                              />
                            </div>
                            <div className="form-group">
                              <label> Hình ảnh </label>
                              <input
                                type="file"
                                placeholder="Image"
                                name="image"
                                className="form-control"
                             
                                onChange={this.changeImage}
                              />
                            </div>
                            <div className="imageold" >
                              <img src={"http://localhost:8080/images/"+this.state.imagred} alt="" style={{width:"200px",height:"200px"}}/>
                            </div>
                          
                            <div className="form-group">
                              <label> Nội dung </label>
                              <CKEditor
                                editor={ClassicEditor}
                                onInit={(editor) => {
                                  //// Here the editor is ready to be used
                                }}
                                data={this.state.content}
                                onChange={this.addContent}
                                config={{
                                  // plugins: [ Essentials ],
                                  ckfinder: {
                                    // The URL that the images are uploaded to.
                                    uploadUrl: "/upload",

                                    // Enable the XMLHttpRequest.withCredentials property.
                                    withCredentials: true,

                                    // Headers sent along with the XMLHttpRequest to the upload server.
                                    headers: {
                                      "X-CSRF-TOKEN": "CSFR-Token",
                                      Authorization: "Bearer <JSON Web Token>",
                                    },
                                  },
                                }}
                              />
                            </div>
                            <div className="form-group">
                              <label for="cars">Chọn nhóm sản phẩm </label><br/>
            <select
              className="form-control"
              name="categoryId"
              value={this.state.type}
              onChange={this.addType}
            >
                <option value="">--Chọn--</option>
                <option value="news">Tin tức</option>
                <option value="event">Sự kiện</option>
              
            </select>
         
                              </div>
                            <button
                              className="btn btn-success"
                              onClick={this.updateNews}
                            >
                              Save
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={this.cancel.bind(this)}
                              style={{ marginLeft: "10px" }}
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2020</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateNews;
