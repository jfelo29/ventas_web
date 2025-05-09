const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const signin = require('./controllers/signin');
const users = require('./controllers/users');
const auth = require('./middlewares/auth');


const app = express();
const PORT = 3001;

app.use(cors());
app.options('*', cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27018').then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.log('Error al conectar a MongoDB');
});

app.use('/auth', auth.auth);
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use(requestLogger);
app.use('/signin', signin.signin);
app.use('/signup', users.createUser);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
app.use(errorLogger);
app.use(errors());
app.use((req, res) => {
    res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});