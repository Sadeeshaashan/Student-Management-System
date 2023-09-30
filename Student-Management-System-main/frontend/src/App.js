
import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';


import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

//import StudentTable from './components/StudentTable';

function App() {






  return (
    <Router>
      <Header/>
   
      <Routes>

          <Route exact path="/add"  element={<AddStudent/>} ></Route>
          <Route exact path="/"  element={<AllStudents/>} ></Route>
         
      </Routes>
    </Router>
    
  );
}



export default App;
