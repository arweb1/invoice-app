import './InvoiceInfoPage.scss'

import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
 
function InvoiceInfoPage() {
  const invoicesList = useSelector(state => state.form.invoicesList);

  const { id } = useParams();
  const currentInvoice = invoicesList.find(invoice => invoice.id === id);
  const {
    billFromCity,
    billFromCountry,
    billFromPostCode,
    billFromStreet,
    billToCity,
    billToClientsEmail,
    billToClientsName,
    billToCountry,
    billToPostCode,
    billToStreetAdress,
    createdAt,
    status,
    invoiceDate
  } = currentInvoice;

  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1)
  };
  
  return (
    <>
      <div className="container">
        <div className="full-info_wrapper">
          <div className="goBack-button">
            <button onClick={goBackPage}>Go back</button>
          </div>
          <div className="invoice-header">
            <div className="status">
              <p>Status</p>
              <div className='status-icon pending'>
                <p>Pending</p>
              </div>
            </div>
            <div className="buttons">
              <button className="button light">Edit</button>
              <button className="button red">Delete</button>
              <button className="button purple">Mark as Paid</button>
            </div>
          </div>
          <div className="full-info">
            <div className="full-info-header">
              <div className="left-side">
                <p className='id'>#{id}</p>
                <p className='tag'>Graphic Design</p>
              </div>
              <div className="right-side">
                <p className='adress'>
                  <br />
                    {billFromStreet} 
                  <br />
                    {billFromCity}
                  <br />                 
                    {billFromPostCode}
                  <br />
                    {billFromCountry}
                </p>
              </div> 
              <div className="invoice-date-container">
                <h4>Invoice Date</h4>
                {invoiceDate}
              </div>
              <div className="payment-due-container">
                <h4>Payment Due</h4>
                
              </div>
              <div className="bill-to-container">
                <h4>Bill To</h4>
                {billToClientsName}
                <br />
                  {billFromStreet} 
                <br />
                  {billFromCity}
                <br />                 
                  {billFromPostCode}
                <br />
                  {billFromCountry}
              </div>
              <div className="sent-to-container">
                <h4>Sent To</h4>
                {billToClientsEmail}
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default InvoiceInfoPage;