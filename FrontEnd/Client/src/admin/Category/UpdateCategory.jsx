import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import ProductService from "../../services/ProductService";
import HearderAdmin from "../HearderAdmin";
var image=[];
class UpdateCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      link: "",
      image: "",
      imagred:"",
    
    };
    this.updateCategory = this.updateCategory.bind(this);
    this.listCategory = this.listCategory.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }
  componentDidMount() {
    CategoryService.getCategoryById(this.state.id).then((res) => {
      let category = res.data;
      this.setState({
        name: category.name,
        link: category.link,
        image: category.image,
      });
      this.setState({imagred:this.state.image});
    });
  }
  updateCategory = (e) => {
    e.preventDefault();
    let category = {
      name: this.state.name,
      link: this.state.link,
image: this.state.image,
    };
    console.log("id => " + JSON.stringify(this.state.id));

    CategoryService.updateCategory(category, this.state.id).then((res) => {
      this.addImage1(image);

      this.props.history.push("/admin_category");
    });
  };
  addImage1 = async (ab) => {
    await ProductService.addImage(ab);
  };

  addName = (event) => {
    this.setState({ name: event.target.value });
  };

  addLink = (event) => {
    this.setState({ link: event.target.value });
  };
  changeImage = (e) => {
    image=[];
    let file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('imageFile', file);
    this.setState({image: file.name});
    image=imageData;
  }

  cancel() {
    this.props.history.push("/admin_category");
  }
  listCategory() {
    this.props.history.push("/admin_category");
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
                <h1 className="h3 mb-2 text-gray-800">Trang quản trị nhóm sản phẩm</h1>
               
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <button
                      className="btn btn-primary"
                      onClick={this.listCategory}
                    >
                      Danh sách nhóm sản phẩm
                    </button>
                  </div>
                  <br></br>
                  <div className="container">
                    <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                        {<h3 className="text-center">Sửa nhóm sản phẩm</h3>}
                        <div className="card-body">
                          <form>
                            <div className="form-group">
                              <label> Tên nhóm sản phẩm </label>
                              <input
                                type="text"
                                placeholder="Name Category"
                                name="name"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.addName}
                              />
                            </div>
                            <div className="form-group">
                              <label> Logo </label>
                              <input
                                type="file"
                                placeholder="Chọn hình ảnh"
                                name="name"
                                className="form-control"
                                accept="image/*"
                                onChange={this.changeImage}
                              />
                            </div>
                            <div className="imageold" >
                              <img src={"http://localhost:8080/images/"+this.state.imagred} alt="" style={{width:"200px",height:"200px"}}/>
                            </div>
                            <div className="form-group">
                              <label> Link </label>
                              <input
                                type="email"
                                placeholder="Link"
                                name="link"
                                className="form-control"
                                value={this.state.link}
                                onChange={this.addLink}
                              />
                            </div>
                           

                            <button
                              className="btn btn-success"
                              onClick={this.updateCategory}
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

export default UpdateCategory;
