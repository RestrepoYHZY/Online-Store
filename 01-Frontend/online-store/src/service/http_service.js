import axios from 'axios';


const instance= ()=> axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers:{
    "Content-Type": "application/json"
  }
});

const http_service = {
    get:(path)=>instance().get(path),
    post:(path,data)=>instance().post(path,data),
    put:(path,data)=>instance().put(path,data)

  };



export default http_service