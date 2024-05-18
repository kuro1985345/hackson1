    module.exports = async function (context, req) {
        // API用途 使いたい情報をサーバーから渡す
        context.res.json({
            text: "Hello from the API"
        });
    };