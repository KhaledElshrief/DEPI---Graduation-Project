class apiError extends Error{
    
    constructor(message,statusCode){
        super(message,statusCode)
        this.message=message;
        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith(4)?"failed":"error";
        this.isOperation=true;
    }
    
}

module.exports=apiError;
