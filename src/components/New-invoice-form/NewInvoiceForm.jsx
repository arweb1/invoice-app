import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { hideForm } from '../../store/form/form-slice';

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

  // Функция для обработки отправки формы
  const handleSubmit = (values) => {
    console.log('Form submitted with values:', values);
    dispatch(hideForm());
  };

  if (isFormVisible) {
    return (
      <div className="newInvoiceForm">
        <Formik initialValues={{}} onSubmit={handleSubmit}>
          <Form className="form">
            <div>
              <label htmlFor="street">Street</label>
              <Field type="text" id="street" name="street" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <Field type="text" id="city" name="city" />
            </div>
            <div>
              <label htmlFor="postalCode">Postal Code</label>
              <Field type="text" id="postalCode" name="postalCode" />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <Field type="text" id="country" name="country" />
            </div>
            <div>
              <label htmlFor="clientName">Client Name</label>
              <Field type="text" id="clientName" name="clientName" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
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
