import { useState } from "react"

function CarForm ({onSubmit}){

    const [marca,setMarca]=useState('')
    const [modelo,setModelo]=useState('')
    const [placa,setPlaca]=useState('')
    const [precio,setPrecio]=useState('')
    const [estado,setEstado]=useState('')
    const [kilometraje,setKilometraje]=useState('')

    const handleMarcaChange = (event) =>{
        setMarca(event.target.value)
    }
    const handleModeloChange = (event) =>{
        setModelo(event.target.value)
    }
    const handlePlacaChange = (event) =>{
        setPlaca(event.target.value)
    }
    const handlePrecioChange = (event) =>{
        setPrecio(event.target.value)
    }
    const handleEstadoChange = (event) =>{
        setEstado(event.target.value)
    }
    const handleKilometrajeChange = (event) =>{
        setKilometraje(event.target.value)
    }

    //crear la funcion que envia el formulario a la base de datos
    const handleSubmit =(event) =>{
        event.preventDefault()
        onSubmit({marca,modelo,placa,precio,estado,kilometraje})
        setMarca('')
        setModelo('')
        setPlaca('')
        setPrecio('')
        setEstado('')
        setKilometraje('') 
    }   

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Marca" value={marca} onChange={handleMarcaChange} required/>
            <input type="text" placeholder="Modelo" value={modelo} onChange={handleModeloChange} required/>
            <input type="text" placeholder="Placa" value={placa} onChange={handlePlacaChange} required/>
            <input type="text" placeholder="Precio" value={precio} onChange={handlePrecioChange} required/>
            <input type="text" placeholder="Estado" value={estado} onChange={handleEstadoChange} required/>
            <input type="text" placeholder="Kilometraje" value={kilometraje} onChange={handleKilometrajeChange} required/>
            <button type="submit">Agregar</button>
        </form>
    )
}
export default CarForm
