import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./select.css"
import board_content from '../../../data/board_content.json';
import tag_list from '../../../data/tag_list.json';

const Query=()=>{
    return(
        <div className="row">
            {["후기", "매칭"].map((category) => {
                return(
                    <div className="p-3 bg-light w-50">
                        <div class="d-flex mb-3 bg-info align-items-center">
                            <div class="me-auto p-2"><h1>{category}게시판!</h1></div>
                            <div class="p-2 h-100"><Link to='articles'>more!</Link></div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">number</th>
                                <th scope="col">author</th>
                                <th scope="col">title</th>
                                <th scope="col">date</th>
                                </tr>
                            </thead>
                            <tbody>
                            {board_content.slice(0,10).map(content=>
                                <tr onClick={() => {window.location.href="articles/"+content["number"]}}
                                    style = {{cursor:"pointer"}}>
                                    <th scope="row">{content["number"]}</th>
                                    <td>{content["author"]}</td>
                                    <td>{content["title"]}</td>
                                    <td>{content["date"]}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                )
            })}
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

export default Query