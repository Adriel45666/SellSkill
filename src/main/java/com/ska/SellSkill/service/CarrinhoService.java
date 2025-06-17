package com.ska.SellSkill.service;

import com.ska.SellSkill.dto.CarrinhoDTO;
import com.ska.SellSkill.model.CarrinhoModel;
import com.ska.SellSkill.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    public String adicionarAoCarrinho(CarrinhoDTO dto) {
        Optional<CarrinhoModel> existente = carrinhoRepository.findByUsuarioId(dto.getUsuarioId());

        CarrinhoModel carrinho = existente.orElse(new CarrinhoModel());
        carrinho.setUsuarioId(dto.getUsuarioId());
        carrinho.setProdutosIds(dto.getProdutosIds());

        carrinhoRepository.save(carrinho);
        return "Carrinho atualizado!";
    }

    public CarrinhoModel visualizarCarrinho(Long usuarioId) {
        return carrinhoRepository.findByUsuarioId(usuarioId).orElse(null);
    }
}
