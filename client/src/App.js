import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Articles from './pages/articles/articles';
import Article from './pages/article/article';
import Main from './pages/main/main';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/articles/:id' element={<Article/>}/>
          {/* <Route path='/write' element={<Write/>}/>
          <Route path='/edit' element={<Edit/>}/> */}
          {/* <Route path='/login' element={<Login/>}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
