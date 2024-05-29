*** Entrega numero 4 para 
-En este git esta el back and front Sobre la Api rest con una entida 
-------------
* Dentro del backend tenemos
-Las carpetas Controller, Config, Model, Repository
-Las cuales tiene las estructuras de la Api rest
```Java
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
```
------
*Esta es la ultima actualizacion sobre la api 
-El front tenemos CarFrom.jsx, CarRow.jsx, CarTable.jsx y App.css
esto es algo por encima pero en si seria totalmente el proyecto 
