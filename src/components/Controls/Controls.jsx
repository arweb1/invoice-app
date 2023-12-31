import plusImage from '../../assets/icon-plus.svg'
import arrow from '../../assets/icon-arrow-down.svg';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showForm } from '../../store/form/form-slice';
import { addFilter, removeFilter } from '../../store/form/form-slice';

function Controls() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const activeFilters = useSelector(state => state.form.activeFilters)

  const dispatch = useDispatch();

  const invoiceList = useSelector(state => state.form.invoicesList)

  const handleShowFilters = () => {
    setIsFiltersVisible(!isFiltersVisible)
  }

  const handleFilter = (filterCriteria) => {
    if (!activeFilters.includes(filterCriteria)) {
      dispatch(addFilter(filterCriteria))
    } else {
      dispatch(removeFilter(filterCriteria))
    }
  }

  return (
    <div className="controls">
      <div className="controls-leftside text-content">
        <h2 className='controls-leftside__tag'>Invoices</h2>
        <p className="invoices-counter">There are {invoiceList.length} total invoices</p>
      </div>
      <div className="controls-roghtside">
        <div className="filter-container">
          <div
            onClick={() => handleShowFilters()}
            className={`filter-btn`}
          >
            <p>Filter </p>
            <img
              src={arrow}
              alt="arrow down"
              style={{ transform: isFiltersVisible ? 'rotate(180deg)' : '' }}
            />
          </div>
          <div className={`filter-content ${isFiltersVisible ? 'active' : ''}`}>
            <div className="filter-content-filters">
              <div className="filter-item" >
                <input
                  type="checkbox"
                  id="filterDraft"
                  checked={activeFilters.includes('Draft')}
                  onChange={() => handleFilter('Draft')} // Добавьте обработчик изменения
                />
                <label htmlFor="filterDraft">Draft</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="filterPending"
                  checked={activeFilters.includes('Pending')}
                  onChange={() => handleFilter('Pending')}
                />
                <label htmlFor="filterPending">Pending</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="filterPaid"
                  checked={activeFilters.includes('Paid')}
                  onChange={() => handleFilter('Paid')}
                />
                <label htmlFor="filterPaid">Paid</label>
              </div>
            </div>
          </div>
        </div>
        <button className="new-invoice btn1" onClick={() => dispatch(showForm())}>
          <img src={plusImage} alt="plus" />
          <p>New </p>
        </button>
      </div>
    </div>
  )
}

export default Controls;