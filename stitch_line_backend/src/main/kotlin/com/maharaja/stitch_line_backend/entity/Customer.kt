package com.maharaja.stitch_line_backend.entity

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "users")
class Customer {
    @Id
    private var username:String=""
    private var name:String=""
    private var email:String=""
    private var address:String=""
    private var contact:Int=0
    private var password:String=""

    constructor(username: String, name: String, email: String, address: String, contact: Int, password: String) {
        this.username = username
        this.name = name
        this.email = email
        this.address = address
        this.contact = contact
        this.password = password
    }


    fun getusername(): String {
        return username
    }

    fun setusername(username: String) {
        this.username = username
    }

    fun getname(): String {
        return name
    }

    fun setname(name: String) {
        this.name = name
    }

    fun getemail(): String {
        return email
    }

    fun setemail(email: String) {
        this.email = email
    }

    fun getaddress(): String {
        return address
    }

    fun setaddress(address: String) {
        this.address = address
    }

    fun getcontact(): Int {
        return contact
    }

    fun setcontact(contact: Int) {
        this.contact = contact
    }

    fun getpassword(): String {
        return password
    }

    fun setpassword(password: String) {
        this.password = password
    }
}