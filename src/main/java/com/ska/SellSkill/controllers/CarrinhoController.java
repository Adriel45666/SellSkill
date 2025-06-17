package com.ska.SellSkill.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ska.SellSkill.dto.CarrinhoDTO;
import com.ska.SellSkill.model.CarrinhoModel;
import com.ska.SellSkill.service.CarrinhoService;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;

    @PostMapping("/adicionar")
    public String adicionarAoCarrinho(@RequestBody CarrinhoDTO dto) {
        return carrinhoService.adicionarAoCarrinho(dto);
    }

    @GetMapping("/ver/{usuarioId}")
    public CarrinhoModel verCarrinho(@PathVariable Long usuarioId) {
        return carrinhoService.visualizarCarrinho(usuarioId);
    }
}
