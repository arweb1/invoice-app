import LeftSidebar from "../components/Left-sidebar/Left-sidebar";
import Controls from "../components/Controls/Controls";
import InvoiceList from "../components/Invoices-list/Invoice-list";
import NewInvoiceForm from "../components/New-invoice-form/NewInvoiceForm";
import './HomePage.scss';

import { useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector(state => state.theme.theme)
  
  return (
    <div className="page" id={theme}>
        <LeftSidebar/>
        <NewInvoiceForm/>
        <main>
            <Controls/>
            <InvoiceList/>
        </main>
    </div>
  )
}

export default HomePage;