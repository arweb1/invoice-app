<div className="billFrom">
            <h2 className='title'>New Invoice</h2>
            <div>
              <h4>Bill From</h4>
              <div className="inputs-fullWidth">
                <div className="input-title">
                  <label htmlFor="billFromStreet" className='label'>Street Adress</label>
                  {errors.billFromStreet && touched.billFromStreet && <p className='error'>{errors.billFromStreet}</p>}
                </div>
                <input
                  className={`input input-fullWidth ${errors.billFromStreet && touched.billFromStreet ? 'input-error' : ''}`}
                  id="billFromStreet"
                  name="billFromStreet"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billFromStreet}
                />
              </div>
            </div>
            <div className="details">
              <div>
                <div className="input-title">
                  <label htmlFor="billFromCity" className='label'>City</label>
                  {errors.billFromCity && touched.billFromCity && <p className='error'>{errors.billFromCity}</p>}
                </div>
                <input
                  className={`input ${errors.billFromCity && touched.billFromCity ? 'input-error' : ''}`}
                  id="billFromCity"
                  name="billFromCity"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billFromCity}
                />
              </div>
              <div>
                <div className="input-title">
                  <label htmlFor="billFromPostCode" className='label'>Post Code</label>
                  {errors.billFromPostCode && touched.billFromPostCode && <p className='error'>{errors.billFromPostCode}</p>}
                </div>
                <input
                  className={`input ${errors.billFromPostCode && touched.billFromPostCode ? 'input-error' : ''}`}
                  id="billFromPostCode"
                  name="billFromPostCode"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billFromPostCode}
                />
              </div>
              <div>
                <div className="input-title">
                  <label htmlFor="billFromCountry" className='label'>Country</label>
                  {errors.billFromCountry && touched.billFromCountry && <p className='error'>{errors.billFromCountry}</p>}
                </div>
                <input
                  className={`input ${errors.billFromCountry && touched.billFromCountry ? 'input-error' : ''}`}
                  id="billFromCountry"
                  name="billFromCountry"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billFromCountry}
                />
              </div>
            </div>
          </div>
          <div className="billTo">
            <h4>Bill To</h4>
            <div className='inputs-fullWidth'>
              <div className="input-title">
                <label htmlFor="billToClientsName" className='label'>Client’s Name</label>
                {errors.billToClientsName && touched.billToClientsName && <p className='error'>{errors.billToClientsName}</p>}
              </div>
              <input
                className={`input input-fullWidth ${errors.billToClientsName && touched.billToClientsName ? 'input-error' : ''}`}
                id="billToClientsName"
                name="billToClientsName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.billToClientsName}
              />
              <div className="input-title">
                <label htmlFor="billToClientsEmail" className='label'>Client’s Email</label>
                {errors.billToClientsEmail && touched.billToClientsEmail && <p className='error'>{errors.billToClientsEmail}</p>}
              </div>
              <input
                className={`input input-fullWidth ${errors.billToClientsEmail && touched.billToClientsEmail ? 'input-error' : ''}`}
                id="billToClientsEmail"
                name="billToClientsEmail"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.billToClientsEmail}
              />
              <div className="input-title">
                <label htmlFor="billToStreetAdress" className='label'>Street Adress</label>
                {errors.billToStreetAdress && touched.billToStreetAdress && <p className='error'>{errors.billToStreetAdress}</p>}
              </div>
              <input
                className={`input input-fullWidth ${errors.billToStreetAdress && touched.billToStreetAdress ? 'input-error' : ''}`}
                id="billToStreetAdress"
                name="billToStreetAdress"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.billToStreetAdress}
              />
            </div>
            <div className="details">
              <div>
                <div className="input-title">
                  <label htmlFor="billToCity" className='label'>City</label>
                  {errors.billToCity && touched.billToCity && <p className='error'>{errors.billToCity}</p>}
                </div>
                <input
                  className={`input ${errors.billToCity && touched.billToCity ? 'input-error' : ''}`}
                  id="billToCity"
                  name="billToCity"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billToCity}
                />
              </div>
              <div>
                <div className="input-title">
                  <label htmlFor="billToPostCode" className='label'>Post Code</label>
                  {errors.billToPostCode && touched.billToPostCode && <p className='error'>{errors.billToPostCode}</p>}
                </div>
                <input
                  className={`input ${errors.billToPostCode && touched.billToPostCode ? 'input-error' : ''}`}
                  id="billToPostCode"
                  name="billToPostCode"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billToPostCode}
                />
              </div>
              <div>
                <div className="input-title">
                  <label htmlFor="billToCountry" className='label'>Country</label>
                  {errors.billToCountry && touched.billToCountry && <p className='error'>{errors.billToCountry}</p>}
                </div>
                <input
                  className={`input ${errors.billToCountry && touched.billToCountry ? 'input-error' : ''}`}
                  id="billToCountry"
                  name="billToCountry"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billToCountry}
                />
              </div>
            </div>
          </div>
          <div className="dates">
            <div>
              <div className="input-title">
                <label htmlFor="date" className='label'>Invoice Date</label>
                {errors.date && touched.date && <p className='error'>{errors.date}</p>}
              </div>
              <input
                className={`input ${errors.date && touched.date ? 'input-error' : ''}`}
                id="date"
                name="date"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
              />
            </div>
            <div>
              <div className="input-title">
                <label htmlFor="date2" className='label'>Payment Terms</label>
                {errors.date2 && touched.date2 && <p className='error'>{errors.date2}</p>}
              </div>
              <input
                className={`input ${errors.date2 && touched.date2 ? 'input-error' : ''}`}
                id="date2"
                name="date2"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date2}
              />
            </div>
          </div>
          <div className="items-list">
            <h3>Item List</h3>
            {productList.map((_, index) => (
              <div className="item-content" key={index}>
                <div className="item-content__name">
                  <div className="input-title">
                    <label htmlFor={`productName[${index}]`} className='label'>Product Name</label>
                    {errors.productName && touched.productName && <p className='error'>{errors.productName[index]}</p>}
                  </div>
                  <input
                    className={`input ${errors.productName && touched.productName ? 'input-error' : ''}`}
                    id={`productName[${index}]`}
                    name={`productName[${index}]`}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productName[index]}
                  />
                </div>
                <div className="item-content__qty">
                  <div className="input-title">
                    <label htmlFor={`productQty[${index}]`} className='label'>Quantity</label>
                    {errors.productQty && touched.productQty && <p className='error'>{errors.productQty[index]}</p>}
                  </div>
                  <input
                    className={`input ${errors.productQty && touched.productQty ? 'input-error' : ''}`}
                    id={`productQty[${index}]`}
                    name={`productQty[${index}]`}
                    type="number"
                    onChange={(e) => handleQtyChange(e, index)}
                    onBlur={handleBlur}
                    value={values.productQty[index]}
                  />
                </div>
                <div className="item-content__price">
                  <div className="input-title">
                    <label htmlFor={`productPrice[${index}]`} className='label'>Product Price</label>
                    {errors.productPrice && touched.productPrice && <p className='error'>{errors.productPrice[index]}</p>}
                  </div>
                  <input
                    className={`input ${errors.productPrice && touched.productPrice ? 'input-error' : ''}`}
                    id={`productPrice[${index}]`}
                    name={`productPrice[${index}]`}
                    type="number"
                    onChange={(e) => handlePriceChange(e, index)}
                    onBlur={handleBlur}
                    value={values.productPrice[index]}
                  />
                </div>
                <div className="item-content__total">
                  <div className="input-title">
                    <label htmlFor={`productTotal[${index}]`} className='label'>Total Price</label>
                    {errors.productTotal && touched.productTotal && <p className='error'>{errors.productTotal[index]}</p>}
                  </div>
                  <input
                    className="input totalPrice"
                    id={`productTotal[${index}]`}
                    name={`productTotal[${index}]`}
                    type="number"
                    value={values.productTotal[index]}
                    readOnly
                  // value={calculateTotal(index)} // Предполагается, что у вас есть функция calculateTotal
                  />
                </div>
                <div className="item-content__remove productRemove" onClick={(e) => removeProduct(index, e)}>
                  <img className="trash" src={trash} alt="trash" />
                </div>
              </div>
            ))}
            <div className="item-list-button">
              <button type="button" onClick={() => addNewProduct()}>+ Add New Item</button>
            </div>
          </div>
          <div className="btns__container">
            <div className="btns__container-content">
              <button type="button" className='button light' onClick={() => dispatch(hideForm())}>Discard</button>
              <div className="">
                <button type="submit" className='button dark' onClick={() => handleStatusChange('Draft')}>Save as Draft</button>
                <button type="submit" className='button purple' onClick={() => handleStatusChange('Pending')}>Save & Send</button>
              </div>
            </div>
          </div>