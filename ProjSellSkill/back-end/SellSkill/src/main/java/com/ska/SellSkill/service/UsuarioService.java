/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.service;

import com.ska.SellSkill.dto.usuarioDTO;
import com.ska.SellSkill.repository.custom.UsuarioRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;


public class UsuarioService {
    @Autowired
    private UsuarioRepositoryCustom usuarioRepository;
    
    public void salvar(usuarioDTO dto){
        
        dto.setEmail("AKSJDKLASJD@GMAIL.com");
        
        usuarioRepository.inserirUsuario(dto);
        
    }
    
}
