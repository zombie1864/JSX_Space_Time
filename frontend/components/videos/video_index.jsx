import React from 'react'
import { Link } from 'react-router-dom';


class VideoIndex extends React.Component {    
    componentDidMount() {
        this.props.fetchAllVideos(); 
    }

    render() {
        const allVideos = this.props.videos.map(video => {
            // debugger 
            return (
            <li key = { video.id } className = 'indexed-video'>
                <Link to = {`/api/videos/${video.id}`}>
                <img src='https://image.pbs.org/video-assets/pbs/pbs-space-time/189190/images/mezzanine_849.jpg?crop=480x270' width = '300' height = '200'/>
                </Link>
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
