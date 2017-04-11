import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SongForm = ({song, allAuthors, onSave, onChange, loading, errors})=>{
    return(
        <form>
            <TextInput
                name="title"
                label="title"
                value={song.title}
                onChange={onChange}
                error={errors.title}/>
            <SelectInput
                name="authorId"
                label="Author"
                value={song.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId} />
            <TextInput
                name="category"
                label="category"
                value={song.category}
                onChange={onChange}
                error={errors.category}/>
            <TextInput
                name="length"
                label="length"
                value={song.length}
                onChange={onChange}
                error={errors.length}/>
            <input 
                type="submit"
                disabled={loading}
                value={loading ? 'Saving ...' : 'Save'}
                className = "btn btn-primary"
                onClick = {onSave}/>
        </form>
    );
};

SongForm.propTypes={
    song: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
}

export default SongForm;