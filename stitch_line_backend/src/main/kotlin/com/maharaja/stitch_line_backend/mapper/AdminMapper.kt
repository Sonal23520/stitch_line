package com.maharaja.stitch_line_backend.mapper

import com.maharaja.stitch_line_backend.dto.AdminDTO
import com.maharaja.stitch_line_backend.entity.Admin

class AdminMapper:Mapper<AdminDTO,Admin> {
    override fun toEntity(dto: AdminDTO): Admin {
        return Admin(
            dto.getempid(),
            dto.getusername(),
            dto.getname(),
            dto.getnic(),
            dto.getemail(),
            dto.getcontact(),
            dto.getpassword()
        )
    }
}