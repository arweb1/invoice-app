import plusImage from '../../assets/icon-plus.svg'

import { useDispatch, useSelector } from 'react-redux';
import { showForm } from '../../store/form/form-slice';


function Controls() {
  const dispatch = useDispatch();

  const invoiceList = useSelector(state => state.form.invoicesList)
  
console.log(invoiceList);
  return (
    <div className="controls">
        <div className="controls-leftside text-content">
            <h2 className='controls-leftside__tag'>Invoices</h2>
            <p className="invoices-counter">There are {invoiceList.length} total invoices</p>
        </div>
        <div className="controls-roghtside">
            <div className="filter">Filter by status</div>
            <button className="new-invoice btn1" onClick={() => dispatch(showForm())}>
                <img src={plusImage} alt="plus" />
                <p>New Invoice</p>
            </button>
        </div>
    </div>
  )
}

export default Controls;




