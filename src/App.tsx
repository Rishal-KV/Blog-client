
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './component/Signup';
import Login from './component/Login';
import PostPage from './pages/PostPage';
import ArticlePage from './pages/ArticlePage';
import SavedArticlePage from './pages/SavedArticlePage';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './component/EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/' element={<PostPage/>}/>
        <Route path='/article/:id' element={<ArticlePage/>}/>
        <Route path='/saved' element={<SavedArticlePage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/editprofile' element={<EditProfile/>}/>
      </Routes> 
    </Router>
  );
}

export default App;
