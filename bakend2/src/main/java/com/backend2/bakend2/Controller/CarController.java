package com.backend2.bakend2.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.backend2.bakend2.Model.Car;
import com.backend2.bakend2.Repository.CarRepository;



@RestController
@RequestMapping("api/car")
public class CarController {

    @Autowired
    private CarRepository carrepository;

    //obtener todos los carros
    @GetMapping()
    public List<Car> getAll(){
        return carrepository.findAll();
    }
    //obtener por id
    @GetMapping("/{id}")
    public Car getById(@PathVariable("id") Long id){
        return carrepository.findById(id).orElse(null);
    }
    //crear carro
    @PostMapping()
    public Car updatecar(@RequestBody Car car){
        return carrepository.save(car);
    }
    //actualizar carros 
    @PutMapping("/{id}")
    public Car updatecar(@PathVariable("id") Long id, @RequestBody Car car){
        car.setId(id);
        return carrepository.save(car);
    }
    //Borrar carros
    @DeleteMapping("/{id}")
    public void deletecar(@PathVariable("id") Long id){
        carrepository.deleteById(id);
    }
}
