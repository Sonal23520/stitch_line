package com.maharaja.stitch_line_backend.service.impl

import com.maharaja.stitch_line_backend.dto.CustomerDTO
import com.maharaja.stitch_line_backend.mapper.CustomerMapper
import com.maharaja.stitch_line_backend.repo.CustomerRepo
import com.maharaja.stitch_line_backend.service.CustomerService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class CustomerServiceImpl :CustomerService{

    @Autowired
    private lateinit var repo:CustomerRepo

    override fun addCustomer(dto: CustomerDTO) {
        repo.save(CustomerMapper().toEntity(dto))
    }
}