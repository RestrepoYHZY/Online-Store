import http_service from "../service/http_service";

const path = "/providers"

export const getProviders = async ()=>
  await http_service.get(path);