import React, { useEffect, useState } from 'react'
import { obtenerTipos } from '../../services/TipoService'
import Title from '../ui/Title.js'
import Modal from './Modal'

export default function Productora() {

    const [ tipos, setTipos ] = useState([])
  useEffect(() => {
    listarTipos()
  }, [])


   const listarTipos = async() => {
    try {
        const { data } = await obtenerTipos()
        setTipos(data)
    }catch (e){
        console.log(e)
    }
} 

  return (
    <>
    <Title title={'Tipos'}/>
    <div className="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Fecha creacion</th>
      <th scope="col">Fecha modificacion</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    {
      tipos.map(({nombre, fechaCreacion, fechaModificacion, descripcion}, index) => {
        return (
          <tr key={index}>
            <th scope="row">{ index + 1 }</th>
            <td>{nombre}</td>
            <td>{fechaCreacion}</td>
            <td>{fechaModificacion}</td>
            <td>{descripcion}</td>
            <td> 
            <button type="button" class="btn btn-info">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
          </tr>
        )
      })
    }
  </tbody>
</table>
<button 
  type="button" 
  className="btn btn-outline-primary" 
  data-bs-toggle="modal" 
  data-bs-target="#exampleModal" 
  data-bs-whatever="@mdo">
  Nuevo Tipo
  </button>

  <Modal />
  </div>
</>
)
}