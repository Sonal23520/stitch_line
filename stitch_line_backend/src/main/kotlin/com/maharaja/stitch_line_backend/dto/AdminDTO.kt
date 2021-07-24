package com.maharaja.stitch_line_backend.dto

class AdminDTO {

    private var empid:String=""
    private var username:String=""
    private var name:String=""
    private var nic:String=""
    private var email:String=""
    private var contact:Int=0
    private var password:String=""

    constructor(
        empid: String,
        username: String,
        name: String,
        nic: String,
        email: String,
        contact: Int,
        password: String
    ) {
        this.empid = empid
        this.username = username
        this.name = name
        this.nic = nic
        this.email = email
        this.contact = contact
        this.password = password
    }

    fun getempid(): String {
        return empid
    }

    fun setempid(username: String) {
        this.empid = empid
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

    fun getnic(): String {
        return nic
    }

    fun setnic(nic: String) {
        this.nic = nic
    }

    fun getemail(): String {
        return email
    }

    fun setemail(email: String) {
        this.email = email
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