class customErr extends Error {
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        this.error="error";
    }
  }
  
 module.exports = customErr