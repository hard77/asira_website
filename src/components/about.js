import React from 'react'
import './../support/css/about.css'
import BankPNG from './../support/img/icons/bank.png'
import Income from './../support/img/icons/income.png'
import Fintech from './../support/img/icons/fintech.png'
import Accounting from './../support/img/icons/accounting.png'
import Expensive from './../support/img/icons/expensive.png'



class About extends React.Component{
    render(){
        return(
            <div className="container-fluid aboutAyannah text-left">
                <div>
                    <div className="row mt-3 mb-5">
                        <div className="col-12 col-md-6 ">
                            <h1>VISI</h1>
                            <p className="text-left">Meningkatkan Kualitas Hidup para pelanggan melalui teknologi finansial digital yang mudah di akses kapan pun dan dimana pun</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1>MISI</h1>
                            <p className="text-left">PT Ayannah Solusi Nusantara menjadi mitra Bank anda dalam menjalankan misi sebagai pelopor digital perbankan</p>
                        </div>
                    </div>
                </div>

                <div className="ourBoss">
                    <div className="row mt-3 mb-5">
                        <div className="col-12 col-md-6 ">
                            <h3 className="text-left">Chief Executive Officer (CEO)</h3>
                            <div className="row">
                                <div className="col-6 col-md-6 col-xs-6">
                                <center>
                                <img src={Income} width="50%" alt="CEO"></img>
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
                            <h3 className="text-left">Country Managing Director</h3>
                            <img src={Income} width="30%" alt="CEO"></img>
                            
                                <ul>
                                    <li>Penilaian Ekuitas (Saham dan Investasi)</li>
                                    <li>Merger dan Akuisisi (Investasi Perbankan) </li>
                                    <li>Anggota masyarakat aktuaris (Asuransi)</li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-5 col-md-5 mb-5">
                            <h3 className="text-left"> Penyelesaian Masalah Keuangan dengan Teknologi Finansial</h3>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft:"10%"}}>
                        <div className="col-xs col-12 col-md-2 ml-2">
                            <center>
                            <img src={Fintech} alt="Fintech" width="30%"></img>
                            </center>
                            <p className="text-left mt-5">
                                Maraknya Teknologi Financial di Indonesia belakangan ini tidak bisa dianggap hal yang sepele.
                            </p>
                        </div>
                        <div className="col-xs col-12 col-md-2">
                            <center>
                            <img src={BankPNG} alt="iconBank" width="30%"></img>
                            </center>
                            <p className="text-left mt-5">
                                Proses pengajuan pinjaman di bank tradisional saat ini masih rumit karena harus dilaksanakan di cabang.
                            </p>
                        </div>
                        <div className="col-xs col-12 col-md-2">
                            <center>
                            <img src={Income} alt="Income" width="30%"></img>
                            </center>
                            <p className="text-left mt-5">
                                Kenyamanan penggunaan platform P2P akan menimbulkan ancaman bagi sistem perbankan tradisional terutama pada transaksi perbankan dan pinjaman
                            </p>
                        </div>
                        <div className="col-xs  col-12 col-md-2 ">
                            <center>
                            <img src={Expensive} alt="Expensive" width="30%"></img>
                            </center>
                            <p className="text-left mt-5">
                                Nasabah terpaksa mengajukan pinjmanan dengan biaya bunga dan administrasi sanggat tinggi
                            </p>
                        </div>
                        <div className="col-xs  col-12 col-md-2">
                            <center>
                            <img src={Accounting} alt="Accounting" width="30%"></img>
                            </center>
                            <p className="text-left mt-5">
                                Biaya untuk membangun suatu sistem pinjaman sangat mahal membutuhkan waktu lama dan tenaga ahli.
                            </p>
                        </div>
                
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About