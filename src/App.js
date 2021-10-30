import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
// import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/Context/AuthProvider';
import MyOrders from './components/MyOrders/MyOrders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddanItem from './components/AddanItem/AddanItem';

function App() {
  return (
    <div>
      {/* context with router */}
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/addItem">
              <AddanItem />
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            {/* <Route path="*">
           <NotFound />
         </Route> */}
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;