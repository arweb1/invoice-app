import arrowRight from '../../assets/icon-arrow-right.svg'

function Invoice() {
  return (
    <div className="single-invoice">
        <div className="single-invoice_id">
            <h3><span>#</span>RT3080</h3>
        </div>
        <div className="single-invoice_date">
            <span>Due 19 Aug 2021</span>
        </div>
        <div className="single-invoice_name">
            <p>Jensen Huang</p>
        </div>
        <div className="single-invoice_value">
            <span>£ 1,800.90</span>
        </div>
        <div className="single-invoice_status">
            <p>Paid</p>
        </div>
        <img src={arrowRight} alt="arrow-right" />
    </div>
  )
}

export default Invoice