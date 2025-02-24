/*Get data from the api*/

const url = process.env.API;

const getData = async () => {
    try {
        const response = await fetch(url);
        switch (response.status) {
            case (200):
                const json = await response.json();
                return json.results;
            default:
                alert("Hubo un error al intentar obtener los datos del servidor");
                console.log(response.message);
                return false;
        }
    } catch (e) {
        console.log(e);
        alert("Hubo un error al intentar obtener los archivos del servidor.");
        return false;
    }
}

export default { getData }