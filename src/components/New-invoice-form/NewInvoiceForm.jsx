import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { hideForm } from '../../store/form/form-slice';
import * as Yup from "yup";

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
      document.removeEventListener('cl ick', handleOutsideClick);
    };
  }, [isFormVisible, dispatch]);

  // Функция для обработки отправки формы
  const handleSubmit = (values) => {
    console.log('Form submitted with values:', values);
    dispatch(hideForm());
  };

  if (isFormVisible) {
    return (
      <div className="newInvoiceForm">
        <Formik
        initialValues={{
          street: '',
          city: '',
          postalCode: '',
          country: '',
          clientName: '',
          email: '',
          
        }}
        onSubmit={handleSubmit}
      >
          <Form className="form">
          <h3 className='newInvoiceForm__title'>Edit <span>#</span>XM9141</h3>
            <h4 className='newInvoiceForm__block-title'>Bill From</h4>
            <div className='street'>
              <label htmlFor="street">Street Address</label>
              <Field type="text" id="street" name="street" className="input full-width-input" placeholder="Street"/>
            </div>
            <div className="__adress-details">
              <div>
                <label htmlFor="city">City</label>
                <Field type="text" id="city" name="city" className="input"/>
              </div>
              <div>
                <label htmlFor="postalCode">Post Code</label>
                <Field type="text" id="postalCode" name="postalCode" className="input"/>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <Field type="text" id="country" name="country" className="input"/>
              </div>
            </div>
            <h4 className='newInvoiceForm__block-title'>Bill To</h4>
            <div className="__client-details">
              <div>
                <label htmlFor="clientName">Client Name</label>
                <Field type="text" id="clientName" name="clientName" className="input"/>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" className="input"/>
              </div>
              <div className='street'>
                <label htmlFor="street">Street Address</label>
                <Field type="text" id="street" className="input full-width-input" name="street" />
              </div>
            </div>
            <div className="__adress-details">
              <div>
                <label htmlFor="city">City</label>
                <Field type="text" id="city" name="city" className="input"/>
              </div>
              <div>
                <label htmlFor="postalCode">Post Code</label>
                <Field type="text" id="postalCode" name="postalCode" className="input"/>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <Field type="text" id="country" name="country" className="input"/>
              </div>
            </div> 
            <div className="__date-details">
              <div>
                <label>Invoice Date</label>
                <Field type="date" id="invoice-date" name="invoice-date" className="input"/>
              </div>
              <div></div>
            </div>
            
            <div className="__date-details">
              
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
