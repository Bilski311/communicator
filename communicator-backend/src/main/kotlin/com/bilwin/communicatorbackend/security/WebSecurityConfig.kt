package com.bilwin.communicatorbackend.security

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
class WebSecurityConfig: WebSecurityConfigurerAdapter() {
//    fun authenticationJwtTokenFilter(): AuthTokenFilter {
//        return AuthTokenFilter();
//    }
    override fun configure(http: HttpSecurity) {
        http.cors().and().csrf().disable().exceptionHandling()
    }
}