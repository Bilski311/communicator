package com.bilwin.communicatorbackend.security.jwt

import com.bilwin.communicatorbackend.security.services.UserDetailsServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.filter.OncePerRequestFilter
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource
import org.springframework.stereotype.Component
import org.springframework.util.StringUtils
import javax.servlet.FilterChain
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class AuthTokenFilter(val jwtUtils: JwtUtils):
    OncePerRequestFilter() {
    @Autowired
    var userDetailsService: UserDetailsServiceImpl? = null
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        try {
            val jwt: String? = parseJwt(request)
            if (isJwtValid(jwt)) {
                val username = jwtUtils.getUserNameFromJwtToken(jwt)
                val userDetails: UserDetails? = userDetailsService?.loadUserByUsername(username)
                val authentication = UsernamePasswordAuthenticationToken(userDetails, null, userDetails?.authorities)
                authentication.details = WebAuthenticationDetailsSource().buildDetails(request)
                SecurityContextHolder.getContext().authentication = authentication
            }
        } catch (e: Exception) {
            logger.error("Cannot set user authentication: {}", e)
        }
        filterChain.doFilter(request, response)
    }

    fun parseJwt(request: HttpServletRequest): String? {
        val authorizationHeader: String? = request.getHeader("Authorization")
        if (isStringJwt(authorizationHeader)) {
            return authorizationHeader?.substring(7, authorizationHeader.length)
        }
        return null
    }

    private fun isStringJwt(potentialJwt: String?): Boolean {
        return StringUtils.hasText(potentialJwt) && potentialJwt?.startsWith("Bearer") ?: false
    }

    private fun isJwtValid(jwt: String?): Boolean {
        return jwt != null && jwtUtils.validateJwtToken(jwt)
    }
}