import './InvoiceInfoPage.scss'

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeInvoice, toggleStatus, setTotalAmount } from '../../store/form/form-slice';

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
    if (isInvoiceRemoved) {
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
    invoiceDate,
    productName,
    productPrice,
    productQty
  } = currentInvoice;

  const calculateItemTotal = (qty, price) => {
    return qty * price
  }

  const calculateTotalAmount = () => {
    return productName.reduce((total, _, index) => {
      const qty = productQty[index];
      const price = productPrice[index];
      const itemTotal = qty * price;
      return total + itemTotal;
    }, 0);
  }

  // dispatch(setTotalAmount(calculateTotalAmount()))

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
              <p className='satus-title'>Status</p>
              <div className={`status-icon ${status.toLowerCase()}`}>
                <p>{status}</p>
              </div>
            </div>
            <div className="buttons btns-desktop">
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
                <h3 className='bold'>{ }</h3>
              </div>
              <div className="bill-to-container">
                <h4 className='containerTitle'>Bill To</h4>
                <h3 className='bold'>{billToClientsName}</h3>
                <br />
                {billToStreetAdress}
                <br />
                {billToCity}
                <br />
                {billToPostCode}
                <br />
                {billToCountry}
              </div>
              <div className="sent-to-container">
                <h4 className='containerTitle'>Sent To</h4>
                <h3 className='bold'>{billToClientsEmail}</h3>
              </div>
            </div>
            <div className="total">
              <div className="total-container">
                <p className='label-name thin-text'>Item Name</p>
                <p className='label-qty thin-text'>Qty.</p>
                <p className='label-price thin-text'>Price</p>
                <p className='label-total thin-text'>Total</p>
                {productName.map((product, index) => (
                  <div className="total-item">
                    <p className='name bold-text'>{product}</p>
                    <p className='qty thin-text'>{productQty[index]}</p>
                    <p className='price thin-text'>{productPrice[index]}</p>
                    <p className='total-price bold-text'>$ {calculateItemTotal(productQty[index], productPrice[index])}</p>
                  </div>
                ))}
              </div>
              <div className="grand-total">
                <p>Amount Due</p>
                <span>$ {calculateTotalAmount()}</span>
              </div>
            </div>
          </div>

          <div className="buttons btns-mobile">
            <button className="button light">Edit</button>
            <button className="button red" onClick={() => setModalActive(true)}>Delete</button>
            <button className="button purple" onClick={() => handleToggleStatus(id)}>Mark as Paid</button>
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

