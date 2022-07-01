package com.bilwin.communicatorbackend.user.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.Table

@Table(name = "\"user\"")
@Entity
class User(
    @Column(name = "username") var username: String,
    @Column(name = "email") var email: String,
    @Column var password: String
) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    var id: Long? = null
}
