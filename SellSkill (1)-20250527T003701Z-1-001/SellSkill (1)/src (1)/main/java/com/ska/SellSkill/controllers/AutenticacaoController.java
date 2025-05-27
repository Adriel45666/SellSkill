/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.controllers;

import com.ska.SellSkill.dto.AutenticacaoDTO;
import com.ska.SellSkill.dto.usuarioDTO;
import com.ska.SellSkill.repository.UsuarioRepository;
import com.ska.SellSkill.service.AutenticacaoService;
import org.springframework.beans.factory.annotation.Autowired;
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
    
    @Autowired
    private AutenticacaoService service;
    
    
        @GetMapping("/login")
        public boolean mensagem(){
            
              usuarioDTO usuarioDTO = new usuarioDTO();
                usuarioDTO.setNome_completo("ksaljdklasjd");
                usuarioDTO.setSenha("ksaljdklasjd");
        
                
                
        
            AutenticacaoService service = new AutenticacaoService();
            
            return service.autenticar(usuarioDTO);
           
        }
        
        @GetMapping("/mensagem2")
        public String mensagem2(){
            return "escreva um texto: ";
         }
        
       
}
    


