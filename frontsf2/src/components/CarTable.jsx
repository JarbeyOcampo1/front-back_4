import CarRow from "./CarRow"

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