import React from 'react'
import { Parallax } from 'react-parallax'
import imag1 from '../img/img1.jpg'
import { FaTripadvisor } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { FiInstagram } from 'react-icons/fi'
import chaticon from '../img/Group 2.jpg'

function Home() {
    return (
        <div>
            <div className="sticky-top">
                <div className="container-fluid" style={{
                    backgroundColor: "whitesmoke"
                }}>
                    <div className="container m-md-auto">
                        <div className="row ml-md-5 mr-md-5 p-md-1 justify-content-center">
                            <div className="col-md-7 pr-md-0 align-self-center">
                                <span style={{ fontWeight: "500", fontSize: "14px" }}>This site was designed with the</span> <span style={{
                                    fontWeight: "bold", fontFamily: " wixFreemiumFontW01-65Medi,wixFreemiumFontW02-65Medi,wixFreemiumFontW10-65Medi,Helvetica Neue,Helvetica,Arial,sans-serif",
                                    fontSize: '18px',
                                    color: '#20303c',
                                }}>WiX</span><span style={{ fontWeight: "500", fontSize: "14px" }}>.com website builder. Create your website today.</span>
                            </div>
                            <button style={{ border: "1px solid purple", borderRadius: "40px", backgroundColor: "transparent", color: "#A0138E", fontSize: "14px", fontWeight: "645", width: "115px", height: "40px", marginLeft: "-20px", outline: "none" }} id="btn1">Start Now</button>
                        </div>
                    </div>
                </div>

                <hr style={{ height: 1, color: "purple", backgroundColor: "purple", borderColor: "purple", margin: "0px" }} />

                <div className="container-fluid p-3" style={{ backgroundColor: "#242323" }}>
                    <div className="container">
                        <div className="row m-auto justify-content-center" style={{ color: "#f4f4f4", fontSize: "13px", fontFamily: "Arial,Helvetica,sans-serif" }}>
                            <div className="col-1 m-2 align-self-center" style={{ fontWeight: "400px" }}>HOME</div>
                            <div className="col-1 m-2 align-self-center">ABOUT</div>
                            <div className="col-1 m-2 align-self-center">ROOMS</div>
                            <div className="col-1 m-2 align-self-center">SERVICES</div>
                            <div className="col-1 m-2 align-self-center">GALLERY</div>
                            <div className="col-1 m-2 align-self-center mr-0">SEE & DO</div>
                            <div className="col-1 m-2 align-self-center">CONTACT</div>
                            <button className="ml-3" style={{ backgroundColor: "transparent", color: "white", border: "2px solid whitesmoke", height: "45px", width: "140px", fontSize: "14px" }}>Book A Room</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mt-2 pt-5" style={{ fontSize: "45px", fontStyle: "italic", fontFamily: "didot-w01,serif", fontWeight: "600", letterSpacing: "2px" }}>Ferofly</div>
                <div className="row justify-content-center" style={{
                    fontSize: "20px", fontStyle: "italic", fontFamily: "didot-w01,serif", fontWeight: "300", letterSpacing: "2px"
                }}><span id="line">Magnify your Journey</span></div>
            </div>
            <div style={{ fontSize: "30px", right: "30px", position: "fixed", display: "flex", flexDirection: "column" }} >
                <FaTripadvisor className="mt-4" />
                <GrFacebookOption className="mt-4" />
                <FiInstagram className="mt-4" />
            </div>
            <img src={chaticon} alt="icon" style={{ bottom: "20px", position: "fixed", marginLeft: "20px" }} />


            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-11 mt-4">
                        <Parallax bgImage={imag1} strength={600} style={{ height: "700px", width: "100%" }}></Parallax>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-3 m-1 p-0">
                        <div className="form-group">
                            <label>Check-in</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-3 m-1 p-0">
                        <div className="form-group">
                            <label>Check-out</label>
                            <input type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-1 m-1 p-0">
                        <div className="form-group">
                            <label>Adults</label>
                            <input type="number" placeholder="1" min="1" className="form-control" />
                        </div>
                    </div>
                    <div className="col-1 m-1 p-0">
                        <div className="form-group">
                            <label>Kids</label>
                            <input type="number" placeholder="0" min="0" className="form-control" />
                        </div>
                    </div>
                    <button className="col-2 align-self-center m-1 p-0" style={{ height: "40px", width: "100px", backgroundColor: "black", color: "white" }}>Search</button>
                </div>
            </div>
        </div >
    )
}

export default Home
