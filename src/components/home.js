import React from 'react'
import './../support/css/main.css'
import WOW from 'wow.js'
import Category from './category'
import About from './about'
import Boss from './ourBoss'
class Home extends React.Component{
    componentDidMount() {
        new WOW().init();
    }
    render(){
        return(
            <div>
                <div className="main" style={{paddingTop: "29%"}}>
                    <div className="contentMain wow fadeInDown slow data-wow-offset=50">
                    <div className="row">
                        <div className="col-12 col-md-12">
                            <h1>
                            Digital Financial Services for the Emerging Middle Class
                            </h1>
                            <p>
                            We enrich the lives of our customers by enabling affordable and accessible digital financial services on the social and mobile web.
                            </p>
                        </div>
                    </div> 
                       <div id="aboutAncor" style={{position:"absolute", bottom:"0px",width:"20px"}}>.</div>
                    </div>
                </div>
            
                <div>
                    <div className="row whoweare">
                        <div className="col-12 col-md-12 mt-4 mb-4" >
                            <h1>Who Are We?</h1>
                            <p>We operate a market-proven stack of digital financial services - from payments, commerce and analytics - serving our customers globally.</p>
                        </div>
                    </div>
                    <div className="row">
                        <Category/>
                    </div>
                    <div>
                         <About/>
                    </div>
                    <div id="sejarahAncor">
                        <Boss/>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default Home