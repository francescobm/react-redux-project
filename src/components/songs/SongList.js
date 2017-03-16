import React, {PropTypes} from 'react';
import SongListRow from './SongListRow';

const SongList = ({songs}) =>{
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    <th>Video</th>
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