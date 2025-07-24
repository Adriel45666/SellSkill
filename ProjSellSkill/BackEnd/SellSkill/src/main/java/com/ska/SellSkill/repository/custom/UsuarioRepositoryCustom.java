package com.ska.SellSkill.repository.custom;

import com.ska.SellSkill.dto.CadastroDTO;

public interface UsuarioRepositoryCustom {
    boolean inserirUsuario(CadastroDTO dto);
}