import './App.css';
import Nav from './components/nav'
import Footer from './components/Footer';
import AddStudent from './components/addStudent';
import StudentList from './components/studentList';
import UpdateStudent from './components/UpdateComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<StudentList />} />
          <Route path='/add' element={<AddStudent />} />
          <Route path='/student/:id' element={<UpdateStudent />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
