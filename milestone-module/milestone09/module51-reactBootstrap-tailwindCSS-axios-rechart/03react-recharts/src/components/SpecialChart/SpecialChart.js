import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(data => console.log(data.data.data));
        .then(data => {
            const loadedData = data.data.data;
            // const phoneData = loadedData.map(phone => phone.slug);
            
            // data extraction and data processing
            const phoneData = loadedData.map(phone => {
                const parts = phone.slug.split('-');
                const ph = {
                    name: parts[0],
                    value: parseInt(parts[1]) // create unique value by using split method
                };
                return ph;
            });
            setPhones(phoneData);
            // console.log(phoneData);
        });
    }, [])
    return (
        <BarChart width={800} height={500} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default SpecialChart;