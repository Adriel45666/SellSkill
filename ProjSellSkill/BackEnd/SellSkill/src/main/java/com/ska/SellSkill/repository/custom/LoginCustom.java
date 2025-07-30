package com.ska.SellSkill.repository.custom;

import com.ska.SellSkill.model.LoginModel;

public interface LoginCustom {
    LoginModel buscarPorEmailESenha(String email, String senha);
}