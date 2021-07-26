package com.maharaja.stitch_line_backend.dto

class UserDTO {
    private var username:String=""
    private var empid:String=""
    private var name:String=""
    private var nic:String=""
    private var email:String=""
    private var address:String=""
    private var contact:Int=0
    private var password:String=""

    constructor(
        username: String,
        empid: String,
        name: String,
        nic: String,
        email: String,
        address: String,
        contact: Int,
        password: String
    ) {
        this.username = username
        this.empid = empid
        this.name = name
        this.nic = nic
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

    fun getempid(): String {
        return empid
    }

    fun setempid(username: String) {
        this.empid = empid
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