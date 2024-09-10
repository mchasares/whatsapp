"use client"
import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";
import Button from "../componentes/button";
import styles from "./page.module.css"

export default function pruebbaaa(){
    const{socket, isConnected} = useSocket();
    const[message, setMessage]= useState("");
    
    useEffect(() => {
        if(!socket) return;
        socket.on('pingAll', (data) =>{
            console.log("me llego al evento pinAll mica", data)
        })

        socket.on('newMessage', (data) => {
            console.log("Mensaje de la sala: ", data); 
        })

    }, [socket, isConnected]);

    function boton(){
        socket.emit('pingAll', {message: "hola somos mica y may"})
    }

    function enviar(){
        socket.emit('sendMessage', {message: message})
    }

    function conectar(){
        socket.emit('joinRoom', {room: "Integilentes"})
    }


    return(
        <>
        <body className={styles.body}>
            <header className={styles.header}>
                <h1>Uarap</h1>
            </header>
            <p>Envie sus mensajitos 4 all the pipol u love </p>
            <Button onClick={boton} text="enviar pinAll"></Button>
            <Button onClick={conectar} text="conectar"></Button>
            <Button onClick={enviar} text="enviar"></Button>
            <input onChange={(event) => setMessage(event.target.value)}></input>
        </body>
        </>
    )
}