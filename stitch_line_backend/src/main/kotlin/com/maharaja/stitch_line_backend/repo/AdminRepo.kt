package com.maharaja.stitch_line_backend.repo

import com.maharaja.stitch_line_backend.entity.Admin
import org.springframework.data.mongodb.repository.MongoRepository

interface AdminRepo: MongoRepository<Admin, String> {
}