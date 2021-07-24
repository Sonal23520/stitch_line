package com.maharaja.stitch_line_backend.service

import com.maharaja.stitch_line_backend.dto.CustomerDTO

interface CustomerService {
    fun addCustomer(dto: CustomerDTO)

}