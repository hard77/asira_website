import React from 'react'
import './../support/css/footer.css'

import facebook from './../support/img/icons/facebook.png'
// import twitter from './../support/img/icons/twitter2.png'
import linkedin from './../support/img/icons/linkedin.png'





class Footer extends React.Component {
    render() {
        return (
        <footer  id="footer"  className="page-footer font-small special-color-dark pt-4">
          <hr></hr>
        <div className="container-fluid">
          <div className="row">
             
              <div className="col-md-6 col-xs-12 col-12 mt-3">
                      
                        
                  <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
                  <img src={facebook} width="5%" alt="facebook"></img>
                  </a>   
                  {/* <a href="http://www.twitter.com" rel="noopener noreferrer" target="_blank"> 
                      <img src={twitter} className="ml-3 mr-3" width="5%" alt="twitter"></img>
                  </a> */}
                <a href="http://www.linked.com" rel="noopener noreferrer" target="_blank">
                    <img src={linkedin} className="ml-3" width="5%" alt="twitter"></img>
                </a>
              </div>
              <div className="col-md-6 col-xs-12 col-12 text-right">
                      
              <p className=" text-right"> Noble House, Lantai 29<br/>
               +6221 50645098<br/>
               Jalan Dr.Ide Anak Agung Gde Agung Kav. E 4.2, RT.5/RW.2, Kuningan<br/>
              Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950 </p>
              </div>
          </div>
          <div className="footer-copyright text-center py-3">© 2019 - Ayannah Solusi Nusantara
          </div>
        </div>
        
      </footer>
        )
    }
}

export default Footer