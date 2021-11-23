import React from 'react';
import {BrowserRouter as AppRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Drop from './components/Drop';
import Cards from './components/Cards';
import CountryDetails from './pages/CountryDetails';



const Router  = () => {
    return (
     <AppRouter>
         
         <Route exact path="/" component={Home} />
         <Route path="/search" component={Search} />        
         <Route path="/drop" component={Drop} />        
         <Route path="/cards" component={Cards} />        
         <Route path="/countryDetails" component={CountryDetails} />        

         
         <hr/>
     </AppRouter>
    );
}

export default Router ;