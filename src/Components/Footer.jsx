import React from 'react'
import '../Styles/Footer.css'
const Footer = () => {
    return (
        <footer>
            <div id="left-info">
                <h1>Visit Us</h1>
                <div id='infoContainer' >
                    <div className="containers">
                        <div className="icon"><i class="fa-solid fa-house" style={{ color: '#EA7704' }}    ></i></div>
                        <div className="info"><p>Sri Ramakrishna Math
                            31, Ramakrishna Math Road,
                            Mylapore
                            Chennai 600004, India</p></div>
                    </div>
                    <div className="containers">
                        <div className="icon"><i class="fa-solid fa-envelope" style={{ color: '#EA7704' }}  ></i></div>
                        <div className="info"><p>mail@chennaimath.org</p></div>
                    </div>
                    <div className="containers">
                        <div className="icon"><i class="fa-solid fa-phone" style={{ color: '#EA7704' }}></i></div>
                        <div className="info"><p>+91-44-24621110</p></div>
                    </div>
                    <div className="containers">
                        <div className="icon"><i class="fa-regular fa-clock" style={{ color: '#EA7704' }}></i></div>
                        <div className="info"><p>Temple Timings
                            05.00 am to 11:45am
                            03:00 pm to 09:00pm</p></div>
                    </div>
                    <div className="containers">
                        <div className="icon">
                            <i className="fa-regular fa-thumbs-up" style={{ color: '#EA7704' }}></i>
                        </div>

                        <div className="info"><p>Follow us</p></div>
                    </div>
                    <div className="containers">
                        <div className="icon">
                        <i class="fa-brands fa-telegram fa-shake"  style={{ color: '#EA7704' }}></i>
                        </div>

                        <div className="info"><p>Join Telegram Chanel</p></div>
                    </div>
                </div>
            </div>
            <div id="map-section">
                <div className="map">
                    <iframe title='map' style={{ fontSize: '16px', border: '0' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1312.4950171832545!2d83.90422916361017!3d21.49610297038295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213dc141b8bbc7%3A0x7b4c80cbff0d772d!2sISRO%20Space%20Innovation%20Center%20%2C%20VSSUT%20Burla!5e0!3m2!1sen!2sin!4v1715563947125!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div id="right-info">
                <h1>Our Sites</h1>
                <div id="site-links">
                    <a href="#home">Ramakrishna Math iStore</a>
                    <a href="#home">Ramakrishna Math Donations</a>
                    <a href="#home">Ramakrishna Math Media Gallery</a>
                    <a href="#home">Vedanta & Spiritual eBooks</a>
                    <a href="#home">Vivekananda House</a>
                    <a href="#home">Vivekananda Cultural Centre</a>
                    <a href="#home">Vivekananda Girls’ School</a>
                    <a href="#home">National School</a>
                    <a href="#home">Meyyur Rural Unit</a>
                    <a href="#home">Ramakrishna Math Apps</a>
                    <a href="#home">Ramakrishna Math, Puducherry</a>
                </div>
            </div>

        </footer>
    )
}

export default Footer