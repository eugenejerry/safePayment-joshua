// 'use strict';
// import './style.css'


let api = {
    1: {
        payment_type:""
    }
}


class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            appVersion: ''
        }
    }
    render() {
      return(
          <div>
              {/* Adding the payment component below. Beware */}

              <div className="money-send">

                  <div className="calculator-inner">

                    <div className="single-cal">
                        <div className="inner-form">
                            <form>
                                <label>Select your Payment</label>
                                <select className="form-select" className="form-input" aria-label="Default select example">
                                <option selected>School Fees(Private Schools)</option>
                                <option value="1">Plateau Health Subscription</option>
                                <option value="2">ESUT Payments</option>
                                <option value="3"> ESCET Payments</option>
                                <option value="4"> IMT Payments</option>
                                <option value="5"> GOUNI Payments</option>
                                <option value="6"> SafePay Topup</option>
                                </select>
                            </form>
                        </div>

                        <div className="inner-form">
                            <form>
                                <label style={{marginTop: "10px"}}>Reference Number</label>
                                <input style={{color: "black"}} className="form-input" type="number" placeholder="Reference Number"/>
                            </form>
                        </div>

                        <div className="inner-form">
                            <form>
                                <label style={{marginTop: "10px"}}>Phone Number</label>
                                <input style={{color: "black"}} className="form-input" type="tel" placeholder="Phone Number"/>
                            </form>
                        </div>

                        <div className="inner-form-text">
                            <span> You are about to pay <strong>N3,500 </strong>for EZICHI OGO being BECE fees Exchange rate</span>

                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="dropdowncheck"/>
                            <label className="form-check-label" for="dropdownCheck"> Send me the payment reference</label>
                            
                        </div>

                        <input type="number" className="form-control" id="text" placeholder="Enter Phone Number" style={{display:"none"}} />
                        <button className="cale-btn" disabled={true}>Continue</button>

                        <div className="terms-text">
                            <p>By clicking continue, I am agree with <a href="#">Terms & Policy</a></p>
                        </div>

                         

                    </div>
                  </div>



              </div>
          </div>
      )
    }
  }
  
  ReactDOM.render(
    <Hello/>, document.getElementById('payment-comp')
  );