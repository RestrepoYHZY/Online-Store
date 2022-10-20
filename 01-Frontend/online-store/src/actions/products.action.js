import http_service from "../service/http_service";

const path="/products"

export const getProducts = async ()=> 
await http_service.get(path);