package com.maharaja.stitch_line_backend.controller



import com.maharaja.stitch_line_backend.dto.AdminDTO
import com.maharaja.stitch_line_backend.dto.CustomerDTO
import com.maharaja.stitch_line_backend.service.AdminService
import com.maharaja.stitch_line_backend.service.CustomerService
import com.maharaja.stitch_line_backend.util.Response
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/login")
class   LoginController {

    @Autowired
    private lateinit var customerservice: CustomerService

    @Autowired
    private lateinit var adminservice: AdminService

    @PostMapping("/customer",consumes = arrayOf(MediaType.APPLICATION_JSON_VALUE),produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun customer(@RequestBody dto: CustomerDTO): ResponseEntity<Response> {
        customerservice.addCustomer(dto)
        return ResponseEntity<Response>(Response("200","Done",dto), HttpStatus.OK);
    }

    @PostMapping("/admin",consumes = arrayOf(MediaType.APPLICATION_JSON_VALUE),produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun admin(@RequestBody dto: AdminDTO): ResponseEntity<Response> {
        print("okkkk")
        adminservice.addAdmin(dto)
        return ResponseEntity<Response>(Response("200","Done",dto), HttpStatus.OK);
    }

    @GetMapping
    fun getcustomer():Boolean{
        return true
    }
}