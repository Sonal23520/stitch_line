package com.maharaja.stitch_line_backend.repo

import com.maharaja.stitch_line_backend.entity.Customer
import org.springframework.data.mongodb.repository.MongoRepository

interface CustomerRepo :MongoRepository<Customer,String> {
}