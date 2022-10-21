import http_service from "../service/http_service";

const path="/customer"

export const getCustomer = async ()=> 
await http_service.get(path);