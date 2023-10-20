import arrowRight from '../../assets/icon-arrow-right.svg'

function Invoice({data}) {

    const { id,
            billToClientsName,
            createdAt,
            status} = data;
    // console.log(data);
return (
    <div className="single-invoice">
        <div className="single-invoice__id">
            <h3 style={{textTransform: 'uppercase'}}><span>#</span>{id}</h3>
        </div>
        <div className="single-invoice__date">
            <span>{createdAt}</span>
        </div>
        <div className="single-invoice__name">
            <p>{billToClientsName}</p>
        </div>
        <div className="single-invoice__value">
            <span>£ 1,800.90</span>
        </div>
        <div className={`single-invoice__status status-icon ${status.toLowerCase()}`}>
            <p>{status}</p>
        </div>
        <div className="single-invoice__arrow">
            <img src={arrowRight} alt="arrow-right" />
        </div>
    </div>
  )
}

export default Invoice 