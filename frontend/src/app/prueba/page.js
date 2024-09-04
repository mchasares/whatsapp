"use client"
import { useEffect } from "react";
import { useSocket } from "../hooks/useSocket";
import Button from "../componentes/button";

export default function pruebbaaa(){
    const{socket, isConnected} = useSocket();
    
    useEffect(() => {
        if(!socket) return;
        socket.on('pingAll', (data) =>{
            console.log("me llego al evento pinAll mica", data)
        })
    }, [socket, isConnected]);

    function boton(){
        socket.emit('pingAll', {message: "hola soy mica"})
    }
    
    return(
        <>
        <h1>Hola es la pruebaaa</h1>
        <Button onClick={boton} text="enviar pinAll"></Button>
        
        </>
    )
}