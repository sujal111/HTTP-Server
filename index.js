const http= require('http');



const server=http.createServer(function exec(request,response){
    if(request.url=='/home'){
        response.end("welcome to home");
    }else if(request.url=='/faq'){
        response.end("List of FAQs")
    }
    response.end("Hello World");
});

server.listen(PORT,function process(){
    console.log("Server started on port",PORT);

});