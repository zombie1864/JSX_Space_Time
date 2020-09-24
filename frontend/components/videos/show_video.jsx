import React from 'react'; 
import ReactPlayer from 'react-player'
import { Link, Router } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'


class ShowVideo extends React.Component {    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.id);
    }    

    render() {
        const video = this.props.video 
        // debugger
        if ( !video ) {
            return null; // this is needed so that the DOM can read the code below, componentDidMount will then mount and the code below will execute 
        } 
        return (
            <div>
                <div className = 'main-menu'>
                    <header>
                        <Link to = '/' className = 'header-link'>
                            <h1>
                                <img className = 'home-icon' src={window.solar_system_favicon} alt="HOME"/>
                            </h1>
                        </Link>
                    </header> 
                    <div className = 'signin-button'>
                        <GreetingContainer />
                    </div>
                    <nav >
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
                            to = '/donations' 
                            >
                            <li 
                                className = 'menu-taps'
                                >Donate</li>
                        </Link>
                    </ul>
                    </nav>
                </div>   
                <img src={video.image_url} width = '1280' height = '720' className = 'show-bck-img'/>
                <ReactPlayer
                className='react-player'
                url={video.video_url}
                width='50%'
                height='50%'
                />
                <div className = 'show-container'>
                    <p className = 'show-title'>
                        {video.title}
                    </p>
                    <p className = 'show-description'>
                        {video.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default ShowVideo

// when refresh redux is wiped clean 