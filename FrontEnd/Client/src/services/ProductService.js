import axios from 'axios';

const URL = "http://localhost:8080/product";
const URLCATE = "http://localhost:8080/category";


class ProductService {
    getProduct(){
        return axios.get(URL);
    }
    findByName(keyword) {
        return axios.get("http://localhost:8080/product/search",{
            params:{
                keyword
            }
        }
    );
    }
    deleteProduct(productId){
        return axios.delete(URL + '/' + productId);
    }
    getProductIphone(){
        return axios.get(URL + '/' + 2);
    }
  
    getProductImageById(productId){
        return axios.get(URL + '/' + 'product-image' + productId);
    }
    getProductById(productId){
        return axios.get(URL + '/' + 'detail' + '/' + productId);
    }
    getCategoryById(categoryId){
        return axios.get(URLCATE + '/' + categoryId);
    }
    createProduct(product,categoryId){
        return axios.post(URL+ '/' + categoryId, product);
    }
    async addProductImage(imageData, productId, type) {
        const response = await axios.post(`http://localhost:8080/add-product-image/${productId}`, imageData, {
            onUploadProgress: progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            },
            params: {
                type
            }
        });
    }
    // async addContentImage1(imageData1, productId, type) {
    //     const response = await axios.post(`http://localhost:8080/add-product-content/${productId}`, imageData1, {
    //         onUploadProgress: progressEvent => {
    //             console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
    //         },
    //         params: {
    //             type
    //         }
    //     });
    // }

    getPt(page) {
        return axios.get(URL+'/'+'pt?page=' + page);
    }
    getAllPr(page) {
        return axios.get(URL+'/'+'allanother?page=' + page);
    }
    getProductOppo(){
        return axios.get(URL + '/'+'oppo');
    }

    getProductXiaomi(){
        return axios.get(URL + '/'+'xiaomi');
    }

    getProductLimitVivo(){
        return axios.get(URL + '/'+'limitVivo');
    }

    getProductAllVivo(){
        return axios.get(URL + '/'+'vivo');
    }

    getProductAllNokia(){
        return axios.get(URL + '/'+'nokia');
    }

    getProductAllXiaomi(){
        return axios.get(URL + '/'+'allxiaomi');
    }

    getProductPhukien(){
        return axios.get(URL + '/'+'phukien');
    }
    getProductSamsungAll(){
        return axios.get(URL + '/'+'allsamsung');
    }
    getReProduct(productId){
        return axios.get(URL + '/'+'detail-product'+'/' + productId);
    }
    createProduct1(id,product){
        return axios.post("http://localhost:8080/product/add/"+id,product);
    }
    updateProduct(product, id,idcate){
        return axios.put(URL + '/' + id+ '/' + idcate, product);
    }
    getSamsung(page) {
        return axios.get(URL+'/'+'samsung?page=' + page);
    }
    async addImage(imageData) {
        return axios.post(`http://localhost:8080/addimage`, imageData
        , {
            onUploadProgress: progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            }
        });
    }
    updateimages(productimages,id) {
        return axios.put(
          "http://localhost:8080/product-images/"+id,
          productimages
        );
      }

}

export default new ProductService()