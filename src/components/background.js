import React from 'react'
import WOW from 'wow.js'

import './../support/css/background.css'
class BackgroundStory extends React.Component{
    componentDidMount() {
        new WOW().init();
    }
    render(){
        return(
            <div className="container-fluid backgroundstory text-left mt-5 wow fadeIn">
                    <h1>Latar Belakang</h1>

                <div className="row mt-5">
                    <div className="col-xs col-md-6 col-12">
                        <ul>
                            <li>
                                <b>PT. AYANNAH SOLUSI NUSANTARA </b>melalui <b>ASIRA</b>, hadir guna menjadi jembatan
                                dan jawaban bagi <b>BANK</b> sehingga bisa kompetitif, adaptif & bertransformasi menghadapi
                                tantangan yang ada dengan berkolaborasi bersama melalui produk kami <b>ASIRA</b>.
                            </li>
                            
                            
                          
                        </ul>
                    </div>
                    <div className="col-xs col-md-6 col-12">
                    <ul>
                        <li>
                            Kehadiran <b>ASIRA</b> dapat menjadi solusi bagi bank untuk dapat mempermudah bank guna menyalurkan
                            kebutuhan kredit bagi nasabah, sesuai dengan tingginya kebutuhan pembiayaan, terutama bagi mereka yang 
                            masuk di dalam segmen unbanked dan juga pelaku Usaha Mikro, Kecil, dan Menengah, hal ini juga sesuai dengan
                            data dari OJK, sampai bulan Januari 2019, penyaluran pinjaman fintect mencapai <b>Rp 25,92 triliun.</b> 
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BackgroundStory