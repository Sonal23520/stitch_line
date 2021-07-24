package com.maharaja.stitch_line_backend.util

class Response {
    var code: String = ""
    var message: String = ""
    var data: Any? = null
    constructor(code: String, message: String, data: Any?) {
        this.code = code
        this.message = message
        this.data = data
    }
}