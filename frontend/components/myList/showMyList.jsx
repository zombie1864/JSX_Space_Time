import React from 'react'
import GreetingContainer from '../greeting/greeting_container'
import { Link } from 'react-router-dom';

class ShowMyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            video: []
        }
        this.renderShowMyList = this.renderShowMyList.bind(this)
    }

    componentDidMount() {
        this.props.fetchMyList(this.props.currentUser); 
    }

    renderShowMyList() {
        let videos = [] 
        if (this.props.myLists.length === 0 ) {
            <p>No Videos Saved</p>
        } else {
            videos = this.props.myList 
            return (
                videos.map(video =>
                    <ul>
                        <li 
                            key = { video.id } 
                            className = 'indexed-video'
                            >
                            <Link 
                                to = {`/videos/${video.id}`}
                                >
                                <div 
                                    className = 'index_video_container'
                                    >
                                    <img 
                                        src={video.image_url} 
                                        width = '100%' 
                                        height = '100%'
                                        />
                                    <img 
                                        src={window.video_play_icon} alt="YES"
                                        className = 'video_play_icon'
                                        />
                                </div>
                            </Link>
                            <p 
                                className = 'video_details_title'
                                >{video.title}</p>
                            <p 
                                className = 'video_details'
                                >{video.runtime}m</p>
                        </li>

                    </ul>)
            )
        }
    }

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
                    <nav className = 'main-menu-on-the-right'>
                        <ul>
                            <Link to = '/'>
                                <li className = 'menu-taps'>Home</li>
                            </Link>
                            <Link 
                                to = 'donations' 
                                className = 'donation_page'
                                target = '_blank'
                                >
                                <li 
                                    className = 'menu-taps'
                                    >Donate</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                {this.renderShowMyList()}
            </div>
        )
    }

}

export default ShowMyList