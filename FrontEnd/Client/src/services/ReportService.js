import axios from 'axios';

const URL = "http://localhost:8080/report";

class ReportService{
 
    getReport(){
        return axios.get(URL);
    }
    createReport(report){
        return axios.post(URL, report);
    }
    deleteReport(id){
        return axios.delete(URL + '/' + id);
    }
   
}
export default new ReportService()