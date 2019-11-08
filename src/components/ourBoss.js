import React from 'react'
import WOW from 'wow.js'

import CEO from './../support/img/founder.jpg'
import CMD from './../support/img/ian2.jpg'
import './../support/css/ourboss.css'
class Boss extends React.Component{
    componentDidMount() {
        new WOW().init();
    }
    render(){
        return(
            <div className="container-fluid ourBoss fadeInUp wow">
                    <div className="row mt-3 mb-5">
                        <div className="col-12 col-md-6 ">
                            <h3 className="text-left">Chief Executive Officer (CEO)
                            <p className="text-left" style={{color:"black"}}>Mikko Perez</p>
                            </h3>
                            <div className="row mt-5">
                                <div className="col-6 col-md-6 col-xs-6">
                                <center>
                                <img src={CEO} width="100%" alt="CEO"></img>
                                </center>  
                                </div>
                                <div className="col-6 col-md-6 col-xs-6">
                                <ul>
                                    <li>20+ tahun pengalaman dalam membangun dan menumbuhkan usaha start up yang sukses</li>
                                    <li>Memulai karir sebagai pengatur komunitas di pedesaan Filipina </li>
                                    <li>TOP 100 Pimpinan Fintech di Asia Pasific </li>
                                    <li>Mikko memulai Ayannah untuk menggabungkan pengalamannya dalam keuangan dan teknologi untuk membangun bisnis yang menguntungkan dan scalable yang dapat berdampak pada kehidupan jutaan orang.</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 className="text-left">Country Managing Director - INDONESIA
                                <p className="text-left" style={{color:"black"}}>Adrian Lorenzo</p>
                            </h3>
                            <div className="row mt-5">
                                <div className="col-6 col-md-6 col-xs-6">
                                <center>
                                <img src={CMD} width="100%" alt="CEO"></img>
                                </center>  
                                </div>
                                <div className="col-6 col-md-6 col-xs-6">
                                    <ul>
                                        <li>Penilaian Ekuitas (Saham dan Investasi)</li>
                                        <li>Merger dan Akuisisi (Investasi Perbankan) </li>
                                        <li>Anggota masyarakat aktuaris (Asuransi)</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        )
    }
}

export default Boss