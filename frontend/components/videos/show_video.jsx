import React from 'react'; 
import ReactPlayer from 'react-player'

class ShowVideo extends React.Component {
    render() {
        const video = this.props.video 
        // debugger 
        return (
            <div>
                <ReactPlayer
                className='react-player'
                url={video.video_url}
                width='30%'
                height='30%'
                />
            </div>
        )
    }
}

export default ShowVideo
