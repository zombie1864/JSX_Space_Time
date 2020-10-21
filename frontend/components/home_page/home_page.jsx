import React from 'react'
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'
import IndexVideoContainer from '../videos/video_index_container'
import Footer from './footer'


export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className = 'main-menu'>
                    <header>
                        <Link to = '/' className = 'header-link'>
                            <img className = 'home-icon' src={window.solar_system_favicon} alt="HOME"/>
                        </Link>
                    </header> 
                    <div className = 'signin-button'>
                        <GreetingContainer />
                    </div>
                    <nav class = 'main-menu-on-the-right'>
                        <ul>
                            <Link
                                to = '/'
                                >
                                <li className = 'menu-taps'>Home</li>
                            </Link>
                            {/* <li className = 'menu-taps'>Shows</li> */}
                            {/* <li className = 'menu-taps'>Video</li> */}
                            {/* <li className = 'menu-taps'>TV Schedules</li> */}
                            {/* <li className = 'menu-taps'>Shop</li> */}
                            <Link 
                                to = 'donations' 
                                className = 'donation_page'
                                >
                                <li 
                                    className = 'menu-taps'
                                    >Donate</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className = 'container'>
                    <p className = 'slogan' >This is Space-time! 
                    </p>
                    <p className = 'webpage-description'>
                    Explore the universe and your mind with astrophysicist Matt O'Dowd PhD. 
                    </p>
                    <br/>
                    <div className = 'disclaimer-and-site'>
                        <p>
                            The following website is for educational and demonstrational purposes. All content is reserved and credited to PBS.
                        </p>
                        <br/>
                        <div>
                            <a 
                                href="https://www.pbs.org/show/pbs-space-time/"
                                className = 'offical-site'
                                target = '_blank'>
                                    Visit Offical Site</a> 
                        </div>
                    </div>
                </div>
                    <div className = 'index-videos'>
                        <IndexVideoContainer/>
                    </div>
                <div>
                <img className = 'home-bck-img' src={ window.PBS_webpage_img} alt="TEST"/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
         
        )
    }
}

export default HomePage
