import axios from 'axios';

const URL = "http://localhost:8080/news";

class NewsService{
    getNews(){
        return axios.get(URL);
    }
    getNewsAdmin(){
        return axios.get(URL+'/ni');
    }
    createNews(news){
        return axios.post(URL, news);
    }
    getNewsById(newsId){
        return axios.get(URL + '/' + newsId);
    }
    getNewsAnotherId(newsId){
        return axios.get(URL + '/another/' + newsId);
    }
    deleteNews(newsId){
        return axios.delete(URL + '/' + newsId);
    }
    updateNews(news, newsId){
        return axios.put(URL + '/update/' + newsId, news);
    }
    getEvent(){
        return axios.get(URL+'/event');
    }
    getTopNews(){
        return axios.get(URL+'/top');
    }
    getPt(page) {
        return axios.get("http://localhost:8080/events?page=" + page);
    }
    getPtAll(page) {
        return axios.get("http://localhost:8080/news/pt?page=" + page);
    }
    async addImage(imageData, newsId, type) {
        const response = await axios.post(`http://localhost:8080/add-image/${newsId}`, imageData, {
            onUploadProgress: progressEvent => {
                console.log("Uploading : " + ((progressEvent.loaded / progressEvent.total) * 100).toString() + "%")
            },
            params: {
                type
            }
        });
    }
   
}
export default new NewsService()