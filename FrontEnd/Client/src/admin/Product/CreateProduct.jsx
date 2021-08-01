import React, { Component } from "react";
import CategoryService from "../../services/CategoryService";
import ProductService from "../../services/ProductService";
import HearderAdmin from "../HearderAdmin";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ckeditor, { CKEditor } from '@ckeditor/ckeditor5-react';
var image =[];
var content=[]
var arraynew = [];
var arrayrelated = [];
var arrayimages=[];
var seletedImage = [];
class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: [],
      name: "",
      price: "",
    
      content: "",
      discount: "",
      total: "",
      image: "",
      description: "",
      camera: "",
      display: "",
      cpu: "",
      height: "",
      width: "",
      thick: "",
      categoryId: 1,
      imageDatas: [],
      imageDatas: [],
      selectedFile: null,
      selectedValueProduct: [],
      selectedImage:" ",
      IdproductNews:" ",
    };
    this.saveProduct = this.saveProduct.bind(this);
    this.listProduct = this.listProduct.bind(this);
    this.addContent =this.addContent.bind(this);
    this.addProductImage = this.addProductImage.bind(this);
    this.changeProductImage = this.changeProductImage.bind(this);
    this.changeProductContent = this.changeProductContent.bind(this);
  }
  componentDidMount() {
    CategoryService.getCategory().then((res) => {
      this.setState({ category: res.data });
    });
  }
  saveProduct = (e) => {
    e.preventDefault();
    let product = {
      name: this.state.name,
      price: this.state.price,
      discount: this.state.discount,
      total: this.state.total,
      image:this.state.image,
      content: this.state.content,
      description: this.state.description,
      camera: this.state.camera,
      display: this.state.display,
      operating: this.state.operating,
      cpu: this.state.cpu,
      height: this.state.height,
      width: this.state.width,
      thick: this.state.thick,
    };

    ProductService.createProduct1(this.state.categoryId, product).then(async(res) => {
      for (const f of this.state.imageDatas) {
        this.addProductImage(f);
    }
      this.addProductImage(image);
      this.addProductImage(content);
      let ProductNew = res.data;
      this.setState({IdproductNews:ProductNew.id});
      console.log("id =>"+ this.state.IdproductNews);

      await ProductService.updateimages(seletedImage, this.state.IdproductNews).then((res) => {
       
      });
      this.props.history.push("/admin_product");
    });
   
  };

  addProductImage = async (productId) => {
    await ProductService.addImage(productId);
  };
  
  changeProductImage = (e) => {
    image = [];
    let file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('imageFile', file);
    this.setState({ image: file.name });
    image = imageData;
}

changeImageHandler = (event) => {
  let files = event.target.files;
    let imageArrays = [];
    seletedImage = [];
    for (const f of files) {
      const imageData = new FormData();
      imageData.append('imageFile', f);
      imageArrays.push(imageData);
      seletedImage.push({
        image:f.name});
    }
    this.setState({imageDatas:imageArrays});
    console.log("images => " + JSON.stringify(seletedImage));
};
  changeProductContent = (e) => {
    content = [];
    let file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('imageFile', file);
    this.setState({ content: file.name });
    content = imageData;
  }
  listProduct() {
    this.props.history.push("/admin_product");
  }
  addName = (event) => {
    this.setState({ name: event.target.value });
  };
  addPrice = (event) => {
    this.setState({ price: event.target.value });
  };
  
  addContent = (event) => {
    this.setState({ content: event.target.value });
  };
  addDiscount = (event) => {
    this.setState({ discount: event.target.value });
  };
  addTotal = (event) => {
    this.setState({ total: event.target.value });
  };
  addImage = (event) => {
    this.setState({ image: event.target.value });
  };
  addDescription  = (event, editor) =>{
    const data = editor.getData();
    this.setState({description:data});
    console.log("STATE", {data})
  };
 
  addCamera = (event) => {
    this.setState({ camera: event.target.value });
  };
  addDisplay = (event) => {
    this.setState({ display: event.target.value });
  };
  addOperating = (event) => {
    this.setState({ operating: event.target.value });
  };
  addCpu = (event) => {
    this.setState({ cpu: event.target.value });
  };
  addHeight = (event) => {
    this.setState({ height: event.target.value });
  };
  addWidth = (event) => {
    this.setState({ width: event.target.value });
  };
  addThick = (event) => {
    this.setState({ thick: event.target.value });
  };
  addCate = (event) => {
    this.setState({ categoryId: event.target.value });
  };

  // addLink= (event) => {
  //     this.setState({link: event.target.value});
  // }

  // addImage= (event) => {
  //     this.setState({image: event.target.value});
  // }
  cancel() {
    this.props.history.push("/admin_product");
  }

  render() {
    return (
      <div>
        <div>
          <div id="wrapper">
            <HearderAdmin />
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}

                <div className="container-fluid">
                  {/* Page Heading */}
                  <br></br>
                  <h1 className="h3 mb-2 text-gray-800">Trang quản trị sản phẩm</h1>
                
                  {/* DataTales Example */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <button
                        className="btn btn-primary"
                        onClick={this.listProduct}
                      >
                        Danh sách sản phẩm
                      </button>
                    </div>
                    <br></br>
                    <div className="container">
                      <div className="row">
                        <div className="card col-md-12">
                          {<h3 className="text-center">Thêm sản phẩm mới</h3>}
                          <div className="card-body">
                            <form>
                              <div className="form-group">
                                <label> Tên Sản Phẩm </label>
                                <input
                                  type="text"
                                  placeholder="Tên Sản Phẩm"
                                  name="name"
                                  className="form-control"
                                  value={this.state.name}
                                  onChange={this.addName}
                                />
                              </div>
                              <div className="form-group">
                                <label> Giá </label>
                                <input
                                  type="number"
                                  placeholder="Giá"
                                  name="price"
                                  className="form-control"
                                  value={this.state.price}
                                  onChange={this.addPrice}
                                />
                              </div>
                             
                              <div className="form-group">
                          <label> Hình ảnh: </label>
                          <input
                            name="image"
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={this.changeProductImage}
                          />
                        </div>
                        <div className="form-group">
                          <label> Hình ảnh liên quan: <p style={{float:"right",marginLeft:"10px"}}>(Chọn nhiều ảnh)</p></label>
                          <input
                            name="image"
                            type="file"
                            placeholder="Chọn nhiều ảnh"
                            multiple
                            className="form-control"
                            accept="image/*"
                            onChange={this.changeImageHandler}
                          />
                          </div>
                              <div className="form-group">
                                <label> Hình ảnh chi tiết(Thông số sản phẩm)</label>
                                <input
                                  type="file"
                                  name="files"
                                 className="form-control"
                                 accept="image/*"
                                  onChange={this.changeProductContent}
                                  
                                />
                                   {/* <input type="file" id="files" name="files" multiple></input> */}
                              </div>
                              <div className="form-group">
                                <label> Giảm giá </label>
                                <input
                                  type="text"
                                  placeholder="Nhập %"
                                  name="discount"
                                  className="form-control"
                                  value={this.state.discount}
                                  onChange={this.addDiscount}
                                />
                              </div>
                              <div className="form-group">
                                <label> Tổng số lượng </label>
                                <input
                                  type="text"
                                  placeholder="Tổng"
                                  name="total"
                                  className="form-control"
                                  value={this.state.total}
                                  onChange={this.addTotal}
                                />
                              </div>
                            
                              <div className="form-group">
                                <label> Mô tả sản phẩm </label>
                                {/* <input
                                  type="text"
                                  placeholder="Mô tả"
                                  name="description"
                                  className="form-control"
                                  value={this.state.decription}
                                  onChange={this.addDescription}
                                /> */}
                                                   <CKEditor
      editor ={ClassicEditor}
       onInit = { editor =>{
           //// Here the editor is ready to be used
       }}
       value={this.state.decription}
       onChange ={this.addDescription}
       config = {
        {
           // plugins: [ Essentials ],
          ckfinder: {
              // The URL that the images are uploaded to.
              uploadUrl: '/upload', 
  
              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,
  
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                  'X-CSRF-TOKEN': 'CSFR-Token',
                   Authorization: 'Bearer <JSON Web Token>'
              }
        } }

     }
       
     />
                              </div>
                              <div className="form-group">
                                <label> Camera </label>
                                <input
                                  type="text"
                                  placeholder="Nhập đồ phân giả"
                                  name="camera"
                                  className="form-control"
                                  value={this.state.camera}
                                  onChange={this.addCamera}
                                />
                              </div>
                              <div className="form-group">
                                <label> Màn hình </label>
                                <input
                                  type="text"
                                  placeholder="Nhập kiểu màn hình"
                                  name="display"
                                  className="form-control"
                                  value={this.state.display}
                                  onChange={this.addDisplay}
                                />
                              </div>
                              <div className="form-group">
                                <label> Hệ điều hành </label>
                                <input
                                  type="text"
                                  placeholder="Hệ điều hành"
                                  name="operating"
                                  className="form-control"
                                  value={this.state.operating}
                                  onChange={this.addOperating}
                                />
                              </div>
                              <div className="form-group">
                                <label> Chip xử lý </label>
                                <input
                                  type="text"
                                  placeholder="Chip"
                                  name="cpu"
                                  className="form-control"
                                  value={this.state.cpu}
                                  onChange={this.addCpu}
                                />
                              </div>
                              <div className="form-group">
                                <label> Chiều cao </label>
                                <input
                                  type="text"
                                  placeholder="Chiều cao"
                                  name="height"
                                  className="form-control"
                                  value={this.state.height}
                                  onChange={this.addHeight}
                                />
                              </div>
                              <div className="form-group">
                                <label> Chiều rộng </label>
                                <input
                                  type="text"
                                  placeholder="chiều rộng"
                                  name="width"
                                  className="form-control"
                                  value={this.state.width}
                                  onChange={this.addWidth}
                                />
                              </div>
                              <div className="form-group">
                                <label> Độ dày </label>
                                <input
                                  type="text"
                                  placeholder="Độ dày"
                                  name="thick"
                                  className="form-control"
                                  value={this.state.thick}
                                  onChange={this.addThick}
                                />
                              </div>



                              <div className="form-group">
                              <label for="cars">Chọn nhóm sản phẩm </label><br/>
            <select
              className="form-control"
              name="categoryId"
              value={this.state.categoryId}
              onChange={this.addCate}
            >
              {this.state.category.map((listcate) => (
                <option value={listcate.id}>{listcate.name}</option>
               ))}
            </select>
         
                              </div>


                             

                              {/* <div className = "form-group">
                                            <label> Brand: </label>
                                            <div className="col-sm-16">
                                            <select name="category" >
                                               {this.state.category.map(listcate => (
                                                <option value={listcate.id}>{listcate.name}</option>
                                                ))}
                                            </select>
                                          
					                                  </div>
                                        </div> */}

                              {/* <div className="form-group">
                                <label> Category: </label>

                                <select name="category">
                                  {this.state.categorys.map((listcate) => (
                                    <option onClick={() =>
                                      this.plusCategory(listcate.id)
                                    } >                                  
                                      {listcate.name}
                                    </option>
                                  ))};
                                </select>
                              </div> */}

                              <button
                                className="btn btn-success"
                                onClick={this.saveProduct}
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
      </div>
    );
  }
}

export default CreateProduct;
