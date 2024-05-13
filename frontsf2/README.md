## ESTE ARCHIVO GITHUB TAMBIEN CONTIENE EL BANCKEND Y EL EJERCICIO CON FIREBASE

## PRIMERA ENTREGA DEL FRONT DE LA API 

Este es el primer front que hacemos en clase respecto a la api 
------
# Carpeta src 
Dentro de esta carpeta tenemos el funcionamiento del front usamos:

*App.jsx 
*main.jsx
*La carpeta componentes esta la estructura del front que contiene los: 
-CarFrom.jsx
-CarRow.jsx
-CarTable.jsx

la carpeta CarFrom.jsx contiene: 
``` JavaScript
import { useState } from "react"

function CarForm ({onSubmit}){
    //funciones que contiene la api 
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
    //contiene el boton para agregar usuario y las casillas para ingresar la informacion
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
```
------
La carpeta CarRow.jsx contiene: 
```JavaScript
//funciones para editar un carro y eliminar un carro
const CarRow = ({car,onEdit,onDelete}) => {
    const handleEdit = () =>{
        onEdit(car)
    }

    const handleDelete = () =>{
        onDelete(car.id)
    }
    //celdas para contener datos de carro y botones para editar y eliminar 
    return(
        <tr>
            <td>{car.marca}</td>
            <td>{car.modelo}</td>
            <td>{car.placa}</td>
            <td>{car.precio}</td>
            <td>{car.estado}</td>
            <td>{car.kilometraje}</td>
            <td>
                <button onClick={handleEdit}>editar 🖋</button>
                <button onClick={handleDelete}>Eliminar 🗑</button>
            </td>
        </tr>//table row
    )
}
export default CarRow
```
------
La carpeta CarRow.jsx contiene: 
```JavaScript
import CarRow from "./CarRow"
//codigo html para encabezado de las funciones 
function CarTable({cars,onEdit,onDelete}){

    return (       
        <table>
            <thead>
                <tr>
                    <th>MARCAS</th>
                    <th>MODELO</th>
                    <th>PLACA</th>
                    <th>PRECIO</th>
                    <th>ESTADO</th>
                    <th>KILOMETRAJE</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car) =>(
                    <CarRow key={car.id} car={car} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </tbody>
        </table>
    )
}
export default CarTable
```

# Ahora esto es como lo mas fundamental del api pero el App.jsx permite que se vea el codigo en JavaScript
Este es mi front es basico, pero ya lo e probado y funciona
-Pero contiene algo es que cuando quiera editar un carro debo volver a copiar los datos del carro y modificar el dato que quiera manipular el codigo no tiene en este momento de tener la capacidad para importar esos datos para ser modificados 













# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

