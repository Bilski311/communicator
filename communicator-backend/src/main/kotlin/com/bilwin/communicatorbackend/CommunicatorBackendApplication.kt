package com.bilwin.communicatorbackend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class CommunicatorBackendApplication

fun main(args: Array<String>) {
    runApplication<CommunicatorBackendApplication>(*args)
}
