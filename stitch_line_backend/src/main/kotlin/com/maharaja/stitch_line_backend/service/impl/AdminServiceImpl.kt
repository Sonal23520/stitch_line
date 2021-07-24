package com.maharaja.stitch_line_backend.service.impl

import com.maharaja.stitch_line_backend.dto.AdminDTO
import com.maharaja.stitch_line_backend.mapper.AdminMapper
import com.maharaja.stitch_line_backend.repo.AdminRepo
import com.maharaja.stitch_line_backend.service.AdminService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional
class AdminServiceImpl:AdminService {

    @Autowired
    private lateinit var repo: AdminRepo

    override fun addAdmin(dto: AdminDTO) {
        repo.save(AdminMapper().toEntity(dto))

    }
}