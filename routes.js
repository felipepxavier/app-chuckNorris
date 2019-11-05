const routes = require('next-routes');

module.exports = routes()
    .add('/', 'home')
    .add('/joker', 'joker')
    .add('/users', 'users')
    .add('/users/:user', 'detail');