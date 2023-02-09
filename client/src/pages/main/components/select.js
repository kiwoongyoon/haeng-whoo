import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./select.css"
import board_content from '../../../data/board_content.json';
import tag_list from '../../../data/tag_list.json';

const Query=()=>{
    const [query, setInputs] = useState({
        "city":"1",
        "season":"1",
        "star":"1",
        "price":"1",
        "tag": []
    });

    const [color, setColor] = useState({})

    return(
        <div className="row p-3 m-3" style={{height: "400px", backgroundColor: "yellow"}}>
            <div className='col h-100  me-3' style={{backgroundColor: "red"}}>
                <div className='h-100 overflow-auto mb-3'>
                    {board(query)}
                </div>
            </div>
            <div className='col-3 h-100'>{search([query, setInputs])}</div>
            <div className='col-3 h-100'>{tag([color, setColor], [query, setInputs])}</div>
        </div>
    )
}

const search=([query, setInputs])=>{
    return(
        ["city","season","star","price"].map((input)=>(
            <div className='h-25'>
                <div className='inner_search'>   
                    <h1>{input}</h1> 
                    <input placeholder='1' onChange={(e)=>(
                        setInputs({...query, [input]: e.target.value})
                    )}/>
                </div>  
            </div>
        ))
    )
}

const tag=([color, setColor], [query, setInputs])=>{
    return(
        <div>
            {
                tag_list.map((input)=>(
                    color[input] = 'pink',
                    <button className='m-3' style={{backgroundColor: color[input]}} onClick={(e) => {
                        if(e.target.backgroundColor = "pink"){
                            setColor({...color, [input]: "yellow"})
                            console.log(e.target.backgroundColor);
                            query.tag.concat(input)
                        }
                        else {
                            setColor({...color, [input]: "pink"})
                            console.log(e.target.backgroundColor);
                            setInputs({...query, "tag": [...query.tag.filter(tag => input!=tag) ]})
                        };
                    }}>   
                    <h1 className='w-auto h-auto'>{input}</h1> 
                </button>))
            }
        </div>
    )
}

const board=(query)=>{
    return(
        board_content.filter(search_engine(query)).map((input)=>(
            <div className='inner_content text-center'>
                {console.log(input.number)}
                <Link to={"/articles/"+input.metadata.number}>   
                    <h1>{input.metadata.city}</h1> 
                    <h1>{input.metadata.content}</h1> 
                </Link>  
            </div>
        ))
    )
}

const search_engine = (query)=>(input=>
    input.metadata.city==query.city
);

export default Query