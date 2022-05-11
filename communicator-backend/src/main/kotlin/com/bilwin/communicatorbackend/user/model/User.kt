package com.bilwin.communicatorbackend.user.model

import javax.persistence.*

@Table(name = "user")
@Entity
class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    var id: Long? = null;

    @Column(name = "username")
    var username: String = ""

    @Column(name = "email")
    var email: String = ""

    @Column
    var password: String = ""
}