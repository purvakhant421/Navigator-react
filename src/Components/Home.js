import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log(res.data);
            setData(res.data.slice(0, 5) || []); // Slice to get the top 5 items
        });
    }, []);

    console.log(data, "data");
    return (
        <div>
            <div>
                {data.map((e, index) => {
                    return (
                        <div className='container' key={e.id}>
                            <div className='box'>
                                <h1>{e.id}</h1>
                                <p>{e.title}</p>
                                <Link to={`/${index}`}>
                                    <button className='btn btn-primary'>View more ..</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
