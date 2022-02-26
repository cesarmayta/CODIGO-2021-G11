const app = require('./app');
require('./lib/mongooselib');

async function main(){
    await app.listen(app.get('port'));
    console.log(`servidor corriendo en http://localhost:${app.get('port')}`);
}

main();