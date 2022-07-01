package com.bilwin.communicatorbackend.security.services

import com.bilwin.communicatorbackend.security.model.UserDetailsImpl
import com.bilwin.communicatorbackend.user.model.User
import com.bilwin.communicatorbackend.user.repository.UserRepository
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserDetailsServiceImpl(val userRepository: UserRepository) : UserDetailsService {
    override fun loadUserByUsername(username: String?): UserDetails? {
        val user: User = userRepository.findByUsername(username)
            ?: throw UsernameNotFoundException("User Not Found with username: $username")
        return UserDetailsImpl().build(user)
    }
}
