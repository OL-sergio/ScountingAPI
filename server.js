// JavaScript source code
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplica��o est� a ser executada na porta ', port);
});
