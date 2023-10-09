import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { hideForm } from '../../store/form/form-slice';
import * as Yup from "yup";

import './NewInvoiceForm.scss'

function NewInvoiceForm() {
  const isFormVisible = useSelector((state) => state.formVisible.isFormVisible);
  const dispatch = useDispatch();

  const handleOutsideClick = (e) => {
    if (isFormVisible) {
      const modal = document.querySelector('.form');
      const btn = document.querySelector('.btn1')
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

  if (isFormVisible) {
    return (
      <div className='newInvoiceForm'>
        <Formik
          initialValues={{
            billFromStreet: '',
            billFromCity: '',
            billFromPostCode: '',
            billFromCountry: ''
          }}
          onSubmit={async (values, actions) => {
            // Обработка отправки данных формы
            console.log(values);
          }}
        >
          <Form className="form">
            <div className="billFrom">
              <div>
                <label htmlFor="billFromStreet">Street Adress</label>
                <Field className="input input-fullWidth" id="billFromStreet" name="billFromStreet" type="text" />
              </div>
              <div className="details">
                <div>
                  <label htmlFor="billFromCity">City</label>
                  <Field className="input" id="billFromCity" name="billFromCity" type="text" />
                </div>
                <div>
                  <label htmlFor="billFromPostCode">Post Code</label>
                  <Field className="input" id="billFromPostCode" name="billFromPostCode" type="text" />
                </div>
                <div>
                  <label htmlFor="billFromCountry">Country</label>
                  <Field className="input" id="billFromCountry" name="billFromCountry" type="text" />
                </div>
              </div>
            </div>
            <div className="billTo">
              <div className='inputs-fullWidth'>
                <label htmlFor="billToClientsName">Client’s Name</label>
                <Field className="input input-fullWidth" id="billToClientsName" name="billToClientsName" type="text" />

                <label htmlFor="billToClientsEmail">Client’s Email</label>
                <Field className="input input-fullWidth" id="billToClientsEmail" name="billToClientsEmail" type="email" />

                <label htmlFor="billTo">Street Adress</label>
                <Field className="input input-fullWidth" id="billToStreetAdress" name="billToStreetAdress" type="text" />
              </div>
              <div className="details">
                <div>
                  <label htmlFor="billTo">City</label>
                  <Field className="input" id="billToCity" name="billToCity" type="text" />
                </div>
                <div>
                  <label htmlFor="billTo">Post Code</label>
                  <Field className="input" id="billToPostCode" name="billToPostCode" type="text" />
                </div>
                <div>
                  <label htmlFor="billTo">Country</label>
                  <Field className="input" id="billToCountry" name="billToCountry" type="text" />
                </div>
              </div>
            </div>
            <div className="dates">
              <div>
                <label htmlFor="invoiceDate">Invoice Date</label>
                <Field className="input" type="date" id='date' />
              </div>
              <div>
                <label htmlFor="invoiceDate">Invoice Date</label>
                <Field className="input" type="date" id='date2' />
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
  return null;
}

export default NewInvoiceForm;
