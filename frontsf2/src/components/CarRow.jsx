const CarRow = ({car,onEdit,onDelete}) => {
    const handleEdit = () =>{
        onEdit(car)
    }

    const handleDelete = () =>{
        onDelete(car.id)
    }
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