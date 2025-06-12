/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.dto;

/**
 *
 * @author SKA
 */
public class UsuarioDTO {

    private String nome_completo;

    private String email;

    private String senha;

    public void setEmail(String email) {
        this.email = email;
    } 

    public void setNome_completo(String nome_completo) {
        this.nome_completo = nome_completo;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }   

    public String getNome_completo() {
        return nome_completo;
    }

    public String getSenha() {
        return senha;
    }

}
