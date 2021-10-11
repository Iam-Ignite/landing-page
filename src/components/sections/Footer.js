import React from 'react'
import { MDBIcon } from 'mdbreact'
import './footer.css'


function Footer(props) {
    const mode = props.mode;

    return (
        <div>
            <section className="last" style={{ backgroundColor: `${mode ? '#111111' : '#f4f4f4'}` }}>
                <div className=""></div>
                <div className="kd"> </div>
                <div className='m-top'>
                </div>
                <div className="center_fo">
                    <div className="icons_center">
                        <div className="incon_last"><MDBIcon className='icons_bd' fab icon="facebook" /></div>
                        <div className="incon_last"> <MDBIcon className='icons_bd' fab icon="twitter" /></div>
                        <div className="incon_last"><MDBIcon className='icons_bd' fab icon="instagram" /></div>
                        <div className="incon_last"> <MDBIcon className='icons_bd' fab icon="youtube" /></div>
                    </div>
                    <h1 style={{ color: `${mode ? '#fff' : '#000'}` }}>HAVE ANY PROJECT IN MIND?</h1>
                    <button className="ntn">MAKE INQUIRY</button>
                </div>
            </section>
            <footer className="footer"
                style={{ backgroundColor: `${mode ? '#111111' : '#eee'}` }}
            >
                <div className="footer_content" style={{ color: `${mode ? '#fff' : '#000'}` }}
                >
                    <div className="footer_text">
                        <h1>IGNITE</h1>
                        <span>We are more than a digital agency</span>
                    </div>
                    <div className="footer_text">
                        <h3>CONTACT US</h3>
                        <span>feelsmez@gmail.com</span><br />
                        <span>08050768489</span>
                    </div>
                    <div className="footer_text">
                        <h3>OUR SERVICE</h3>
                        <span>Build website</span><br />
                        <span>Deloy and test</span>
                    </div>
                    <div className="footer_text">
                        <h3>ABOUT US</h3>
                        <span>Lagos Nigeria</span><br />
                        <span>wcc</span>
                    </div>
                </div>
                <div className="last_text-fo" style={{ color: `${mode ? '#fff' : '#000'}` }}
                >
                    <div className="text_btw">
                        <span>&copy;2021 Faith Godwin - All Rights Reserved.</span>
                    </div>
                    <div className="text_btw" >
                        <MDBIcon style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='footer_icon' fab icon="facebook" />
                        <MDBIcon style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='footer_icon' fab icon="twitter" />
                        <MDBIcon style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='footer_icon' fab icon="instagram" />
                        <MDBIcon style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='footer_icon' fab icon="youtube" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
