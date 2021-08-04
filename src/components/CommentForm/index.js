import React, {useState} from 'react';

export default ({handleCommentSubmit}) => {
    return (
        <form onSubmit={handleCommentSubmit}>
            <label htmlFor='comment'>Add comment:</label>
            <textarea id='comment'></textarea>
            <input type='submit' value='Submit'></input>
        </form>
    )
}