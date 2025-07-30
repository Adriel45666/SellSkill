package com.ska.SellSkill.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_usuario")
public class LoginModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public Long getId() {
        return id;
    }

    public String getSenha() {
        return senha;
    }

}
