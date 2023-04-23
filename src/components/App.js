// create your App component here
import React, {useEffect, useState} from 'react'


function App (){
   const [image,setImage]=useState([])
    useEffect(()=>{
          fetch("https://dog.ceo/api/breeds/image/random")
          .then((rec)=>rec.json())
          .then((data)=>{
            setImage(data.message)
          })
        
    },[]);


    return (
        <div>
            <p>Loading...
            </p>
           
         <img src={image} key={image} alt='ARandom Dog'></img>
              
        </div>
    );
}

export default App