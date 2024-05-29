package com.backend2.bakend2.Controllers;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.Collections;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import com.backend2.bakend2.Controller.CarController;
import com.backend2.bakend2.Model.Car;
import com.backend2.bakend2.Repository.CarRepository;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.http.MediaType;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;



@WebMvcTest(CarController.class)
public class CarControllerTests {
    
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext webApplicationContext;
    @MockBean
    private CarRepository carRepository;
    
    @BeforeEach
    public void setup() {
        this.mockMvc=MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void testGetAll() throws Exception{
        when(carRepository.findAll()).thenReturn(Collections.emptyList());
        mockMvc.perform(get("/api/cars"))
            .andExpect(status().isOk())
            .andExpect(content().json("[]"));
        verify(carRepository,times(1)).findAll();
    }

    @Test
    public void testGetById() throws Exception{
        Car car=new Car();
        car.setId(1L);
        when(carRepository.findById(1L)).thenReturn(Optional.of(car));
        mockMvc.perform(get("/api/cars/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(carRepository,times(1)).findById(1L);
    }

    @Test
    public void testCreatCar() throws Exception{
        Car car=new Car();
        car.setId(1L);
        when(carRepository.save(any(Car.class))).thenReturn(car);
        mockMvc.perform(post("/api/cars")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"id\":null, \"marca\": null, \"modelo\": null, \"placa\": null, \"precio\": null, \"estado\": null, \"kilometraje\": null}"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.id").value(1));
        verify(carRepository,times(1)).save(any(Car.class));
    }

    @Test
    public void testUpdateCar() throws Exception{
        Car car=new Car();
        car.setId(1L);
        when(carRepository.findById(1L)).thenReturn(Optional.of(car));
        mockMvc.perform(put("/api/cars")
        .contentType(MediaType.APPLICATION_JSON)
        .content("{\"id\":null, \"marca\": null, \"modelo\": null, \"placa\": null, \"precio\": null, \"estado\": null, \"kilometraje\": null}"))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").value(1));
        verify(carRepository,times(1)).findById(1L);
    }

    @Test
    public void testDeleteCar() throws Exception{
        doNothing().when(carRepository).deleteById(1L);
        mockMvc.perform(delete("/api/cars/1"))
            .andExpect(status().isOk());
        verify(carRepository, times(1)).deleteById(1L);
    }

}
