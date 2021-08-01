import axios from 'axios';

const URL = "http://localhost:8080/brand";

class BrandService{
    createBrand(brand){
        return axios.post(URL, brand);
    }
    
}
export default new BrandService()