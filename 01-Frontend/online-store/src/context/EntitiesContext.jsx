import { createContext, useContext, useEffect , useState } from "react";
import { getProviders } from "../actions/providers.action";

const EntitiesContext = createContext();

const useEntities = () => {
  const context = useContext(EntitiesContext);
  if (context) return context;

};
const EntitiesProvider =  ({ children }) => {
// PROVIDERS
const [providers, setProviders]= useState([]);

const getProvidersData = async ()=>{
  try{
    const { data } = await getProviders();
    setProviders(data);
  }catch(error){
    console.log(error);
  };
};
useEffect(()=>{
  getProvidersData();
}, []);



  return (
    <>
      <EntitiesContext.Provider value={{
providers,
getProvidersData

      }}>
        {children}
      </EntitiesContext.Provider>

    </>
  );
};

export {EntitiesProvider, useEntities};
