
import { useParams } from "react-router-dom";
const data = {
    1:{
        number:1,
        title:'글 제목1',
        author:'박효리',
        content:'아무 글',
        date:'2023-01-14',
        count: 33,
    },
    2:{
        number:2,
        title:'글 제목2',
        author:'홍길동',
        content:'아무 글',
        date:'2023-01-15',
        count: 31,
    },
};


const Article = ()=>{
    const params = useParams();//url파라미터를 useParams Hook으로 조회한다.
    const read =data[params.id]; 
    return(
        <div class = "board_wrap">
        <div class="board_title">
            <strong>여행 후기</strong>
            <p>행후에서 당신의 여행 이야기를 작성해보세요!</p>
        </div>
        <div class="board_view_wrap">
            <div class="board_view">
                <div class="title">
                    {read.title}
                </div>
                <div class="info">
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
                </div>
                <div class="content">
                    {read.content}
                </div>
            </div>
            <div class="button_wrap">
                <a href="/articles" class="on">목록</a>
                <a href="/edit">수정</a>
            </div>
        </div>
    </div>

    );
    
};

export default Article;