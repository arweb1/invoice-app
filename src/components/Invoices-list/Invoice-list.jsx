import React from "react";
import { Link } from "react-router-dom";
import Invoice from "../Invoice/Invoice";
import { useDispatch, useSelector } from "react-redux";
import illustrationEmpty from "../../assets/illustration-empty.svg";

import Controls from "../Controls/Controls";

function InvoiceList() {
  const invoicesList = useSelector((state) => state.form.invoicesList);

  return (
    <>
      <Controls/>
      <div className="invoice-list">
        {invoicesList.length > 0 ? (
          invoicesList.map((invoice) => (
            <Link to={`/edit/${invoice.id}`} key={invoice.id}>
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
