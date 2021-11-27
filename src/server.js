const express = require('express');
const cors = require('cors');
const pokeRouter = require('./pokeRouter');

const app = express();

app.use(express.json());
app.use('/', pokeRouter);

app.listen(4000, () => {
    console.log(`Server corriendo en el puerto 4000`);
});
