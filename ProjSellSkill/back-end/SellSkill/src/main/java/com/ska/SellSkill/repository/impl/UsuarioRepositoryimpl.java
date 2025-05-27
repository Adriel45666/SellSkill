/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.repository.impl;

import com.ska.SellSkill.dto.usuarioDTO;
import com.ska.SellSkill.repository.custom.UsuarioRepositoryCustom;

import org.springframework.stereotype.Repository;

/**
 *
 * @author SKA
 */
//@Repository
public class UsuarioRepositoryimpl implements UsuarioRepositoryCustom {

  //  @PersistenceContext
    //private EntityManager entityManager;
    
    @Override
   // @Transactional
    public boolean inserirUsuario(usuarioDTO dto){
         String sql = "INSERT INTO tb_Usuario(nome_completo, senha) VALUES ";
         sql += "(:nomeee, :senha);";
                 
     //   Query query = entityManager.createNativeQuery(sql);
      //  query.setParameter("nomeee",dto.getNome() );
       // query.setParameter("senha",dto.getSenha());
       // query.executeUpdate();
                  
        return true;       
    }
}
