import { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (context) return context;
};

export const InvoiceProvider = ({ children }) => {
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchaser, setPurchaser] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);

  const deleteElement = (id) => {
    const result = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart([...result]);
  };

  return (
    <>
      <InvoiceContext.Provider
        value={{
          purchaseDate,
          setPurchaseDate,
          purchaser,
          setPurchaser,
          shoppingCart,
          setShoppingCart,
          deleteElement,
        }}
      >
        {children}
      </InvoiceContext.Provider>
    </>
  );
};
