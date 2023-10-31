import React from "react";
import { Link } from "react-router-dom";
import Invoice from "../Invoice/Invoice";
import { useSelector } from "react-redux";
import { selectFilteredInvoices } from "../../selectors/form-selectors";
import illustrationEmpty from "../../assets/illustration-empty.svg";

import Controls from "../Controls/Controls";

function InvoiceList() {
  const filteredInvoices = useSelector(selectFilteredInvoices)

  return (
    <>
      <Controls/>
      <div className="invoice-list">
        {filteredInvoices.length > 0 ? (
          filteredInvoices.map((invoice) => (
            <Link to={`/info/${invoice.id}`} key={invoice.id}>
              <Invoice data={invoice} />
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
