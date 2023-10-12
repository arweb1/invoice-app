import arrowRight from '../../assets/icon-arrow-right.svg'

function Invoice({data}) {

    const { billFromCity,
            billFromCountry, 
            billFromCountryCode, 
            billFromStreet, 
            billToCity,
            billToClientsEmail,
            billToClientsName,
            billToCountry,
            billToPostCode,
            billToStreetAdress,
            createdAt} = data;

    console.log(data);

return (
    <div className="single-invoice">
        <div className="single-invoice__id">
            <h3><span>#</span>RT3080</h3>
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
        <div className="single-invoice__status">
            <p>Paid</p>
        </div>
        <img src={arrowRight} alt="arrow-right" />
    </div>
  )
}

export default Invoice 