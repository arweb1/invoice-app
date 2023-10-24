import './InvoiceInfoPage.scss'

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeInvoice, toggleStatus } from '../../store/form/form-slice';

import ModalWindow from '../../components/Modal-window/Modal-window';
 
function InvoiceInfoPage() {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const invoicesList = useSelector(state => state.form.invoicesList);

  const goBackPage = () => {
    navigate(-1)
  };

  const [isInvoiceRemoved, setIsInvoiceRemoved] = useState(false);

  useEffect(() => {
    if(isInvoiceRemoved){
      goBackPage()
    }
  }, [isInvoiceRemoved, navigate])
  
  const { id } = useParams();
  const currentInvoice = invoicesList.find(invoice => invoice.id === id);

  if (!currentInvoice) {
    return null;
  }

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

  

  const handleRemoveInvoice = (id) => {
    dispatch(removeInvoice(id))
    setIsInvoiceRemoved(true)
  }

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id))
  }


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
              <div className={`status-icon ${status.toLowerCase()}`}>
                <p>{status}</p>
              </div>
            </div>
            <div className="buttons">
              <button className="button light">Edit</button>
              <button className="button red" onClick={() => setModalActive(true)}>Delete</button>
              <button className="button purple" onClick={() => handleToggleStatus(id)}>Mark as Paid</button>
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
        <ModalWindow active={modalActive} setActive={setModalActive}>
          <h3>Confirm Deletion</h3>
          <p>Are you sure you want to delete invoice <span>#{id}</span>? This action cannot be undone.</p>
          <div className="btns">
            <button className='button red' onClick={() => handleRemoveInvoice(id)}>Delete</button>
            <button className='button light' onClick={() => setModalActive(false)}>Cancel</button>
          </div>
        </ModalWindow>
      </div>
    </>
  )
}

export default InvoiceInfoPage;