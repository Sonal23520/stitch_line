package com.maharaja.stitch_line_backend.service

import com.maharaja.stitch_line_backend.dto.AdminDTO

interface AdminService {
    fun addAdmin(dto: AdminDTO)

}