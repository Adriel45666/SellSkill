package com.ska.SellSkill.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_usuario")
public class UsuarioModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_completo")
    private String nome_completo;

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

    public void setNome_completo(String nome_completo) {
        this.nome_completo = nome_completo;
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

    public String getNome_completo() {
        return nome_completo;
    }

    public String getSenha() {
        return senha;
    }

}
