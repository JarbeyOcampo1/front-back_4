package com.backend2.bakend2.Controller;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@ControllerAdvice
@OpenAPIDefinition(
    info=@Info(
        title="Api carro jo",
        version = "1.0",
        description = "Api para generar,modificar y eliminar diferentes automoviles"
    ),
    tags = {
        @Tag(
            name = "Base Controller",
            description = "Base Controller para la api, este controlador se extendera a todos los endpoints del api"


        )
    }
)
public class ApiBaseController {
    
}
