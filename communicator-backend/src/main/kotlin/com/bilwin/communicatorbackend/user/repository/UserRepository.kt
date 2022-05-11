package com.bilwin.communicatorbackend.user.repository

import com.bilwin.communicatorbackend.user.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository: JpaRepository<User, Long> {
    fun findByUsername(username: String?): User;
    fun existsByUsername(username: String): Boolean;
    fun existsByEmail(email: String): Boolean;
}