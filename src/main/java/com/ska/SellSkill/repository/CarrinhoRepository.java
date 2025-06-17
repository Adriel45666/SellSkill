package com.ska.SellSkill.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ska.SellSkill.model.CarrinhoModel;

public interface CarrinhoRepository extends JpaRepository<CarrinhoModel, Long> {
    Optional<CarrinhoModel> findByUsuarioId(Long usuarioId);
}
