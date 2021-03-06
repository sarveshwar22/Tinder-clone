import React,{useState,useEffect} from 'react'
import './Tindercards.css'
import Tindercard from "react-tinder-card"
import axios from './axios.js'

function Tindercards() {

    const [people, setPeople]= useState([]);

    useEffect(()=>{
        async function fetchData()
        {
            const req = await axios.get("/tinder/cards");
            setPeople(req.data);
        }
        fetchData();
    },[])

    const swiped = (direction,nameToDelete) => {
        console.log("removing: "+nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) =>{
        console.log( name +"left the screen!");
    }



    return (
        <div className="tindercards">
            <div className="tinderCards_cardContainer">
    
            {
                people.map(person => (
                    <Tindercard
                    
                    className="swipe"
                    key={CharacterData.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir,person.name)}
                    onCardLeftScreen={()=> outOfFrame(person.name)}
                    
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                        
                    </Tindercard>
                ))
            }

            </div>            
            
        </div>
    )
}

export default Tindercards
