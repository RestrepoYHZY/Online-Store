import React, { useEffect, useState } from "react";
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
  const [elementId, setElementId] = useState(0);
  

  const { customers, products, success } = useEntities();

  const { setPurchaseDate, setPurchaser, infoToEdit } = useInvoice();

  const resetForm = ()=>{
    setProduct("");
    setPrice(0);
    setAmount(0);
    setSubTotal(0);
  }

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


  const editValues = (values)=>{
    const { product, price, amount, subTotal, id }= values;
    setElementId(id)
      setProduct(product);
      setPrice(price);
      setAmount(amount);
      setSubTotal(subTotal);
  }


  useEffect(() => {
    if(infoToEdit?.id){
      editValues(infoToEdit)
    };
  },[infoToEdit])

  useEffect(() => {
    if(!success){
      setDate("")
      setCustomer("")
    };
  },[success])

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
    setProduct,
    price,
    amount,
    subTotal,
    resetForm,
    elementId,

    setElementId
  };
};

export default useFormInvoice;
