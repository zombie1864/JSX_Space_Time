import React from 'react'
import { Link } from 'react-router-dom';


class VideoIndex extends React.Component {    
    componentDidMount() {
        this.props.fetchAllVideos(); 
    }

    render() {
        const allVideos = this.props.videos.map(video => {
            return (
            <li key = { video.id } className = 'indexed-video'>
                <Link to = {`/api/videos/${video.id}`}>
                <img src={video.image_url} width = '430' height = '220'/>
                </Link>
            <p>{video.title}</p>
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
