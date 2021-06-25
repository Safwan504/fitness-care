import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import EnrollCourse from './Components/EnrollCourse/EnrollCourse/EnrollCourse';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyCourses from './Components/MyCourses/MyCourses';
import AllServices from './Components/AllServices/AllServices';
import AddService from './Components/AddService/AddService';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/enroll/:id">
          <EnrollCourse/>
        </PrivateRoute>
        <PrivateRoute path="/mycourses">
          <MyCourses/>
        </PrivateRoute>
        <PrivateRoute path="/allServices">
          <AllServices/>
        </PrivateRoute>
        <PrivateRoute path="/addServices">
          <AddService/>
        </PrivateRoute>


        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
