import axios from 'axios';

const URL = "http://localhost:8080/category";

class CategoryService{
    getCategory(){
        return axios.get(URL);
    }

    createCategory(category){
        return axios.post(URL, category);
    }
    getCategoryById(categoryId){
        return axios.get(URL + '/' + categoryId);
    }
    deleteCategory(categoryId){
        return axios.delete(URL + '/' + categoryId);
    }
    updateCategory(category, categoryId){
        return axios.put(URL + '/' + categoryId, category);
    }
    async addImage(imageData, catgoryId, type) {
        const response = await axios.post(`http://localhost:8080/add-category-image/${catgoryId}`, imageData, {
            onUploadProgress: progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            },
            params: {
                type
            }
        });
    }
    
}
export default new CategoryService()