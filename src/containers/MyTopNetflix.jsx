import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ShowCard1, ShowCard2, ShowCard3 } from '../api/ShowData'

const CardStyle = {
    width: '80%',
    display:'flex',
    justifyContent: 'center',
    textAlign: 'center'
}

const MovieCards = () => {
    return(
        <CardDeck style={CardStyle}>
            <Card >
                <Card.Header>The Sinner</Card.Header>
                <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6XfZkG4WZqkWMvzVo3d7bS9M43GidTamc7kcfpTri8JC_Jdea" />
                <Card.Footer>
                    <ShowCard1/>
                </Card.Footer>
            </Card>
            <Card >
                <Card.Header>The Witcher</Card.Header>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg" />
                <Card.Footer>
                    <ShowCard2/>
                </Card.Footer>
            </Card>
            <Card >
                <Card.Header>Demon Slayer: Kimetsu No Yaiba</Card.Header>
                <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg" />
                <Card.Footer>
                    <ShowCard3/>                    
                </Card.Footer>
            </Card>
        </CardDeck>
    )

}


const MyTopNetflixSuggestions= () =>{
    return(
        <div style={{display: 'flex', justifyContent: 'center', paddingBottom:'50px', height:'100%'}}>
            <MovieCards/>
        </div>
    )
}

export default MyTopNetflixSuggestions