import LeftSidebar from "../components/Left-sidebar/Left-sidebar";
import Controls from "../components/Controls/Controls";
import InvoiceList from "../components/Invoices-list/Invoice-list";
import './HomePage.scss';

function HomePage() {
  return (
    <div className="page">
        <LeftSidebar/>
        <main>
            <Controls/>
            <InvoiceList/>
        </main>
    </div>
  )
}

export default HomePage;