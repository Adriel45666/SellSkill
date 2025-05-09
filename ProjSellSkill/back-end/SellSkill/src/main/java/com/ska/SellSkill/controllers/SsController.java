/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author SKA
 */
@RestController
@RequestMapping("/api")
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
    
