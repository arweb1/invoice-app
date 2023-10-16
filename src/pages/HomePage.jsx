import LeftSidebar from "../components/Left-sidebar/Left-sidebar";
import Controls from "../components/Controls/Controls";
import InvoiceList from "../components/Invoices-list/Invoice-list";
import EditInvoicePage from "./EditInvoicePage";
import NewInvoiceForm from "../components/New-invoice-form/NewInvoiceForm";
import './HomePage.scss';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector(state => state.theme.theme)
  
  return (
    <Router>
      <div className="page" id={theme}>
        <LeftSidebar/>
        <NewInvoiceForm/>
        <main>
            <Routes>
              <Route path="/" element={<InvoiceList/>}/>
              <Route path="/edit/:id" element={<EditInvoicePage/>}/>
            </Routes>
        </main>
      </div>
    </Router>
  )
}

export default HomePage;