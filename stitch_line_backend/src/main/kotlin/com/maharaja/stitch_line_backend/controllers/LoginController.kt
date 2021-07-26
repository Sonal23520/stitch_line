package com.maharaja.stitch_line_backend.controller



import com.maharaja.stitch_line_backend.dto.UserDTO
import com.maharaja.stitch_line_backend.service.UserService
import com.maharaja.stitch_line_backend.util.Response
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
class   LoginController {

    @Autowired
    private lateinit var service: UserService

    @PostMapping(consumes = arrayOf(MediaType.APPLICATION_JSON_VALUE),produces = arrayOf(MediaType.APPLICATION_JSON_VALUE))
    fun user(@RequestBody dto: UserDTO): ResponseEntity<Response> {
        service.add(dto)
        return ResponseEntity<Response>(Response("200","Done",dto), HttpStatus.OK);
    }

    @GetMapping("/{username}/{password}")
    fun getcustomer(@PathVariable username:String,@PathVariable password:String):Any{
        val findUser = service.findUser(username, password);
        return findUser;
    }
}