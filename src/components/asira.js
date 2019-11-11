import React from 'react'
import './../support/css/asira.css'
import GmbrAsira from './../support/img/asira.jpg'
import WOW from 'wow.js'

class Asira extends React.Component{
    componentDidMount() {
        new WOW().init();
    }
    render(){
        return(
            <div className="container-fluid aboutAsira">
                <div className="row">
                    <div className="col-xs col-12 col-md-12">
                        <h1>ASIRA Mobile</h1>
                    </div>
                </div>    
                <div className="row">
                    <div className="col-xs col-12 col-md-6 mt-5 fadeInLeft wow">
                       <center>
                    <img src={GmbrAsira} width="50%" alt="asira"></img> </center>
                    </div>
                    <div className="col-xs col-12 col-md-6 mt-5 fadeInRight wow">
                        <h3 style={{fontSize:"35px"}}className="text-left mb-5">Fitur Asira Mobile App:</h3>
                        <ul style={{fontSize:"20px"}}>
                            <li>Dikembangkan menggunakan Android Native</li>
                            <li><b>ASIRA</b> adalah sebuah Platform yang disediakan <b>Ayannah</b> bagi Mitra Bank agar dapat mendigitalisasi produk pinjaman yang dimiliki.</li>
                            <li>Nasabah dapat registrasi melalui aplikasi sesuai dengan Bank Mitra <b>ASIRA</b> yang di inginkan</li>
                            <li>Nasabah dapat mengajukan pinjaman melalui aplikasi sesuai dengan layanan dan produk yang dimiliki Bank Mitra <b>ASIRA</b></li>
                            <li>Nasabah akan mendapatkan notifikasi terkait proses pengajuan pinjaman mereka.</li>
                            <li>Nasabah dapat update data diri mereka yang mana akan memudahkan bank untuk melihat credit scoring pinjaman.</li>
                            <li>Bank dengan mudah dapat memasukan program promosi milik bank dalam <b>ASIRA</b> Mobile App.</li>
                        </ul>
                    </div>
               </div>            
            </div>
        )
    }
}

export default Asira