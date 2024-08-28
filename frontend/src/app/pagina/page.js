"use client"
import Link from "next/link";
import Button from "../componentes/button";
import Title from "../componentes/titulo";
import CheckBox from "@/app/componentes/CheckBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./pagina.module.css" ;

export default function home (){
    let [cuenta, setCuenta]= useState(0);
    let [nombre, setNombre] = useState("Anonimo")
    let [box, setBox] = useState(false)
    const [cambiarTexto, setCambiarTexto] = useState("incrementar")
    

    function modoOscuro(){
        var elemento = document.body;
        elemento.classList.toggle(styles.variante_color);
    }
    /*Hacer un botton para poner esta funcion y cuando el boton esta presionado el texto dice "cambiar al modo claro" y cuando no lo esta "cambiar al modo claro" y que se cambie */
    

    /*
    const router = useRouter();
    const [contador, setContador] = useState(5);
    function cambioPantalla(){
        if(contador >5){
            // con el push queda el hisrorial
            router.push("/usuarios");
            // con el replace NO hay historial (util para el login)
            router.replace("/usuarios");
        }
        router.push("/costos");
    }
*/


    function incrementar(){
        setCuenta(++cuenta)
    }

    function modificarNombre(){
        setNombre(document.getElementById("ingresoNombre").value)
    }

    function funcionCambio(e) {
        setBox(e.target.checked)
        if (box == true){
            setCambiarTexto("incrementar")
        } else {
            setCambiarTexto("decrementar")
        }
    }
    function decrementar(){
        setCuenta(--cuenta)
    }
    /* if funcion cambio ==  true llamar funcion incrementar, si es false llamar a  decrementar*/
    function final(){
        if (box == true){
            decrementar()
        } else {
            incrementar()
        }
    }



    /*useEffect(
        function(){
            alert("HOLA PUTAS")
        },
        []
    )
    */
    useEffect(
        function(){
            setCuenta(cuenta + 5)
        }, [nombre]
    )

    return(
        <div>
            <Title Titulo="Whatsapp"></Title>
            <h2 id= "contador">Contador: {cuenta}</h2>
            <Button onClick={final} text={cambiarTexto} ></Button>
            <h3>Hola {nombre}</h3>
            <input type="text" placeholder="Ingrese nombre:" id="ingresoNombre"></input>
            <Button onClick={modificarNombre} text="modificar"></Button>
            <Button variante="primaria" text="primario"></Button>
            <Button variante="secundaria" text="secundario"></Button>  
            <CheckBox id="id" onChange={funcionCambio}></CheckBox>
        </div>
    )

}