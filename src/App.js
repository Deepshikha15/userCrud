import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import ViewUser from './components/user/ViewUser';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={ViewUser}/>
          <Route component={NotFound}/>
        </Switch>
      
    </div>

    </Router>
    
  );
}

export default App;
