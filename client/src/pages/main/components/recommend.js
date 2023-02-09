import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./recommend.css"
import recommend_list from '../../../data/recommend_list.json';

const recommend=()=>{
    return(
        <div className="row w-100">
        {recommend_list.map(r)}
        </div>
    )
}

const r=(item, index)=>{
    return(
        <Link to={item.url} className="w-25" key={index}>
            <img className="w-100" src={item.image} profile="dd"/>
            <h1 className="w-auto text-center" width="250px" >{item.title}</h1>
        </Link>
    )
}

export default recommend