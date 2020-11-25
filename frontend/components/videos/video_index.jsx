import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class VideoIndex extends React.Component {  

    componentDidMount() {
        this.props.fetchAllVideos(); 
    }
    
    render() {
        const { submitToMyList } = this.props; 
        let addToMyList = () => {}
        if (!this.props.user) {
        addToMyList = () => this.props.history.push('/login')
        } else {
            addToMyList = () => submitToMyList(video.id) // THIS WORKS! console.log('YES')
        }
        let subset = this.props.videos.slice(0, 3)
        const allVideos = subset.map(video => {
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
                    >{video.runtime}m</p>
                <button onClick = {addToMyList}> + myList </button>
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

export default withRouter(VideoIndex)
