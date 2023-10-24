import LeftSidebar from "../../components/Left-sidebar/Left-sidebar";
import InvoiceList from "../../components/Invoices-list/Invoice-list";
import InvoiceInfoPage from "../InvoiceInfoPage/InvoiceInfoPage";
import NewInvoiceForm from "../../components/New-invoice-form/NewInvoiceForm";
import './HomePage.scss';

import ModalWindow from "../../components/Modal-window/Modal-window";

import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector(state => state.theme.theme);
  
  return (
    <Router>
      <div className="page" id={theme}>
        <LeftSidebar/>
        <NewInvoiceForm/>
        <main>
            <Routes>
              <Route path="/" element={<InvoiceList/>}/>
              <Route path="/info/:id" element={<InvoiceInfoPage/>}/>
            </Routes>
        </main>
      </div>
    </Router>
  )
}

export default HomePage;