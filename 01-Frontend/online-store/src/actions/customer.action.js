import http_service from "../service/http_service";

const path="/customers"

export const getCustomer = async ()=> 
    await http_service.get(path);

export const getCustomerById = async (id)=>
  await http_service.get(`${path}/${id}`);

  export const postCustomer= async (data)=>
  await http_service.post(path, data);

  export const putCustomer = async (id, data)=>
  await http_service.put(`${path}/${id}`, data);

  export const deleteCustomer= async (id)=>
  await http_service.delete(`${ path }/${ id }`);