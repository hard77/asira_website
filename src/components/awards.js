import React from 'react'
import Google from './../support/img/googleLunchPad.png'
import './../support/css/award.css'
import p1 from './../support/img/1.jpeg'
import p2 from './../support/img/2.jpeg'
import p3 from './../support/img/3.jpeg'
import p4 from './../support/img/4.jpeg'
import p5 from './../support/img/5.jpeg'
import AyannahPromote from './../support/img/AyannahPromote.png'
import WOW from 'wow.js'

class Awards extends React.Component{
    componentDidMount() {
        new WOW().init();
    }
    render(){
        return(
            <div className="container-fluid awards">
                 <div className="row">
                    <div className="col-12 col-md-12 col-xs text-left mt-5">
                          <h1>Penghargaan International</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs col col-md-6" >
                    <img src={Google} width="80%" alt="Google"/>
                    <p className="text-right">Ayannah terpilih sebagai salah satu startup dengan pertumbuhan teratas dari 
                    ribuan aplikasi (50 negara) untuk bergabung dengan Program Akselerator Launchpad
                    Google</p>
                    <p className="text-right"><b>Roy Glasberg, Global Lead, Google Developers Launchpad</b> </p>
                         
                    </div>
                    <div className="col-xs col col-md-6 mt-5">
                    <h5 style={{ borderLeft:"2px solid #ED433C",color:"#ED433C",paddingLeft:"10px"
                    }}>PENCAPAIAN</h5>
                         <ul>
                             <li><b>2017</b> Visa Global Fintech Finals Winner</li>
                             <li><b>2017</b> The Asian Banker "Remittance Inititive of the Year"</li>
                             <li><b>2017</b> ASEAN Rice Bowl "Philipine Start Up of the Year"
                             </li>
                             <li><b>2017</b> IFC Top 100 Fintech Companies Spurring Financial Inclusion</li>
                         </ul>

                        <h5 style={{ borderLeft:"2px solid #ED433C",color:"#ED433C",paddingLeft:"10px"
                    }}>DITAMPILKAN</h5>

                        <div className="row">
                            <div className="col-md-12 col-xs col-12">
                                <img src={p1}  width="15%" className="ml-2" alt="NIKEI"/>
                                <img src={p2}  width="15%" className="mr-4 ml-4" alt="techinasia"/>
                                <img src={p3}  width="15%" className="mr-4 ml-4" alt="TECHCRUNCH"/>
                                <img src={p4}  width="15%" className="mr-4 ml-4" alt="Bloomberg"/>
                                <img src={p5}  width="15%" alt="Forbes"/>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-12 col-xs text-left mt-5">
                    
                <h1>100 Perusahaan Fintech yang Mempromosikan Inklusi Keuangan di Era Digital</h1>

                    </div>
                </div>
                <div className="row container-fluid mt-5 slideInUp wow">
                    <div className="col-12 col-md-12 text-center col-xs mt-5">
                    <img src={AyannahPromote} width="75%" alt="Promote"/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Awards