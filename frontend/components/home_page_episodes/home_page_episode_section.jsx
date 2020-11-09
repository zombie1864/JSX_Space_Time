import React from 'react'
import { Link } from 'react-router-dom';


class HomePageEpisodesSection extends React.Component {
    componentDidMount() {
        this.props.fetchAllVideos(); 
    }

    render() {
        let subset = this.props.videos.slice(3, 6)
        const epVideos = subset.map( video => {
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
                        className = 'video_details_title_ep'
                        >{video.title}</p>
                    <p 
                        className = 'video_details'
                        >{video.runtime}m</p>
                </li>
            )
        })

        return (
            <div>
                <p className="episodes">
                    Episodes
                </p>
                <div className="eps_container">
                    {epVideos}
                </div>
            </div>
        )
    }
}

export default HomePageEpisodesSection
