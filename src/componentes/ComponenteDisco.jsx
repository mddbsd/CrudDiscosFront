import React from 'react'

const ComponenteDisco = () => {
    const dummyData =[
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
    ]


  return (
    <div>
        <h1 className="text-3xl font-bold underline"> ASd </h1>
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Artista</th>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Codigo</th>
                </tr>
            </thead>
            <tbody>
               {
                dummyData.map(disco => 
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