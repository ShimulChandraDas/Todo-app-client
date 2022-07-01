import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calender from './Pages/Calender/Calender';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Todo from './Pages/Todo/Todo';
import Navbar from './shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Footer from './shared/Footer';
import Contact from './Pages/Extra/Contact';
import About from './Pages/Extra/About';
import Blogs from './Pages/Extra/Blogs';

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/completeTask' element={<CompletedTask />}></Route>
        <Route path='/calender' element={<Calender />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
