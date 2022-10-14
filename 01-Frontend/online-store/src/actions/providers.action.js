import http_service from "../service/http_service";

const path = "/providers"

export const getProviders = async ()=>
  await http_service.get(path);

  export const postProviders = async (data)=>
  await http_service.post(path, data);