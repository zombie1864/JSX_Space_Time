import { connect } from 'react-redux'; 
import showVideo from './show_video'; 
import { fetchVideo } from '../../actions/video_actions'; 

const msp = ( state, ownProps ) => {
    return { video : state.entities.videos[ ownProps.match.params.id ]}
}; 

const mdp = dispatch => ({
    fetchVideo: id => dispatch(fetchVideo(id))
}); 

export default connect( msp, mdp )(showVideo); 