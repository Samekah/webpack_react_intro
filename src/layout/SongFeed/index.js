import React, { useState, useEffect } from 'react';
import { Song } from '../../components';
import axios from 'axios';

export default () => {
    const [songs, setSongs] = useState([
        {
            name: "A Curious Tale of Trials + Persons",
            date: "2015",
            imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Little_Simz%2C_Seat_Village_stage_5.jpg/220px-Little_Simz%2C_Seat_Village_stage_5.jpg"
        },
        {
            name: "Stillness in Wonderland",
            date: "2016",
            imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Little_Simz_Performing.jpg/220px-Little_Simz_Performing.jpg"
        },
         {
            name: "Grey Area",
            date: "2019",
            imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Little_Simz%2C_Seat_Village_stage_5.jpg/220px-Little_Simz%2C_Seat_Village_stage_5.jpg"
        },
        {
            name: "Sometimes I Might Be Introvert",
            date: "2021",
            imgSource: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Little_Simz_Performing.jpg/220px-Little_Simz_Performing.jpg"
        }
    ]);

    useEffect(() => {

        async function fetchJoke(){
            try{
                const {data} = await axios.get('https://api.chucknorris.io/jokes/random');
                console.log(data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchJoke();
    }, [])

    function renderSongs(){
        let songsList = songs.map(song => <Song key={song.name} name={song.name} date={song.date} imgSource={song.imgSource}/>)
        return songsList;
    }

    return (
        <>
        {renderSongs()}
        </>
    )
}