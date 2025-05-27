
package com.ska.SellSkill.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SsController {       
        @GetMapping("/mensagem")
        public String mensagem(@RequestParam String texto){
            return "Mensagem recebida: " + texto;
        }
        
        @GetMapping("/mensagem2")
        public String mensagem2(){
            return "escreva um texto: ";
         }
        
       
}
    
