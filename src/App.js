import logo from './logo.svg';
import './App.css';

import {useState,useEffect} from "react"

function App() {

  let [boton,setBoton] = useState(0)

  useEffect (function(){
    fetch("https://porra-server.herokuapp.com/usuarios/registro",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({mail:"diegojarautaibanez@gmail.com",nombre:"Diego",password: "12345"}),
      }).then((res)=>res.json()).then((res)=>{
        console.log(res)
      })
      
  },[boton])

  function cambio() {
    setBoton(boton+1)
  }

  return (<>
     <button  onClick={cambio}>Dale</button>
  </>);
}

export default App;
