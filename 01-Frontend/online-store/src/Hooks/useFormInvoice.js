import React, { useState } from "react";
import { useInvoice } from "../../src/context/InvoiceContext";
import { getProductById } from "../actions/products.action";
import { useEntities } from "../context/EntitiesContext";

const useFormInvoice = () => {
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const { customers, products } = useEntities();

  const { setPurchaseDate, setPurchaser } = useInvoice();

  const handleDate = (value) => {
    setDate(value);
    setPurchaseDate(value);
  };

  const handleCustomer = (value)=>{
    setCustomer(value);
    setPurchaser(value);
  }

  const getAProduct = async (id)=>{
    setAmount(0);
    setSubTotal(0);
    setProduct(id);

    try{
        const { data }= await  getProductById(id);
        if(!id){
            setPrice(0);
            return
        };
        setPrice(data?.price)
    }catch(error){
        console.log(error);
    }
  }

  const multiplyPrice = (quantity)=>{
    setAmount(quantity);
    setSubTotal(+price*+quantity);
  }


  return {
    date,
    setDate: handleDate,
    customer,
    setCustomer: handleCustomer,
    customers,
    products,
    getAProduct,
    multiplyPrice,
    product,
    price,
    amount,
    subTotal,
  };
};

export default useFormInvoice;
