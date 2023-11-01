import { useSelector } from "react-redux";
import { selectProductPrices, selectProductQty, selectFilteredInvoices } from "../../selectors/form-selectors";
import { Link } from "react-router-dom";

import illustrationEmpty from "../../assets/illustration-empty.svg";

import Invoice from "../Invoice/Invoice";
import Controls from "../Controls/Controls";

function InvoiceList() {
  const filteredInvoices = useSelector(selectFilteredInvoices)
  const productPrices = useSelector(selectProductPrices)
  const productQty = useSelector(selectProductQty)

  return (
    <>
      <Controls/>
      <div className="invoice-list">
        {filteredInvoices.length > 0 ? (
          filteredInvoices.map((invoice, index) => (
            <Link to={`/info/${invoice.id}`} key={invoice.id}>
              <Invoice data={invoice} productPrices={productPrices[index]} productQty={productQty[index]}/>
            </Link>
          ))
        ) : (
          <img
            src={illustrationEmpty}
            alt="Empty Invoice List"
            style={{ display: "flex", justifyContent: "center" }}
          />
        )}
      </div>
    </>
  );
}

export default InvoiceList;
