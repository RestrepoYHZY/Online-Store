import http_service from "../service/http_service";

const path="/products"

export const getProducts = async ()=> 
await http_service.get(path);

export const getProductById = async (id)=>
  await http_service.get(`${path}/${id}`);

  export const postProducts= async (data)=>
  await http_service.post(path, data);

  export const putProducts = async (id, data)=>
  await http_service.put(`${path}/${id}`, data);

  export const deleteProducts= async (id)=>
  await http_service.delete(`${ path }/${ id }`);