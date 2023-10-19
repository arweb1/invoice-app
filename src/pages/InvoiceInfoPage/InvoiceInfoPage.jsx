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
                <p className='id'><span>#</span>{id}</p>
                <p className='tag containerTitle'>Graphic Design</p>
              </div>
              <div className="right-side">
                <p className='adress containerTitle'>
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
                <h4 className='containerTitle'>Invoice Date</h4>
                <h3 className='bold'>{invoiceDate}</h3>
              </div>
              <div className="payment-due-container">
                <h4 className='containerTitle'>Payment Due</h4>
                <h3 className='bold'>{}</h3>
              </div>
              <div className="bill-to-container">
                <h4 className='containerTitle'>Bill To</h4>
                <h3 className='bold'>{billToClientsName}</h3>
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
                <h4 className='containerTitle'>Sent To</h4>
                <h3 className='bold'>{billToClientsEmail}</h3>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default InvoiceInfoPage;