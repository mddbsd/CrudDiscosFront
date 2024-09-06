import React, {useState, useEffect} from 'react'
import { listaDiscos } from '../servicios/DiscoServicio';

const ComponenteDisco = () => {
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

    useEffect(() => {
        listaDiscos().then((respuesta) => {
            setDisco(respuesta.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

  return (
    <div className='container'>
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

export default ComponenteDisco