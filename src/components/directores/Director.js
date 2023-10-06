import React, { useEffect, useState } from 'react'
import { obtenerDirectores } from '../../services/DirectorService'
import Title from '../ui/Title.js'
import Modal from './Modal'

export default function Productora() {

    const [ directores, setDirectores ] = useState([])
  useEffect(() => {
    listarDirectores()
  }, [])


   const listarDirectores = async() => {
    try {
        const { data } = await obtenerDirectores()
        setDirectores(data)
    }catch (e){
        console.log(e)
    }
} 

  return (
    <>
      <Title title={'Directores'}/>
    <div className="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha creacion</th>
      <th scope="col">Fecha modificacion</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    {
      directores.map(({nombre, estado, fechaCreacion, fechaModificacion}, index) => {
        return (
          <tr key={index}>
            <th scope="row">{ index + 1 }</th>
            <td>{nombre}</td>
            <td>{estado ? 'Activo': 'Inactivo'}</td>
            <td>{fechaCreacion}</td>
            <td>{fechaModificacion}</td>
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
  Nuevo Director
  </button>
    <Modal />

  </div>
  </>
)
}