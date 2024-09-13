import React, {useState, useEffect} from 'react'
import { listaDiscos } from '../servicios/DiscoServicio';
import { useNavigate } from  'react-router-dom'
const ComponenteListaDiscos = () => {
    /*const dummyData =[
        {
            "id": 1,
            "artista": "artista1",
            "titulo": "el mejor disco",
            "duracion": 30,
            "cod": "abc123"
        },
        {
            "id": 2,
            "artista": "artista2",
            "titulo": "disco no tan bueno",
            "duracion": 30,
            "cod": "bca123"
        },
        {
            "id": 3,
            "artista": "artista3",
            "titulo": "masomenos bueno",
            "duracion": 30,
            "cod": "aaa123"
        }
    ]*/

    const [disco, setDisco] = useState([]);
    const navegador = useNavigate();

    useEffect(() => {
        listaDiscos().then((respuesta) => {
            setDisco(respuesta.data);
        }).catch(error => {
            console.error(error);
        })
    },[])
    function agregarDisco(){
        navegador('/agrega-disco')
    }
  return (
    <div className='container'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={agregarDisco}>Agregar Disco</button>
        <table className="table-fixed border-collapse border">
            <thead className='border'>
                <tr>
                    <th className='border-slate-300'>Id</th>
                    <th>Artista</th>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Codigo</th>
                </tr>
            </thead>
            <tbody>
               {
                disco.map(disco => 
                    <tr key={disco.id}>
                        <td>{disco.id}</td>
                        <td>{disco.artista}</td>
                        <td>{disco.titulo}</td>
                        <td>{disco.duracion}</td>
                        <td>{disco.cod}</td>
                    </tr>
                )
               }
            </tbody>
        </table>
    </div>
  )
}

export default ComponenteListaDiscos