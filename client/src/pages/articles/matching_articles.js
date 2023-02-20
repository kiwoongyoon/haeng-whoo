import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import nation_list from "../../data/nation_list.json";
import sorting_list from "../../data/sorting_list.json";
import tag_list from "../../data/tag_list.json";
import board_content from "../../data/board_content.json";
import './articles.css';


const MatchingArticles = ()=>{  
    return(
        <div className = "board_wrap">
        <div className="board_title">
            <div className = "options">
                <div className = "country_option">
                <select>
                    {nation_list.map((list)=>(<option value={list["name"]}>{list["name"]}</option>))}
                </select>
                </div>
                <div className = "sorting_option">
                <select>
                    {sorting_list.map((list)=>(<option value={list["en"]}>{list["ko"]}</option>))}
                </select>
                </div>
                <div className = "tag_option">
                <select>
                    {tag_list.map((list)=>(<option value={list["en"]}>{list["ko"]}</option>))}
                </select>
                </div>
            </div>
            <div className="button_wrap">
                <a href="/write" className="on">작성하기</a>
                <a href="/" className="on">집으로</a>
            </div>
            <strong>여행메이트 매칭</strong>
            <p>행후에서 당신의 여행 메이트를 찾아보세요!</p>
        </div>
        <div className="board_list_wrap">
            <div className="board_list">
                <div className="top">
                    <div className="num">번호</div>
                    <div className="title">제목</div>
                    <div className="writer">글쓴이</div>
                    <div className="date">작성일</div>
                    <div className="count">조회</div>
                </div>
                <div>
                    <div className="num">2</div>
                    <div className="title"><a href ="articles/2">글 제목</a></div>
                    <div className="writer">홍길동</div>
                    <div className="date">2023.01.15</div>
                    <div className="count">31</div>
                </div>
                <div>
                    <div className="num">1</div>
                    <div className="title"><a href ="articles/1">글 제목1</a></div>
                    <div className="writer">박효리</div>
                    <div className="date">2023.01.14</div>
                    <div className="count">33</div>
                </div>
                {board_content.map((content)=>(
                    <div>
                        <div className="num">{content["number"]}</div>
                        <div className="title"><Link to={""+content["number"]}>{content["title"]}</Link></div>
                        <div className="writer">{content["author"]}</div>
                        <div className="date">{content["date"]}</div>
                        <div className="count">{content["count"]}</div>
                    </div>
                ))}
            </div>
            <div className="board_page">
                <a href="#" className="button first">&gt;&gt;</a>
                <a href="#" className="button prev">&gt;</a>
                <a href="#" className = "num on">1</a>
                <a href="#" className = "num">2</a>
                <a href="#" className = "num">3</a>
                <a href="#" className = "num">4</a>
                <a href="#" className = "num">5</a>
                <a href="#" className="button last">&lt;&lt;</a>
                <a href="#" className="button next">&lt;</a>
            </div>
        </div>
        <div className="search_field">
            <input type="text" placeholder="제목으로 검색해보세요."></input> 
            <button>검색</button>
        </div>
    </div>
    )

}

export default MatchingArticles;