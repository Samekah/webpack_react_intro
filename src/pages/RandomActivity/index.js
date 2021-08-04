import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Activity = () => {

    const [activity, setActivity] = useState("");

    useEffect(async ()=>{
        const { data } = await axios.get('http://www.boredapi.com/api/activity/');
        setActivity(data.activity);
    }, [])


    return (
        <div>
            <h1>Random Activity Page</h1>
            <h3 style={{textAlign: "center"}}>{activity}</h3>
        </div>
    )
}

export default Activity;