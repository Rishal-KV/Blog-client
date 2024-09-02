
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandPage from "./Pages/LandPage"
import PostPage from "./Pages/PostPage"
import ArticlePage from "./Pages/ArticlePage"
function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<LandPage/>} />
      <Route path="/feed" element={<PostPage/>}/>
      <Route path="/post" element={<ArticlePage/>}/>

    </Routes>
  </Router>
  )
}

export default App
