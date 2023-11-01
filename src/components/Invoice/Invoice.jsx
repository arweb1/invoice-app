import arrowRight from '../../assets/icon-arrow-right.svg';

import { useSelector } from 'react-redux';

function Invoice({data, productPrices, productQty}) {
    
    
    const { id,
            billToClientsName,
            createdAt,
            status} = data;

const calculateAmount = productPrices.reduce((total, price, index) => {
    return total + (price * productQty[index])
}, 0)

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
            <span>$ {calculateAmount}</span>
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