
package com.ska.SellSkill.model;

//import jakarta.persistence.*;

//@Entity
//@Table(name = "tb_usuario")
public class UsuarioModel {
    
  //  @Id
   // @GeneratedValue (strategy = GenerationType.IDENTITY) 
    
    private Long id;
    
     
   // @Column(name = "nome_completo")
    private String nome_completo;
    
    //@Column(name = "email")
    private String email;
    
    //@Column(name = "senha")
    private String senha;
   
   
   public Long getNome_Completo(){
       return id;
   }
   
   public Long getId(){
        return id;
    }

        public void setId(Long id) {
            this.id = id;
        }
   
    
   public String getNome(){
       return nome_completo;
   }

    public void setNome_completo(String nome_completo) {
        this.nome_completo = nome_completo;
    }
   
   

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getSenha() {
            return senha;
        }

        public void setSenha(String senha) {
            this.senha = senha;
        }
    
    
            
    
    }

