package com.maharaja.stitch_line_backend.service

import com.maharaja.stitch_line_backend.dto.UserDTO

import java.util.*
import kotlin.collections.ArrayList

interface UserService {
    fun add(dto: UserDTO)
    fun findUser(email:String,password:String):Any

}