import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SongListRow = ({song}) =>{
    return (
        <tr>
            <td><a href={song.watchHref} target="_blank">Watch video</a></td>
            <td><Link to={'/song/'+song.id}>{song.title}</Link></td>
            <td>{song.authorId}</td>
            <td>{song.category}</td>
            <td>{song.length}</td>
        </tr>
    );
};

SongListRow.propTypes = {
    song: PropTypes.object.isRequired
};

export default SongListRow;