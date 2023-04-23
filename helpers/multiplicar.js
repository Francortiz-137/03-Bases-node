const fs = require('fs');
const colors = require('colors');



const crearArchivo2 = (base, list, hasta) => {
    return new Promise( (resolve, reject) => {     
        let salida = '';


        for(let i=1;i<=10;i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if (list===true)
            console.log(salida.green);

        fs.writeFileSync(`tabla-${ base }.txt`, salida);

        resolve(`tabla-${base}.txt`);
    });
}

const crearArchivo = async(base,list,limit) => {
    try {
        let salida = '';


        for(let i=1;i<=limit;i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(list===true)
            console.log(salida.green);

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}


module.exports = {
    crearArchivo
}