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
    status
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
                  <span>
                    {billFromStreet} 
                  </span>
                  <span>
                    {billFromCity}
                  </span>
                  <span>
                    {billFromPostCode}
                  </span>
                  <span>
                    {billFromCountry}
                  </span>
                </p>
              </div> 
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default InvoiceInfoPage;