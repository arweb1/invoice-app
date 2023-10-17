import './InvoiceInfoPage.scss'

function InvoiceInfoPage() {
  return (
    <>
      <div className="container">
        <div className="full-info_wrapper">
          <div className="goBack-button">
            <button>Go back</button>
          </div>
          <div className="invoice-header">
            <div className="status">
              <p>Status</p>
              <div className='status-icon pending'>
                <p>Pending</p>
              </div>
            </div>
            <div className="buttons">
              <button className="button light">Edit</button>
              <button className="button red">Delete</button>
              <button className="button purple">Mark as Paid</button>
            </div>
          </div>
          <div className="full-info">
            <div className="full-info-header">
              <div className="left-side">
                <p>id</p>
                <p>Graphic Design</p>
              </div>
              <div className="right-side">
                <p>19 Union Terrace
                  London
                  E1 3EZ
                  United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvoiceInfoPage