package com.ska.SellSkill.repository.impl;

import com.ska.SellSkill.dto.UsuarioDTO;
import com.ska.SellSkill.repository.custom.UsuarioRepositoryCustom;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;


@Repository
public class UsuarioRepositoryImpl implements UsuarioRepositoryCustom {
    
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public boolean inserirUsuario(UsuarioDTO dto) {
        String sql = "INSERT INTO tb_usuario(nome_completo,email, senha) VALUES (:nome,:email, :senha)";
        sql += "(:nome,:email, :senha);";
        
        Query query = entityManager.createNativeQuery(sql);
        query.setParameter("nome", dto.getNome_completo());
        query.setParameter("senha", dto.getSenha());
        query.setParameter("email", dto.getEmail());
        

        
        
        query.executeUpdate();
        return true;
    }
}
