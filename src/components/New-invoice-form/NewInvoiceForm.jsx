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
          // Другие поля
        }}
        onSubmit={handleSubmit}
      >
          <Form className="form">
          <h3 className='newInvoiceForm__title'>Edit <span>#</span>XM9141</h3>
            <h4 className='newInvoiceForm__block-title'>Bill From</h4>
            <div className='street'>
              <label htmlFor="street">Street Address</label>
              <Field type="text" id="street" name="street" />
            </div>
            <div className="__adress-details">
              <div>
                <label htmlFor="city">City</label>
                <Field type="text" id="city" name="city" />
              </div>
              <div>
                <label htmlFor="postalCode">Post Code</label>
                <Field type="text" id="postalCode" name="postalCode" />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <Field type="text" id="country" name="country" />
              </div>
            </div>
            <h4 className='newInvoiceForm__block-title'>Bill To</h4>
            <div>
              <label htmlFor="clientName">Client Name</label>
              <Field type="text" id="clientName" name="clientName" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
            </div>
            <div className='street'>
              <label htmlFor="street">Street Address</label>
              <Field type="text" id="street" name="street" />
            </div>
            <div className="__adress-details">
              <div>
                <label htmlFor="city">City</label>
                <Field type="text" id="city" name="city" />
              </div>
              <div>
                <label htmlFor="postalCode">Post Code</label>
                <Field type="text" id="postalCode" name="postalCode" />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <Field type="text" id="country" name="country" />
              </div>
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
