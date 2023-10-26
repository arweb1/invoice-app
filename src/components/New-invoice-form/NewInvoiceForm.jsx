import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { hideForm, addInvoice } from '../../store/form/form-slice';
import * as Yup from "yup";

import './NewInvoiceForm.scss';
import trash from '../../assets/icon-delete.svg'

function NewInvoiceForm() {
  const [productCount, setProductCount] = useState(1);
  const [products, setProducts] = useState([
    { productName: '', productQty: 0, productPrice: 0, productTotal: 0 },
  ]);
  const [productData, setProductData] = useState([])

  const isFormVisible = useSelector((state) => state.form.isFormVisible);
  const dispatch = useDispatch();

  const handleOutsideClick = (e) => {
    if (isFormVisible) {
      const modal = document.querySelector('.form');
      const btn = document.querySelector('.btn1');
      
      if (modal && !modal.contains(e.target) && !btn.contains(e.target)) {
        dispatch(hideForm());
      }
    }
  };
  

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isFormVisible, dispatch]);

  const productList = Array.from({ length: productCount })

  const addNewProduct = () => {
    setProductCount(productCount + 1);
  }

  const removeProduct = (idToRemove, e) => {
    e.stopPropagation()
    const updatedList = [...productList];
    updatedList.splice(idToRemove, 1);
    setProductCount(productCount - 1);
    // If you want to update the productList, you may need to set it here.
    // setProductList(updatedList);
  }
  

  
  const calculateTotal = (qty, price) => {
    return qty * price
  } 


  if (isFormVisible) {
    return (
      <div className='newInvoiceForm'>
        <Formik
          initialValues={{
            billFromStreet: '',
            billFromCity: '',
            billFromPostCode: '',
            billFromCountry: '',
            qty: '',
            price: ''
          }}
          onSubmit={async (values, actions) => {
            // Обработка отправки данных формы
            dispatch(addInvoice(values))
          }}
        >
          <Form className="form">
            <div className="billFrom">
              <h2 className='title'>New Invoice</h2>
              <div>
                <h4>Bill From</h4>
                <label htmlFor="billFromStreet" className='label'>Street Adress</label>
                <Field className="input input-fullWidth" id="billFromStreet" name="billFromStreet" type="text" />
              </div>
              <div className="details">
                <div>
                  <label htmlFor="billFromCity" className='label'>City</label>
                  <Field className="input" id="billFromCity" name="billFromCity" type="text" />
                </div>
                <div>
                  <label htmlFor="billFromPostCode" className='label'>Post Code</label>
                  <Field className="input" id="billFromPostCode" name="billFromPostCode" type="text" />
                </div>
                <div>
                  <label htmlFor="billFromCountry" className='label'>Country</label>
                  <Field className="input" id="billFromCountry" name="billFromCountry" type="text" />
                </div>
              </div>
            </div>
            <div className="billTo">
              <h4>Bill To</h4>
              <div className='inputs-fullWidth'>
                <label htmlFor="billToClientsName" className='label'>Client’s Name</label>
                <Field className="input input-fullWidth" id="billToClientsName" name="billToClientsName" type="text" />

                <label htmlFor="billToClientsEmail" className='label'>Client’s Email</label>
                <Field className="input input-fullWidth" id="billToClientsEmail" name="billToClientsEmail" type="email" />

                <label htmlFor="billTo" className='label'>Street Adress</label>
                <Field className="input input-fullWidth" id="billToStreetAdress" name="billToStreetAdress" type="text" />
              </div>
              <div className="details">
                <div>
                  <label htmlFor="billTo" className='label'>City</label>
                  <Field className="input" id="billToCity" name="billToCity" type="text" />
                </div>
                <div>
                  <label htmlFor="billTo" className='label'>Post Code</label>
                  <Field className="input" id="billToPostCode" name="billToPostCode" type="text" />
                </div>
                <div>
                  <label htmlFor="billTo" className='label'>Country</label>
                  <Field className="input" id="billToCountry" name="billToCountry" type="text" />
                </div>
              </div>
            </div>
            <div className="dates">
              <div>
                <label htmlFor="invoiceDate" className='label'>Invoice Date</label>
                <Field className="input" type="date" id='date' />
              </div>
              <div>
                <label htmlFor="invoiceDate" className='label'>Invoice Date</label>
                <Field className="input" type="date" id='date2' />
              </div>
            </div>
            <div className="items-list">
              <h3>Item List</h3>
              {productList.map((_, index) => (
                <div className="item-content" key={index}>
                  <div className="item-content__name">
                    <p>Item Name</p>
                    <Field className="input" name={`productName[${index}]`} type="text" />
                  </div>
                  <div className="item-content__qty">
                    <p>Qty.</p>
                    <Field className="input" name={`productQty[${index}]`} type="number" />
                  </div>
                  <div className="item-content__price">
                    <p>Price</p>
                    <Field className="input" name={`productPrice[${index}]`} type="number" />
                  </div>
                  <div className="item-content__total">
                    <p>Total</p>
                    <Field className="input total" name={`productTotal[${index}]`} readOnly type="number" />
                  </div>
                  <div className="item-content__remove productRemove" onClick={(e) => removeProduct(index, e)}>
                    <img className="trash" src={trash} alt="trash" />
                  </div>
                </div>
              ))}
              <div className="item-list-button">
                <button type="button" onClick={() => addNewProduct()}>+ Add New Item</button>
              </div>
            </div>
            <div className="btns__container">
              <button type="button" className='button light' onClick={() => dispatch(hideForm())}>Discard</button>
              <div className="">
                <button type="submit" className='button dark'>Save as Draft</button>
                <button type="submit" className='button purple'>Save & Send</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div >
    );
  }
  return null;
}

export default NewInvoiceForm;
