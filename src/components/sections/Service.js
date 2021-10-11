import React from 'react'
import { MDBIcon } from 'mdbreact'
import './serivces.css'
import ph from '../gallary/blaz-erzetic-CnTiAl1fpRU-unsplash-min.jpg'
import ph1 from '../gallary/adam-birkett-vISNAATFXlE-unsplash-min.jpg'
import ph2 from '../gallary/kiran-ck-LSNJ-pltdu8-unsplash-min.jpg'
import ph3 from '../gallary/luke-peterson-lUMj2Zv5HUE-unsplash-min.jpg'
import ph4 from '../gallary/mayra-moretti-por3FNwFCbs-unsplash-min.jpg'
import ph5 from '../gallary/minh-pham-RsmOYMxmlYU-unsplash-min.jpg'


function Service(props) {
    const mode = props.mode;

    return (
        <div>
            <section className="servce_page" style={{ backgroundColor: `${mode ? '#111111' : '#f4f4f4'}` }}>
                <div className="service_title">
                    <div className="vert-line">
                        <div className="lines"></div>
                        <h1 style={{ color: `${mode ? '#fff' : '#000'}` }}>Services.</h1></div>
                    <h3 style={{ color: `${mode ? '#04d7c3' : '#000'}` }}>OUR SERVICES FOR CLIENTS</h3>
                </div>
                <div className="service_container">
                    <div className="serivce_box">
                        <MDBIcon className='icon' icon="chart-line" />
                        <h2>Digital Strategy</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit Aut provident.</p>
                    </div>
                    <div className="serivce_box">
                        <MDBIcon className='icon' far icon="edit" />
                        <h2>UI Designs</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit Aut provident.</p>
                    </div>
                    <div className="serivce_box">
                        <MDBIcon className='icon' icon="crop" />
                        <h2>UX Designs</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit Aut provident.</p>
                    </div>
                    <div className="serivce_box">
                        <MDBIcon className='icon' fab icon="chrome" />
                        <h2>Social Media</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit Aut provident.</p>
                    </div>
                    <div className="serivce_box">
                        <MDBIcon className='icon' far icon="bookmark" />
                        <h2>Design Concept</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit Aut provident.</p>
                    </div>
                    <div className="serivce_box">
                        <MDBIcon className='icon' icon="chart-area" />
                        <h2>Media Pairing</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit Aut provident.</p>
                    </div>
                </div>
                <div className="hor-lines"></div>
            </section>
            <section className="work" style={{ backgroundColor: `${mode ? '#080808' : '#fff'}` }}>
                <div className="work_content">
                    <div className="work_text">
                        <div className="flex-i">
                            <div className="lines"></div>
                            <h1 style={{ color: `${mode ? '#fff' : '#000'}` }}>Works.</h1>
                        </div>
                        <h3 style={{ color: `${mode ? '#04d7c3' : '#000'}` }}>THINGS WE'VE MADE</h3>

                    </div>
                    <div className="work_text b"> VIEV ALL </div>
                </div>
                <div className="image_content">
                    <figure className="photo"><img src={ph} alt="" /></figure>
                    <figure className="photo"><img src={ph1} alt="" /></figure>
                    <figure className="photo"><img src={ph2} alt="" /></figure>
                    <figure className="photo"><img src={ph3} alt="" /></figure>
                    <figure className="photo"><img src={ph4} alt="" /></figure>
                    <figure className="photo"><img src={ph5} alt="" /></figure>
                </div>
                <div className="hor-lines"></div>

            </section>

        </div>
    )
}

export default Service
