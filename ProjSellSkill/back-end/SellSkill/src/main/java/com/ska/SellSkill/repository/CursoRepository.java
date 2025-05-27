/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ska.SellSkill.repository;

import com.ska.SellSkill.dto.CursoDTO;
import java.util.HashMap;
import java.util.Map;

public class CursoRepository {
    private Map<String, CursoDTO> cursos;

    public CursoRepository() {
        cursos = new HashMap<>();
        cursos.put("seguranca", new CursoDTO(
                "Segurança da Informação",
                "Fundamentos de segurança e ética hacker",
                99.90,
                "imagens/curso-programacao.jpg"
        ));
        
           cursos.put("seguranca", new CursoDTO(
                "Segurança da Inforwerwrerwermação",
                "Fundamentos de serwerweregurança e ética hacker",
                99.90,
                "imagens/curso-programacao.jpg"
        ));
        
        cursos.put("redes", new CursoDTO(
                "Redes de Computadores",
                "Aprenda sobre TCP/IP, roteamento e segurança",
                99.90,
                "imagens/curso-programacao.jpg"
        ));
        cursos.put("python", new CursoDTO(
                "Python para Iniciantes",
                "Aprenda lógica e automação com Python",
                99.90,
                "imagens/curso-programacao.jpg"
        ));
        cursos.put("programacao", new CursoDTO(
                "Curso de Programação Completo",
                "Domine HTML, CSS, JavaScript, Python e mais. Ideal para iniciantes e avançados",
                99.90,
                "imagens/curso-programacao.jpg"
        ));
        cursos.put("ia", new CursoDTO(
                "Inteligência Artificial com Python",
                "Crie modelos de IA com aprendizado de máquina",
                99.90,
                "imagens/curso-programacao.jpg"
        ));
    }

    public CursoDTO getCurso(String chave) {
        return cursos.get(chave);
    }

    public void setCurso(String chave, CursoDTO curso) {
        cursos.put(chave, curso);
    }

    public Map<String, CursoDTO> getTodosCursos() {
        return cursos;
    }
}