import React from 'react'
import './../support/css/main.css'
import WOW from 'wow.js'
import About from './about'
import Boss from './ourBoss'
import Asira from './asira'
import Problem from './problem'
import BackgroundStory from './background'
import Awards from './awards'
class Home extends React.Component{
    componentDidMount() {
        new WOW().init();
    }
    render(){
        return(
            <div>
                <div className="main" style={{paddingTop: "25%"}}>
                <div id="home" style={{top:"0",position:"absolute"}}></div>
                    <div className="contentMain wow fadeInDown slow data-wow-offset=50">
                    <div className="row">
                        <div className="col-xs col-12 col-md-12">
                            <h1>
                                Layanan Keuangan Digital untuk Semua Bidang Usaha
                            </h1>
                            <p>
                            Kami memperkaya kehidupan pelanggan kami dengan mengaktifkan layanan keuangan digital yang terjangkau dan dapat diakses di web sosial dan seluler.
                            </p>
                        </div>
                    </div> 
                    </div>
                </div>
                <div id="tentang" style={{height:"70px"}}></div>
                <div> 
                        <BackgroundStory/>
                        <About/>
                <div id="keunggulan" style={{height:"70px"}}></div>
                        <Problem/>
                        <Asira/>
                <div id="founder" style={{height:"70px"}}></div>
                        <Boss/>      
                <div id="penghargaan" style={{height:"70px"}}></div>

                        <Awards/>
                </div>
            </div>
           
        )
    }
}

export default Home