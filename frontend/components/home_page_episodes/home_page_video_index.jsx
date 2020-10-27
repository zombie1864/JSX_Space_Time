import React from 'react'

class HomePageVideoIndex extends React.Component {
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

export default HomePageVideoIndex
