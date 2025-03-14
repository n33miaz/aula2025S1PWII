const application = require('./index');

require('dotenv').config(); // carrrega variaveis de ambiente '.env'

const PORT = process.env.PORT; // define a porta

application.listen
(
    PORT, () => 
    {
        console.log(process.env.MSG);
        console.log('PORT:' + PORT);
        console.log(`http://localhost:${PORT}`);
    }
);