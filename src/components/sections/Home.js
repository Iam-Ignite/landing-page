import { MDBIcon } from 'mdbreact'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './home.css';

function Home(props) {

    const mode = props.mode;

    return (
        <div>
            <section className="first_page" style={{
                color: `${mode ? '#000' : '#fff'}`,
                backgroundImage: `url(${mode ? "/gallary/bg.jpg" : "/gallary/gb.jpg"})`
            }}>
                <div className="landing_page">
                    <div className="headline">
                        <h3 className='sub-text' style={{ color: `${mode ? '#68F8E5' : '#fc466b'}` }}>CREATIVE MIND, CREATIVE WORKS</h3>
                        <h1 style={{ color: `${mode ? '#fff' : '#000'}` }}>We are Digital Agency.</h1>
                        <div className="btn-big">
                            <button className="btn" >GETTING STARTED</button>
                        </div>
                    </div>
                    <div className="landing_box">
                        <div className="home_box" >
                            <div className="logo_box" >
                                <MDBIcon className='icon' fab icon="telegram-plane" />

                            </div>
                            <h2>Future Concept. </h2>
                            <div className="line"></div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi assumenda distinctio voluptate perspiciati.</p>
                        </div>


                        <div className="home_box">
                            <div className="logo_box">
                                <MDBIcon className='icon' icon="brain" /></div>
                            <h2>The Big Ideas.</h2>
                            <div className="line"></div>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi assumenda distinctio voluptate perspiciati.</p>

                        </div>

                        <div className="home_box active">
                            <div className="logo_box">
                                <MDBIcon className='icon' far icon="lightbulb" /></div>
                            <h2>Creative Solutions. </h2>
                            <div className="line"></div>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi assumenda distinctio voluptate perspiciati.</p>
                        </div>
                    </div>
                </div>
                <div className="hor-line"></div>

            </section>
        </div>
    )
}

export default Home
