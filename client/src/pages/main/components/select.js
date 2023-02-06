import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./select.css"
import board_content from '../../../data/board_content.json';

const Query=()=>{
    const [inputs, setInputs] = useState({
        "city":"city",
        "season":"season",
        "star":"star",
        "price":"price"
    });

    return(
        <div className='query'>
            <div className='board'>
                <h1>후기</h1>
                <div className='inner_board'>{board([inputs, setInputs])}</div>
            </div>
            <div className='board'>
                <h1>매칭</h1>
                <div className='inner_board'>{matching([inputs, setInputs])}</div>
            </div>
            <div className='search'>{search([inputs, setInputs])}</div>
        </div>
    )
}

const search=([inputs, setInputs])=>{
    return(
        ["city","season","star","price"].map((input)=>(
            <div>
                <div className='inner_search'>   
                    <h1>{input}</h1> 
                    <input placeholder='1' onChange={(e)=>(
                        setInputs({...inputs, [input]: e.target.value})
                    )}/>
                </div>  
            </div>
        ))
    )
}

const board=([inputs, setInputs])=>{
    return(
        board_content.filter(search_engine(inputs)).map((input)=>(
            <div className='inner_content'>
                {console.log(input.number)}
                <Link to={"/articles/"+input.number}>   
                    <h1>{input.city}</h1> 
                    <h1>{input.content}</h1> 
                </Link>  
            </div>
        ))
    )
}

const search_engine = (inputs)=>(input=>
    input.city==inputs["city"]&&
    input.season==inputs["season"]&&
    input.star==inputs["star"]&&
    input.price==inputs["price"]
);

const matching=([inputs, setInputs])=>{
}

export default Query