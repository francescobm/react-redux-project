import React, {PropTypes} from 'react';
import SongListRow from './SongListRow';

const SongList = ({songs}) =>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Video</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(song =>
                    <SongListRow key={song.id} song={song}/>
                )}
            </tbody>
        </table>
    );
};

SongList.propTypes = {
    songs: PropTypes.array.isRequired
};

export default SongList;