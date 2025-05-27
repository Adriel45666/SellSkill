/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.controllers;

import com.ska.SellSkill.dto.CursoDTO;
import com.ska.SellSkill.service.CursoService;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/servico")
@CrossOrigin(origins = "*")

public class CursoController {
    
    @GetMapping("/titulo")
    public List<CursoDTO> salvar(){
        
        
        return new CursoService().getDados();
      

    }
}
        
       

