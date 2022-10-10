import NavBarPage from "./components/NavBar/NavBarPage";

import NewInvoce from './pages/NewInvoce';
import ListInvoce from './pages/ListInvoce';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Providers from './pages/Providers';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Routes, Route } from "react-router-dom"
import "./index.css";
import { Box } from "@mui/material";

const App = () => {
  return (<>
    <NavBarPage />
    <Box style={{marginTop:'8em'}}>
      <Routes>
        {/* <Route path="/" element={ <NewInvoce /> } </Route> */}
        <Route path="/NewInvoce" element={ <NewInvoce /> } />
          <Route path="/ListInvoce" element={ <ListInvoce /> } />
          <Route path="/Products" element={ <Products /> } />
          <Route path="/Customers" element={ <Customers /> } />
          <Route path="/Providers" element={ <Providers /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </Box>
  </>)
};

export default App