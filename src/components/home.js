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
                <div className="main" style={{paddingTop: "39%"}}>
                    <div className="contentMain wow fadeInDown slow data-wow-offset=50">
                    <div className="row">
                        <div className="col-xs col-12 col-md-12">
                            <h1>
                                Layanan Keuangan Digital untuk Kelas Menengah yang Sedang Berkembang
                            </h1>
                            <p>
                            Kami memperkaya kehidupan pelanggan kami dengan mengaktifkan layanan keuangan digital yang terjangkau dan dapat diakses di web sosial dan seluler.
                            </p>
                        </div>
                    </div> 
                    </div>
                </div>
                <div id="tentang" style={{position:"static",top:"-4%"}}></div>
                <div> 
                    <div className="row whoweare">
                        <div className="col-12 col-md-12 mt-5 mb-5" >
                            <h1>Siapa kita?</h1>
                        <p>
                        Kami mengoperasikan tumpukan layanan keuangan digital yang telah terbukti di pasar - mulai dari pembayaran, perdagangan, dan analitik - melayani pelanggan kami secara global
                        </p>
                        </div>
                    </div>
                
                        <Category/>
                    
                        <About/>
                  
                   
                        <Boss/>
                   
                </div>
            </div>
           
        )
    }
}

export default Home