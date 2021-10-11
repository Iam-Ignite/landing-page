import React from 'react'
import './about.css'
import ph1 from '../gallary/ludovica-dri-Bc_y35IwUHw-unsplash-min.jpg'
import ph2 from '../gallary/diego-ph-fIq0tET6llw-unsplash-min.jpg'
import ph3 from '../gallary/mr-cup-fabien-barral-Mwuod2cm8g4-unsplash-min.jpg'

function About(props) {
    const mode = props.mode;
    return (
        <div>
            <section className="about_container" style={{ backgroundColor: `${mode ? '#111111' : '#f4f4f4'}` }}>
                <div className="service_title">
                    <div className="vert-line">
                        <div className="lines"></div>
                        <h1 style={{ color: `${mode ? '#fff' : '#000'}` }}>About.</h1></div>
                    <h3 style={{ color: `${mode ? '#04d7c3' : '#000'}` }}>WE ARE MORE THAN DIGIAL AGENCE</h3>
                </div>
                <div className="about_box">
                    <div className="about_boxes box3 bg-m">
                        <h2>TEAM WORK</h2>
                        <span>committed an creative</span>
                    </div>
                    <div className="about_boxes">
                        <div className="box1  bx">
                            <h2>PHILOSOPHY</h2>
                            <span>Trust pays off</span>
                        </div>
                        <div className="box2 bx">
                            <h2>OFFICE</h2>
                            <span>Somewhere on earth</span>
                        </div>

                    </div>
                </div>
                <div className="about_text">
                    <div className="about_text-box">
                        <h3 style={{ color: `${mode ? '#fff' : '#000'}` }}>Who we are</h3>
                        <p style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vel. Dolore veniam magni magnam delectus molestias? Suscipit inventore, reprehenderit maiores</p>
                    </div>
                    <div className="about_text-box b-side">
                        <h3 style={{ color: `${mode ? '#fff' : '#000'}` }}>Our philosopy</h3>
                        <p style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vel. Dolore veniam magni magnam delectus molestias?inventore, reprehenderit dignissimos.</p>
                    </div>
                    <div className="about_text-box">
                        <h3 style={{ color: `${mode ? '#fff' : '#000'}` }}>how we work</h3>
                        <p style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vel. Dolore veniam magni magnam delectus molestias? Suscipit inventore, reprehenderit maiores.</p>
                    </div>
                </div>
                <div className="hor-lines"></div>
            </section>
            <section className="news" style={{ backgroundColor: `${mode ? '#111111' : '#fff'}` }}>
                <div className="center_item">
                    <h1 style={{ color: `${mode ? '#04d7c3' : '#000'}` }}>Latest News.</h1>
                    <h3 style={{ color: `${mode ? '#04d7c3' : '#000'}` }}>CHECK OUT SOME OF OUR LATEST NEWS</h3>
                </div>
                <div className="news_container" >

                    <div className="news_box" >
                        <div className="news_image"><img src={ph1} alt="" /></div>
                        <div className="news_text" style={{ backgroundColor: `${mode ? '#111111' : '#dfdfdf'}` }}> <p className="title" style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <p style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a fuga nostrum doloremque autem molestiae fugiat eius labore expedita praesentium.</p>
                            <button className="btn_t" style={{ color: `${mode ? '#fff' : '#000'}` }}>Read More</button>
                        </div>
                    </div>
                    <div className="news_box">
                        <div className="news_image"><img src={ph2} alt="" /></div>
                        <div className="news_text" style={{ backgroundColor: `${mode ? '#111111' : '#dfdfdf'}` }}> <p className="title" style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <p style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a fuga nostrum doloremq ue autem molestiae fugiat eius labore expedita praesentium.</p>
                            <button className="btn_t" style={{ color: `${mode ? '#fff' : '#000'}` }} >Read More</button>
                        </div>
                    </div>
                    <div className="news_box">
                        <div className="news_image"><img src={ph3} alt="" /></div>
                        <div className="news_text" style={{ backgroundColor: `${mode ? '#111111' : '#dfdfdf'}` }}> <p className="title" style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                            <p style={{ color: `${mode ? '#fff' : '#000'}` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi a fuga nostrum doloremq ue autem molestiae fugiat eius labore expedita praesentium.</p>
                            <button className="btn_t" style={{ color: `${mode ? '#fff' : '#000'}` }} >Read More</button>
                        </div>
                    </div>
                </div>
                <div className="kd"> </div>

            </section>
        </div>
    )
}

export default About
