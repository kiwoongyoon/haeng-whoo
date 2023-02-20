import { useParams } from "react-router-dom";
const data = {
    1:{
        number:1,
        title:'글 제목1',
        author:'박효리',
        content:'아무 글',
        date:'2023-01-14',
        count: 33,
        country: '영국',
        tag: '휴양지',
    },
    2:{
        number:2,
        title:'글 제목2',
        author:'홍길동',
        content:'아무 글',
        date:'2023-01-15',
        count: 31,
        country: '일본',
        tag: '유적지',
    },
};


const MatchingArticle = ()=>{
    const params = useParams();//url파라미터를 useParams Hook으로 조회한다.
    const read =data[params.id]; 
    return(
        <div className = "board_wrap">
        <div className="board_title">
            <strong>여행메이트 매칭</strong>
            <p>행후에서 당신의 여행 메이트를 찾아보세요!</p>
        </div>
        <div className="board_view_wrap">
            <div className="board_view">
                <div className="title">
                    {read.title}
                </div>
                <div className="info">
                    <dl>
                        <dt>번호</dt>
                        <dd>{read.number}</dd>
                    </dl>
                    <dl>
                        <dt>글쓴이</dt>
                        <dd>{read.author}</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>{read.date}</dd>
                    </dl>
                    <dl>
                        <dt>조회</dt>
                        <dd>{read.count}</dd>
                    </dl>
                    <dl>
                        <dt>여행지</dt>
                        <dd>{read.country}</dd>
                    </dl>
                    <dl>
                        <dt>태그</dt>
                        <dd>{read.tag}</dd>
                    </dl>
                </div>
                <div className="content">
                    {read.content}
                </div>
            </div>
            <div className="button_wrap">
                <a href="/articles" className="on">목록</a>
                <a href="/edit">수정</a>
            </div>
        </div>
    </div>

    );
    
};

export default MatchingArticle;