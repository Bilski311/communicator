package com.bilwin.communicatorbackend.mock

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/xD")
class MockController {
    @GetMapping
    fun xD(): String {
        return "xD"
    }
}