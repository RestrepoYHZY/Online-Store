import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../actions/products.action";
import { getProviders } from "../actions/providers.action";
import { getCustomer } from "../actions/customer.action";


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

  //Customer
  const [customers, setCustomer]= useState ([]);

 const getCustomerData = async()=>{
   try{
     const {data}= await getCustomer();
     setCustomer(data);
     console.log(data)
   }catch (error) {
     console.log(error);
   }
 };

  useEffect(() => {
   getCustomerData();
  }, []);


  return (
    <>
      <EntitiesContext.Provider
        value={{
          providers,
          getProvidersData,
          products,
          getProductsData,
          customers,
          getCustomerData

        }}
      >
        {children}
      </EntitiesContext.Provider>
    </>
  );





};

export { EntitiesProvider, useEntities };
