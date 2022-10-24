import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../actions/products.action";
import { getProviders } from "../actions/providers.action";

const EntitiesContext = createContext();

const useEntities = () => {
  const context = useContext(EntitiesContext);
  if (context) return context;
};
const EntitiesProvider = ({ children }) => {

  // PROVIDERS
  const [providers, setProviders] = useState([]);

  const getProvidersData = async () => {
    try {
      const { data } = await getProviders();
      setProviders(data);
    } catch (error) {
      console.log(error);
    }
  };

  //ProvidersById

  const [provider, setProvider]= useState("");

  const getProviderInfo = async ()=>{
    try{
      const { data }= await getProviderById(idProvider);
      const { provider:name } = data;
      setProvider(name)
    }catch(error){
      console.log(error);
    }
  }

 //Products

 const [products, setProducts]= useState ([]);

 const getProductsData = async()=>{
   try{
     const {data}= await getProducts();
     setProducts(data);
     console.log(data)
   }catch (error) {
     console.log(error);
   }
 };

  useEffect(() => {
    getProvidersData();
    getProductsData();
  }, []);


  return (
    <>
      <EntitiesContext.Provider
        value={{
          providers,
          getProvidersData,
          products,
          getProductsData,
          setProvider,
          provider,
          getProviderInfo

        }}
      >
        {children}
      </EntitiesContext.Provider>
    </>
  );





};

export { EntitiesProvider, useEntities };
