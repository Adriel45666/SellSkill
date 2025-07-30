package com.ska.SellSkill.repository;

import com.ska.SellSkill.model.UsuarioModel;
import com.ska.SellSkill.repository.custom.UsuarioRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long>, UsuarioRepositoryCustom {
}
