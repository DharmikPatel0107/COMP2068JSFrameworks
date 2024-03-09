const connect = require('connect');
const url = require('url');
const http = require('http');

const app = connect();

function calculate(req, res) {
    const query = url.parse(req.url, true).query;
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;

    switch (method) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            res.end('Error: Invalid method. Use add, subtract, multiply, or divide.');
            return;
    }

    res.end(`${x} ${methodMap[method]} ${y} = ${result}`);
}

const methodMap = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/'
};

app.use('/lab2', calculate);

http.createServer(app).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
