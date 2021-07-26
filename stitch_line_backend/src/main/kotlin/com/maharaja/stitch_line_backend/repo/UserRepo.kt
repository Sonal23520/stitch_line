package com.maharaja.stitch_line_backend.repo

import com.maharaja.stitch_line_backend.entity.User
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepo:MongoRepository<User,String> {
}