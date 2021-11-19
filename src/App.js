import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddServices from './Pages/Home/AddServices/AddServices/AddServices';
import AddReview from './Pages/Home/AddReview/AddReview';
import AboutUs from './Pages/AboutUS/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Pay from './Pages/Pay/Pay';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/booking">
              <Booking />
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/addServices">
              <AddServices />
            </PrivateRoute>
            <PrivateRoute path="/addReviewes">
              <AddReview />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
