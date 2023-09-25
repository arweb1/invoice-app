import LeftSidebar from "../components/Left-sidebar/Left-sidebar";
import Controls from "../components/Controls/Controls";
import InvoiceList from "../components/Invoices-list/Invoice-list";
import './HomePage.scss';

import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const theme = useSelector(state => state.theme.theme)
  
  return (
    <div className="page" id={theme}>
        <LeftSidebar/>
        <main>
            <Controls/>
            <InvoiceList/>
        </main>
    </div>
  )
}

export default HomePage;