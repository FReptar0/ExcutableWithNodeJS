const { exec } = require('child_process');

// Ejecuta el proceso Node.js
const nodeProcess = exec('node D:\Desarrollo Sage-Portal\sageconnect\src\index.js');

// Espera 20 segundos
setTimeout(() => {
    // Mata el proceso Node.js después de 20 segundos
    nodeProcess.kill();
}, 20000); // 20000 milisegundos = 20 segundos
