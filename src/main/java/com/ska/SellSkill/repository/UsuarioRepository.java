
package com.ska.SellSkill.repository;

import org.springframework.stereotype.Repository;
import com.ska.SellSkill.model.UsuarioModel;
import com.ska.SellSkill.repository.custom.UsuarioRepositoryCustom;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UsuarioRepository
        extends JpaRepository<UsuarioModel, Long>, UsuarioRepositoryCustom{
    
}