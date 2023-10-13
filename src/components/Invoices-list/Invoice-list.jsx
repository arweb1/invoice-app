import Invoice from "../Invoice/Invoice"
import { useDispatch, useSelector } from "react-redux";

import illustrationEmpty from '../../assets/illustration-empty.svg'

function InvoiceList() {
  const invoicesList = useSelector(state => state.form.invoicesList);
  

  return (
    <div className='invoice-list'>
        {invoicesList.length > 0 ? invoicesList.map(invoice => (
          <Invoice data={invoice}/>
        )) : <img src={illustrationEmpty} style={{display: 'flex', justifyContent: 'center'}}></img>}
    </div>
  )
}

export default InvoiceList