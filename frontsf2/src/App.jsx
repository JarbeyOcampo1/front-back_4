 import { useEffect, useState } from 'react' 
import './App.css'
import axios from 'axios'
import CarTable from './components/CarTable'
import CarForm from './components/CarForm'

function App() {
  const [car, setCar] = useState([])
  const [editingCar,setEditingCar] = useState(null) 
  
  //actualiza por cada carro nuevo
  useEffect(()=> {
    fetchCar()
  }, [])

  //crea o actualiza carro
  const handleCreateOrUpdateCar = async (carData) => {
    if (editingCar) {
      await axios.put(`http://localhost:8080/api/car/${editingCar.id}`, carData)
    } else {
      await axios.post(`http://localhost:8080/api/car`, carData)
    }
  }
  //recorre la lista de carros y retora como respuesta
  const fetchCar = async() =>{
    try {
      const response = await axios.get('http://localhost:8080/api/car')
      setCar(response.data)
    } catch (error) {
      console.log('Error al cargar los usuarios: ', error)
    }
  }
  //permite editar el carro
  const handleEditCar = (car) => {
    setEditingCar(car)
  }
  //eliminar un carro apartir de una id 
  const handleDeletecar = async(carId) => {
    await axios.delete(`http://localhost:8080/api/car/${carId}`)
    fetchCar()
  } 

  return (
    <div className='App'>
      <h1>Api carros jo</h1>
      <br/>
      <h2>Lista carros</h2>
      <CarTable cars={car} onEdit={handleEditCar} onDelete={handleDeletecar}/>
      <h2>{editingCar ? 'Editar carro' : 'Crear nuevo carro'}</h2>
      <CarForm onSubmit={handleCreateOrUpdateCar} initialCar={editingCar}/>
    </div>
  )
}
export default App
