/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.service;

import com.ska.SellSkill.model.LoginModel;
import com.ska.SellSkill.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public LoginModel autenticar(String email, String senha) {
        return loginRepository.findByEmailAndSenha(email, senha).orElse(null);
    }
}