import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song }) => {
    if(!song){
        return <div>Please select a song</div>
    }
    return(
        <div className='container'>
            <h3>Song Details</h3>
            <p>
                Title: {song.title}
                Duration: {song.duration}
            </p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);