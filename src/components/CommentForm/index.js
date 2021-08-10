import React, {useState} from 'react';

export default ({handleCommentSubmit}) => {
    const [input, setInput] = useState()

    function handleChange(event){
        setInput(event.target.value);
    }

    return (
        <form onSubmit={handleCommentSubmit}>
            <label htmlFor='comment'>Add comment:</label>
            <textarea id='comment' onChange={handleChange}></textarea>
            <input type='submit' value='Submit'></input>
        </form>
    )
}