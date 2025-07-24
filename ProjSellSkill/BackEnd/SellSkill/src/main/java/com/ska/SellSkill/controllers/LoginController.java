package com.ska.SellSkill.controllers;

import com.ska.SellSkill.dto.LoginDTO;
import com.ska.SellSkill.model.LoginModel;
import com.ska.SellSkill.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/LoginController")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "null"})
public class LoginController {

    @Autowired
    private LoginService loginService;

   @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
    LoginModel usuario = loginService.autenticar(loginDTO.getEmail(), loginDTO.getSenha());

    if (usuario == null) {
        return ResponseEntity.status(401).body("Email ou senha inválidos.");
    }

    return ResponseEntity.ok("Login realizado com sucesso!");
}
    
}