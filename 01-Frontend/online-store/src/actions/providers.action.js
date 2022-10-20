import http_service from "../service/http_service";

const path = "/providers"

export const getProviders = async ()=>
  await http_service.get(path);

  export const getProviderById = async (id)=>
  await http_service.get(`${path}/${id}`);

  export const postProviders = async (data)=>
  await http_service.post(path, data);

  export const putProviders = async (id, data)=>
  await http_service.put(`${path}/${id}`, data);

  export const deleteProviders= async (id)=>
  await http_service.delete(`${ path }/${ id }`);

  