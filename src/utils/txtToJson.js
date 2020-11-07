const convertTxtToJson = (string) => {
    let returnData = {
        data: [],
        message: ''
    };

    try {
        const valuesArray = string.split("\r");
        const results = [];

        const headers = valuesArray[0].split(',');

        for (let i = 1; i < valuesArray.length; i++) {
            let obj = {};
            let properties = valuesArray[i].split(',');
            for (let j in headers) {
                obj[headers[j]] = properties[j].trim();
            }

            results.push(obj);
        }

        returnData = {
            data: results,
            message: 'Datos transformados satisfactoriamente!'
        }


    } catch (error) {
        returnData = {
            data: [],
            message: 'Ha ocurrido un error, revise que el formato del archivo valores.txt sea el correcto'
        }
    }
    return returnData;
}

module.exports = convertTxtToJson;