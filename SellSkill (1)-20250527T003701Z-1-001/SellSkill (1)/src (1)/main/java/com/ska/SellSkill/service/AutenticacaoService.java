/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.service;

import com.ska.SellSkill.dto.AutenticacaoDTO;
import com.ska.SellSkill.dto.usuarioDTO;
import com.ska.SellSkill.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

public class AutenticacaoService {

   @Autowired
    private UsuarioRepository repo;
   
   
    private String usuario = "adriel";
    private String senha = "123";

    public boolean autenticar(usuarioDTO dto) {
       
        
            this.repo.inserirUsuario(dto);
        return true;
    }
}


