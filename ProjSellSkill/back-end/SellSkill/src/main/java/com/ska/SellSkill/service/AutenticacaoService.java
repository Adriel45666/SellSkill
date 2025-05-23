/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.service;

import com.ska.SellSkill.dto.AutenticacaoDTO;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author SKA
 */
public class AutenticacaoService {

  

    private String usuario = "adriel";
    private String senha = "123";

    public boolean autenticar(AutenticacaoDTO dto) {
        System.out.println(dto.getUsuario());
        System.out.println(dto.getSenha());
        
        if (dto.getUsuario().equals(this.usuario) && dto.getSenha().equals(this.senha)) {
            return true;
        } else {
            return false;
        }
    }
}


