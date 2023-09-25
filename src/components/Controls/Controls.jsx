import plusImage from '../../assets/icon-plus.svg'

function Controls() {
  return (
    <div className="controls">
        <div className="controls-leftside text-content">
            <h2>Invoices</h2>
            <p className="invoices-counter">There are 7 total invoices</p>
        </div>
        <div className="controls-roghtside">
            <div className="filter">Filter by status</div>
            <button className="new-invoice btn1">
                <img src={plusImage} alt="plus" />
                <p>New Invoice</p>
            </button>
        </div>
    </div>
  )
}

export default Controls;