import React, { useState } from 'react';
import './navbar.css'
import { MDBIcon } from 'mdbreact'
import Home from './Home';
import Service from './Service';
import About from './About';
import Footer from './Footer';


export default function Navbar() {
    const [mode, setMode] = useState(true);
    const [sidebar, setSidebar] = useState(false);



    return (
        <div>
            <div className="main-nav" style={{ backgroundColor: `${mode ? '#111111' : '#f4f4f4'}` }}>
                <div className="nav-content">
                    <div className="theme-mode">
                        <div className="logo">
                            <li ><a style={{ color: `${mode ? '#fff' : '#000'}` }}
                                href="#">Ignite</a></li>
                            <input type="checkbox" id="check"
                                onClick={() => setMode(!mode)} />
                        </div>

                    </div>

                    <div className={!sidebar ? "sidebar" : "sidebar_mb"} >
                        <MDBIcon onClick={() => setSidebar(!sidebar)} className="m-icon m-icon2" icon="times" />
                        <li><a
                            style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='link' href="#">HOME</a></li>
                        <li><a
                            style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='link' href="#">SERVIES</a></li>
                        <li><a
                            style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='link' href="#">WORKS</a></li>
                        <li><a
                            style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='link' href="#">ABOUT</a></li>
                        <li><a
                            style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='link' href="#">BLOG</a></li>
                        <li><a
                            style={{ color: `${mode ? '#fff' : '#000'}` }}
                            className='contact' href="#">CONTACT</a></li>

                    </div>
                    <MDBIcon onClick={() => setSidebar(!sidebar)} className="m-icon" icon="bars" />


                </div>
            </div>
            <Home mode={mode} />
            <Service mode={mode} />
            <About mode={mode} />
            <Footer mode={mode} />
        </div>
    )
}
