package com.bilwin.communicatorbackend.user.rest

import com.bilwin.communicatorbackend.security.jwt.JwtUtils
import com.bilwin.communicatorbackend.security.model.JwtResponse
import com.bilwin.communicatorbackend.security.model.UserDetailsImpl
import com.bilwin.communicatorbackend.user.model.AuthenticationRequest
import com.bilwin.communicatorbackend.user.model.RegisterRequest
import com.bilwin.communicatorbackend.user.model.RegisterResponse
import com.bilwin.communicatorbackend.user.model.User
import com.bilwin.communicatorbackend.user.repository.UserRepository
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/auth/")
@CrossOrigin(origins = ["http://localhost:4200"])
class AuthController(
    val userRepository: UserRepository,
    val authenticationManager: AuthenticationManager,
    val jwtUtils: JwtUtils
) {
    @PostMapping("login")
    fun authenticateUser(@RequestBody authenticationRequest: AuthenticationRequest): ResponseEntity<Any> {
        val usernamePasswordAuthenticationToken = UsernamePasswordAuthenticationToken(
            authenticationRequest.username,
            authenticationRequest.password
        )
        val authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken)
        SecurityContextHolder.getContext().authentication = authentication
        val jwt = jwtUtils.generateJwtToken(authentication)

        val userDetails = authentication.principal as UserDetailsImpl

        return ResponseEntity.ok(JwtResponse(jwt, userDetails.id, userDetails.username, userDetails.email))
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

        return ResponseEntity.ok(RegisterResponse("User Registered successfully"))
    }
}
