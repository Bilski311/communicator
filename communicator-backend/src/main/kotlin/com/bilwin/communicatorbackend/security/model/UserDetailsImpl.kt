package com.bilwin.communicatorbackend.security.model

import com.bilwin.communicatorbackend.user.model.User
import com.fasterxml.jackson.annotation.JsonIgnore
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import java.util.Objects

class UserDetailsImpl(
    val id: Long? = null,
    val implementationUsername: String = "",
    val email: String = "",
    @JsonIgnore val implementationPassword: String = "",
    val implementationAuthorities: Collection<GrantedAuthority?>? = null
) : UserDetails {
    val serialVersionUID: Long = 1L

    fun build(user: User): UserDetailsImpl? {
        val authorities: List<GrantedAuthority> = listOf(SimpleGrantedAuthority("USER"))
        return UserDetailsImpl(
            user.id,
            user.username,
            user.email,
            user.password,
            authorities
        )
    }

    override fun getAuthorities(): Collection<GrantedAuthority?>? {
        return implementationAuthorities
    }

    override fun getUsername(): String {
        return implementationUsername
    }

    override fun getPassword(): String {
        return implementationPassword
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }

    override fun equals(o: Any?): Boolean {
        if (this === o) return true
        if (o == null || javaClass != o.javaClass) return false
        val user = o as UserDetailsImpl
        return Objects.equals(id, user.id)
    }
}
