/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.controllers;

import com.ska.SellSkill.dto.CadastroDTO;
import com.ska.SellSkill.service.CadastroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/CadastroController")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "null"}) 
public class CadastroController {

    @Autowired
    private CadastroService usuarioService;

    @PostMapping("/cadastro")
    public ResponseEntity<String> cadastrarUsuario(@RequestBody CadastroDTO usuarioDTO) {
        String resultado = usuarioService.cadastrarUsuario(usuarioDTO);
        return ResponseEntity.ok(resultado);
    }   
    
}
