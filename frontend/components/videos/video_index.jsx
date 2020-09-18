import React from 'react'
import { Link } from 'react-router-dom';

class VideoIndex extends React.Component {    
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
                    to = {`/api/videos/${video.id}`}
                    >
                <div 
                    className = 'index_video_container'
                    >
                    <img 
                        src={video.image_url} 
                        width = '430' 
                        height = '220'
                        />
                    <img 
                        src={window.video_play_icon} alt="YES"
                        className = 'video_play_icon'
                        />
                </div>
                </Link>
                <p 
                    className = 'video_details'
                    >{video.title}</p>
                <p 
                    className = 'video_details'
                    >{video.runtime}m</p>
            </li>
            )
        })

        return (
            <div>
                {allVideos}
            </div>
        )
    }
}

export default VideoIndex
