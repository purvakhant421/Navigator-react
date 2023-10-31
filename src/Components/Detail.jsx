import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Detail = () => {

    const { id } = useParams()

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            console.log(res.data);
            setData(res.data || []);
        });
    }, []);
    console.log();
    return (
        <div className="container">
            <h2>User ID : {data[id]?.userId}</h2>
            <h2>ID : {data[id]?.id}</h2>
            <h5>Title : {data[id]?.title}</h5>
        </div>
    )
}

export default Detail
