import Invoice from "../Invoice/Invoice"
import { useDispatch, useSelector } from "react-redux";

function InvoiceList() {
  const invoicesList = useSelector(state => state.form.invoicesList);
  console.log(invoicesList)

  return (
    <div className='invoice-list'>
        {invoicesList.map(invoice => (
          <Invoice data={invoice}/>
        ))}
    </div>
  )
}

export default InvoiceList