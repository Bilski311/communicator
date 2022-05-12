package com.bilwin.communicatorbackend.user.model

import javax.persistence.*

@Table(name = "users")
@Entity
class User(@Column(name = "username") var username: String, @Column(name = "email") var email: String, @Column var password: String) {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    var id: Long? = null;
}