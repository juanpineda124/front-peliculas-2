import React, { useEffect, useState } from 'react'
import { obtenerProductoras } from '../../services/ProductoraServices.js'
import Title from '../ui/Title.js'
import Modal from './Modal.js'

export default function Productora() {

    const [ productoras, setProductoras ] = useState([])
  useEffect(() => {
    listarProductoras()
  }, [])


   const listarProductoras = async() => {
    try {
        const { data } = await obtenerProductoras()
        setProductoras(data)
    }catch (e){
        console.log(e)
    }
} 

  return (
    <>
    <Title title={'Productoras'}/>
    <div className="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Fecha creacion</th>
      <th scope="col">Fecha modificacion</th>
      <th scope="col">Slogan</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    {
      productoras.map(({nombre, estado, fechaCreacion, fechaModificacion, slogan, descripcion}, index) => {
        return (
          <tr key={index}>
            <th scope="row">{ index + 1 }</th>
            <td>{nombre}</td>
            <td>{estado ? 'Activo': 'Inactivo'}</td>
            <td>{fechaCreacion}</td>
            <td>{fechaModificacion}</td>
            <td>{slogan}</td>
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
  Nueva productora
  </button>

 <Modal />
  </div>
</>
)
}

