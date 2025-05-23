/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.service;

import com.ska.SellSkill.dto.CursoDTO;
import java.util.ArrayList;
import java.util.List;


public class CursoService {
   
    public List<CursoDTO> getDados(){
       
        
        ArrayList<CursoDTO> lista = new ArrayList();
        
        
        for (int i = 1; i < 11; i++) {
            
            CursoDTO curso = new CursoDTO("nome", "descricao", 1.99, "url_imagem");
            lista.add(curso);
            
        }
        
        return lista;
        
    }
}
