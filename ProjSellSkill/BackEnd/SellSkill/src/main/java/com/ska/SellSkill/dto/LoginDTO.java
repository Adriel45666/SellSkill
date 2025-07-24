/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.dto;

public class LoginDTO {
    private String email;
    private String senha;

    public void setEmail(String email) {
        this.email = email;
    } 

    
    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }   

    public String getSenha() {
        return senha;
    }

}