/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.controllers;

import com.ska.SellSkill.dto.UsuarioDTO;
import com.ska.SellSkill.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/UsuarioController")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/cadastro")
    public ResponseEntity<String> cadastrarUsuario(@RequestBody UsuarioDTO usuarioDTO) {
        String resultado = usuarioService.cadastrarUsuario(usuarioDTO);
        return ResponseEntity.ok(resultado);
    }
}
