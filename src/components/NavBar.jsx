import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const buttonStyle = {
    margin: '10px'
}

//

class NavBar extends React.Component{
    render(){
        return(
            <div style={{padding:'25px', display: 'flex', justifyContent: 'center', backgroundColor:'rgba(0,0,0,0'}}>
                <Link to='/'>
                    <Button variant="primary" style={buttonStyle}>About Me</Button>{' '}
                </Link>
                <Link to='/netflixSuggestions'>
                    <Button variant="primary" style={buttonStyle}>My Netflix Suggestions</Button>
                </Link>
            </div>
        )
    }
}

export default NavBar