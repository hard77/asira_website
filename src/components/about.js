import React from 'react'
import './../support/css/about.css'

class About extends React.Component{
    render(){
        return(
            <div className="container-fluid aboutAyannah text-left" >
                <div>
                    <div className="row mt-3 mb-5">
                        <div className="col-12 col-md-6 ">
                            <h1>VISI</h1>
                            <p className="text-left" style={{fontSize:"20px"}}>Meningkatkan kualitas hidup para pelanggan melalui teknologi finansial digital yang mudah di akses kapan pun dan dimana pun</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1>MISI</h1>
                            <p className="text-left" style={{fontSize:"20px"}}>PT Ayannah Solusi Nusantara menjadi mitra Bank anda dalam menjalankan misi sebagai pelopor digital perbankan</p>
                        </div>
                    </div>
                </div>
              
                
            </div>
        )
    }
}

export default About