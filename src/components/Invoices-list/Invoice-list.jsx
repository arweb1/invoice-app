import Invoice from "../Invoice/Invoice"

function InvoiceList() {
  return (
    <div className='invoice-list'>
        <Invoice/>
        <Invoice/>
        <Invoice/>
    </div>
  )
}

export default InvoiceList