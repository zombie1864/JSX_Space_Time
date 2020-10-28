import React from 'react'
import { Link } from 'react-router-dom';


class HomePageVideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchAllVideos(); 
    }

    render() {
        const allVideos = this.props.videos.map(video => {
            return (
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
                        >{video.runtime}min</p>
                </li>
            )
        })

        return (
            <div>
                <p className="episodes">
                    Episodes
                </p>
                {allVideos}
            </div>
        )
    }
}

export default HomePageVideoIndex
