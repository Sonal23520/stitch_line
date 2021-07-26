package com.maharaja.stitch_line_backend.mapper

import com.maharaja.stitch_line_backend.dto.UserDTO
import com.maharaja.stitch_line_backend.entity.User

class UserMapper:Mapper<UserDTO, User> {
    override fun toEntity(dto: UserDTO): User {
        return User(
            dto.getusername(),
            dto.getempid(),
            dto.getname(),
            dto.getnic(),
            dto.getemail(),
            dto.getaddress(),
            dto.getcontact(),
            dto.getpassword()
        )
    }

    override fun fromEntity(entity: User): UserDTO {
        return UserDTO(
            entity.getusername(),
            entity.getempid(),
            entity.getname(),
            entity.getnic(),
            entity.getemail(),
            entity.getaddress(),
            entity.getcontact(),
            entity.getpassword()
        )
    }
}