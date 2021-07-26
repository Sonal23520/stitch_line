package com.maharaja.stitch_line_backend.service.impl

import com.maharaja.stitch_line_backend.dto.UserDTO
import com.maharaja.stitch_line_backend.mapper.UserMapper
import com.maharaja.stitch_line_backend.repo.UserRepo
import com.maharaja.stitch_line_backend.service.UserService
import org.springframework.beans.factory.annotation.Autowired

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional


@Service
@Transactional
class UserServiceImpl:UserService {

    internal enum class result {
        USERNOTFOUND, USERDETAILWRONG, CUSTOMERDETAILRIGHT,ADMINDETAILRIGHT
    }

    @Autowired
    private lateinit var repo: UserRepo


    override fun add(dto: UserDTO) {
        repo.save(UserMapper().toEntity(dto))
    }

    override fun findUser(username: String, password: String): Any {

        val user = repo.findById(username.trim())
        if (user.isPresent){
            val us = user.get();
            if (us.getpassword().equals(password.trim())){
                if (us.getempid().equals("None")){
                    return result.CUSTOMERDETAILRIGHT
                }else{
                    return result.ADMINDETAILRIGHT
                }
            }else{
                return  result.USERDETAILWRONG
            }
        }

        return result.USERNOTFOUND
    }

}