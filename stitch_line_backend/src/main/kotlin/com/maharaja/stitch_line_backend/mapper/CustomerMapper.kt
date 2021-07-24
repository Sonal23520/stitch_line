package com.maharaja.stitch_line_backend.mapper

import com.maharaja.stitch_line_backend.dto.CustomerDTO
import com.maharaja.stitch_line_backend.entity.Customer

class CustomerMapper:Mapper<CustomerDTO,Customer> {
    override fun toEntity(dto: CustomerDTO): Customer {
        return Customer(
            dto.getusername(),
            dto.getname(),
            dto.getemail(),
            dto.getaddress(),
            dto.getcontact(),
            dto.getpassword()
        )
    }
}