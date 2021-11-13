import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Vehicles from './Pages/Home/Vehicles/Vehicles';
import Navigation from './Shared/Navigation/Navigation';
import AboutPage from './Pages/Aboutpage/AboutPage';
import Orderpage from './OrderPage/Orderpage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
          </PrivateRoute>
            <Route path="/vehicles">
              <Vehicles></Vehicles>
            </Route>
            <PrivateRoute path="/orderpage/:vehicleId">
              <Orderpage></Orderpage>
          </PrivateRoute>
            

          <Route path="/login">
            <Login></Login>
            </Route>
            
            
            <Route path="/aboutpage">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/register">
            <Register></Register>
          </Route>
            

           {/* ****notfound** */}
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
          {/* ****notfound** */}
          </Switch>
        </Router>
</AuthProvider>

    </div>
  );
}

export default App;
