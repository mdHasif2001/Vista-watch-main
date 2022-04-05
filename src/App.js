import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/DashBoard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Review from './Components/Review/Review';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />
      </Routes>
    </div>
  );
}

export default App;
