import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Articles from './pages/articles/articles';
import Article from './pages/article/article';
import Main from './pages/main/main';
import MatchingArticles from './pages/articles/matching_articles';
import MatchingArticle from './pages/article/matching_article';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/articles/:id' element={<Article/>}/>
          <Route path='/matching_articles' element={<MatchingArticles/>}/>
          <Route path='/matching_articles/:id' element={<MatchingArticle/>}/>
          {/* <Route path='/write' element={<Write/>}/>
          <Route path='/edit' element={<Edit/>}/> */}
          {/* <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
