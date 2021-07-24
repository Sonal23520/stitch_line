package com.maharaja.stitch_line_backend.mapper

interface Mapper<D,E> {
    fun toEntity(dto:D):E
}