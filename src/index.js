import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route} from 'react-router-dom'
import AboutMe from './containers/AboutMe'
import MyTopNetflixSuggestions from './containers/MyTopNetflix'
import './colors.css'
import NavBar from './components/NavBar'


const AppContainer = () =>{
    return(
        
            <>
            <BrowserRouter>
                <NavBar/>
                <Route component={AboutMe} exact path='/' />
                <Route component={MyTopNetflixSuggestions} path='/netflixSuggestions' />
            </BrowserRouter>
            </>
            
        
    )
}

ReactDOM.render(<AppContainer/>, document.querySelector('#root'))