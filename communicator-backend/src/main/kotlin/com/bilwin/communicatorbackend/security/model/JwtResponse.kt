package com.bilwin.communicatorbackend.security.model

data class JwtResponse(
    val token: String?,
    val id: Long?,
    val username: String,
    val email: String
) {
}