package com.backend2.bakend2.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend2.bakend2.Model.Car;

public interface CarRepository  extends JpaRepository<Car,Long>{

}
