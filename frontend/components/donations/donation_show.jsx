import React from 'react'
import { Link } from 'react-router-dom';

class DonationShow extends React.Component {
    render() {
        return (
            <div>
                <div className = 'main-menu'>
                    <header>
                        <Link to = '/' className = 'signup-header-link'>
                            <h1>
                                <img className = 'home-icon' src={window.solar_system_favicon} alt="HOME"/>
                            </h1>
                        </Link>
                    </header> 
                </div>

                {/* <img src={window.Thank_Card} alt="Thanks!" className = 'donation-thank-you-card'/> */}
            </div>
        )
    }
}

export default DonationShow