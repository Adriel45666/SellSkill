/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.controllers;

import com.ska.SellSkill.dto.AutenticacaoDTO;
import com.ska.SellSkill.service.AutenticacaoService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author SKA
 */


@RestController
@RequestMapping("/autenticacaoController")
@CrossOrigin(origins = "*")
public class AutenticacaoController {      
        @PostMapping("/login")
        public boolean mensagem(@RequestBody AutenticacaoDTO dto){
            
            
            AutenticacaoService service = new AutenticacaoService();
            
            return service.autenticar(dto);
           
        }
        
        @GetMapping("/mensagem2")
        public String mensagem2(){
            return "escreva um texto: ";
         }
        
       
}
    


