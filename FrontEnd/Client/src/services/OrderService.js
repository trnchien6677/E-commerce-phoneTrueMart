import axios from 'axios';

const Order_API = "http://localhost:8080/";

class OrderService {
  CreateInfos(info) {
    return axios.post(Order_API, info);
  }
//   ListOrder(userid){
//     return axios.get("http://localhost:8080/list_order"+'/'+userid);
// }
ListOrderDetail(id_order){
    return axios.get(Order_API+'order_detail/listorder/'+id_order);
}
deleteOrder(idor){
    return axios.delete("http://localhost:8080/info_order" + '/' + idor);
}
deleteOrderDetail(idor){
    return axios.delete("http://localhost:8080/order_detail" + '/' + idor);
}
ListOrder(userid){
  return axios.get("http://localhost:8080/list_order"+'/'+userid);
}
ListOrder(userid){
  return axios.get(Order_API +'order/'+userid);
  }
  getOrderAll(){
    return axios.get("http://localhost:8080/order/all");
}
deleteOrder(orderId){
  return axios.delete(Order_API + 'order/' + orderId);
}

}

export default new OrderService();