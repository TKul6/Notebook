process.on('exit', (exitCode) => console.log(`Exiting node on code ${exitCode}`));
process.on('uncaughtException', (err) =>{
console.log('An uncaught exception has occured');
console.log(err);
process.exit(1);});
process.stdin.resume(); //Keeps the event loop on instead of exiting node.
process.cat();
