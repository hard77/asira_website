import React from 'react'
import BankPNG from './../support/img/icons/bank.png'
import Income from './../support/img/icons/income.png'
import Fintech from './../support/img/icons/fintech.png'
import Accounting from './../support/img/icons/accounting.png'
import Expensive from './../support/img/icons/expensive.png'
import WOW from 'wow.js'

class Problem extends React.Component{
    componentDidMount() {
        new WOW().init();
    }
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col col-xs col-md-5 mb-5">
                    <h3 className="text-left"> Penyelesaian Masalah Keuangan dengan Teknologi Finansial</h3>
                </div>
            </div>
            <div className="row" style={{paddingLeft:"10%"}}>
                <div className="col-xs col-12 col-md-2 ml-2  wow fadeInDown" >
                    <center>
                    <img src={Fintech} alt="Fintech" width="30%"></img>
                    </center>
                    <p className="text-left mt-5">
                        Maraknya Teknologi Financial di Indonesia belakangan ini tidak bisa dianggap hal yang sepele.
                    </p>
                </div>
                <div className="col-xs col-12 col-md-2 wow fadeInDown">
                    <center>
                    <img src={BankPNG} alt="iconBank" width="30%"></img>
                    </center>
                    <p className="text-left mt-5">
                        Proses pengajuan pinjaman di bank tradisional saat ini masih rumit karena harus dilaksanakan di cabang.
                    </p>
                </div>
                <div className="col-xs col-12 col-md-2 wow fadeInDown">
                    <center>
                    <img src={Income} alt="Income" width="30%"></img>
                    </center>
                    <p className="text-left mt-5">
                        Kenyamanan penggunaan platform P2P akan menimbulkan ancaman bagi sistem perbankan tradisional terutama pada transaksi perbankan dan pinjaman
                    </p>
                </div>
                <div className="col-xs  col-12 col-md-2 wow fadeInDown">
                    <center>
                    <img src={Expensive} alt="Expensive" width="30%"></img>
                    </center>
                    <p className="text-left mt-5">
                        Nasabah terpaksa mengajukan pinjamanan dengan biaya bunga dan administrasi sangat tinggi
                    </p>
                </div>
                <div className="col-xs  col-12 col-md-2 wow fadeInDown">
                    <center>
                    <img src={Accounting} alt="Accounting" width="30%"></img>
                    </center>
                    <p className="text-left mt-5">
                        Biaya untuk membangun suatu sistem pinjaman sangat mahal membutuhkan waktu lama dan tenaga ahli.
                    </p>
                </div>
        
            </div>
        </div>
        )
    }
}

export default Problem