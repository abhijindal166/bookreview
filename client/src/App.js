
import './App.css';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import react from 'react';
import Detailblog from './components/Detailblog';
import Createblog from './components/Createblog';
import Update from './components/Update';
import Navbar from './components/Navbar';
import Middle from './components/Middle';


import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Bought } from './components/Bought';
import Logout from './components/Logout';

function App() {
  return (
    <>
    <BrowserRouter>
  
  
   
     
        <Switch>
      <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
     
        <div>
     <Navbar/>
       
          <Route exact path="/explore" component={Middle} />
          <Route exact path="/home/" component={Home} />
          <Route exact path="/detail/:id" component={Detailblog} />

          <Route exact path="/create" component={Createblog} />
          <Route exact path="/update/:id" component={Update} />
          
          
       
          <Route exact path="/bought" component={Bought} />
          <Route exact path="/logout" component={Logout} />
          </div>
        </Switch>
        
       
      {/* <Footer></Footer> */}
    </BrowserRouter> 


    </>
  );
}

export default App;
