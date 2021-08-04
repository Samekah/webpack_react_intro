import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Geolocation = () => {
    const [locationData, setLocationData] = useState({
        city: "",
        country_name: "",
        location: {
            country_flag: "",
        }
    });

    useEffect(async () => {
        
        const {data} = await axios.get('http://api.ipstack.com/check?access_key=7f350512e57d2fea9757d4a7936b314d');
        setLocationData(data);
    }, [])

    return (
        <div>
            <p>You are from {locationData.city}, {locationData.country_name}</p>
            <img src={locationData.location.country_flag}></img>
        </div>
    )
}

export default Geolocation;
