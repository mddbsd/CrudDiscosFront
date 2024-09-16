import React, { useState } from 'react'
import {guardaDiscoServicio} from '../servicios/DiscoServicio'
import { useNavigate } from 'react-router-dom'

export default function ComponenteDisco() {

    let classNameError = "shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    const [artista, setArtista] = useState('')
    const [titulo, setTitulo] = useState('')
    const [duracion, setDuracion] = useState('')
    const [cod, setCodigo] = useState('')

    const [errores, setErrores] = useState({
        artista: '',
        titulo: '',
        duracion: '',
        cod:''
    })

    const navegador = useNavigate()

    function guardaDisco(e){
        e.preventDefault();

        if(validaFormulario()){
            const disco = {titulo, artista, cod, duracion}
            console.log(disco)
    
            guardaDiscoServicio(disco).then((respuesta) =>{
                console.log(respuesta.data);
                navegador('/discos')
            })
        }
 
    }

    function validaFormulario(){
        let valido = true

        const erroresCopia = {... errores}

        if(artista.trim()){
            erroresCopia.artista = '';
        } else {
            erroresCopia.artista = 'Se requiere artista';
            valido = false;
        }

        if(titulo.trim()){
            erroresCopia.titulo = '';
        } else {
            erroresCopia.titulo = 'Se requiere titulo';
            valido = false;
        }

        if(duracion.trim()){
            erroresCopia.duracion = '';            
        } else {
            erroresCopia.duracion = 'Se requiere duracion';
            valido = false;
        }

        if(cod.trim()){
            erroresCopia.cod = '';
        } else {
            erroresCopia.cod = 'Se requiere codigo'
            valido = false;
        }

        setErrores(erroresCopia);

        return valido
    }
  return (
    <div>
        <h2>Agregar Disco</h2>
        <form>
            <label>Artista: </label>
            <input type='text' 
                   placeholder='ingrese artista' 
                   name='artista'
                   value={artista}
                   className= {`${errores.artista ? classNameError : ''}`}
                   onChange={(e) => setArtista(e.target.value)}>     
            </input>
            {errores.artista && <div className=''>{errores.artista}</div>}
            <label>Titulo: </label>
            <input type='text' 
                   placeholder='ingrese titulo' 
                   name='titulo'
                   value={titulo}
                   className={`${errores.titulo ? classNameError : ''}`}
                   onChange={(e) => setTitulo(e.target.value)}>     
            </input>
            {errores.titulo && <div className=''>{errores.titulo}</div>}
            <label>Duracion: </label>
            <input type='text' 
                   placeholder='ingrese duracion' 
                   name='duracion'
                   value={duracion}
                   className={`${errores.duracion ? classNameError : ''}`}
                   onChange={(e) => setDuracion(e.target.value)}>     
            </input>
            {errores.titulo && <div className=''>{errores.titulo}</div>}
            <label>Codigo: </label>
            <input type='text' 
                   placeholder='ingrese codigo' 
                   name='cofigo'
                   value={cod}
                   className={`${errores.cod ? classNameError : ''}`}
                   onChange={(e) => setCodigo(e.target.value)}>     
            </input>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={guardaDisco}>Agregar</button>
        </form>
    </div>

  )
}
