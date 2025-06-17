/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ska.SellSkill.dto.UsuarioDTO;
import com.ska.SellSkill.model.UsuarioModel;
import com.ska.SellSkill.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public String cadastrarUsuario(UsuarioDTO usuarioDTO) {
        try {
            // Criação do usuário a partir do DTO
            UsuarioModel usuario = new UsuarioModel();
            usuario.setNome_completo(usuarioDTO.getNome_completo());
            usuario.setEmail(usuarioDTO.getEmail());
            usuario.setSenha(usuarioDTO.getSenha()); // Aqui você pode fazer a criptografia da senha antes de salvar

            // Salvar no banco de dados
            usuarioRepository.save(usuario);

            return "Cadastro realizado com sucesso!";
        } catch (Exception e) {
            return "Erro ao cadastrar o usuário: " + e.getMessage();
        }
    }
}