    module.exports = async function (context, req,getTodoItem) {
            context.log('HTTP trigger and SQL output binding function processed a request.');
        
            if(req.body){
                context.bindings.postTodoItems = {
                    id:3,
                    title:"日光を浴びる",
                };
            }else{
                context.res = {
                    // status: 200, /* Defaults to 200 */
                    mimetype: "application/json",
                    body: getTodoItem
                };
            }
            // context.bindings.TodoItems = req.body;
            // context.res = {
            //     status: 201
            // }
            
            
        // API用途 使いたい情報をサーバーから渡す
        // context.res.json({
        //     text: "Hello from the API"
        // });
    };
    