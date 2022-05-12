package com.bilwin.communicatorbackend.user.rest

import com.bilwin.communicatorbackend.user.model.AuthenticationRequest
import com.bilwin.communicatorbackend.user.model.RegisterRequest
import com.bilwin.communicatorbackend.user.model.User
import com.bilwin.communicatorbackend.user.repository.UserRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/auth/")
class AuthController(val userRepository: UserRepository) {
    @PostMapping("login")
    fun authenticateUser(@RequestBody authenticationRequest: AuthenticationRequest) {
    }

    @PostMapping("register")
    fun registerUser(@RequestBody registerRequest: RegisterRequest): ResponseEntity<Any> {
        if (userRepository.existsByUsername(registerRequest.username)) {
            return ResponseEntity.badRequest().body("Error: Username is already taken")
        }
        if (userRepository.existsByEmail(registerRequest.email)) {
            return ResponseEntity.badRequest().body("Error: Email is already in use")
        }
        val user = User(registerRequest.username, registerRequest.email, registerRequest.password)
        userRepository.save(user)

        return ResponseEntity.ok("User Registered successfully")
    }
}