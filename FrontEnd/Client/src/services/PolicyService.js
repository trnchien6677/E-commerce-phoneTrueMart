import axios from 'axios';

const URL = "http://localhost:8080/policy";

class PolicyService{
    getPolicy(){
        return axios.get(URL);
    }

    createPolicy(policy){
        return axios.post(URL, policy);
    }
    deletePolicy(policyId){
        return axios.delete(URL + '/' + policyId);
    }
    getPolicyBaohanh(){
        return axios.get(URL+"/baohanh");
    }
    getPolicyDoitra(){
        return axios.get(URL+"/doitra");
    }
    getPolicyXuhuong(){
        return axios.get(URL+"/xuhuong");
    }
    getPolicyTindo(){
        return axios.get(URL+"/tindo");
    }
    getPolicyById(policyId){
        return axios.get(URL + '/' + policyId);
    }

    updatePolicy(policy, policyId){
        return axios.put(URL + '/' + policyId, policy);
    }
    
}
export default new PolicyService()