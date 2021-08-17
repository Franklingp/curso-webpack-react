/*Get data from the api*/

const url = "https://randomuser.me/api/";

const getData = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const json = await response.json();
        return json.result;
    } catch (e) {
        console.log(e);
        alert("Hubo un error al intentar obtener los archivos del servidor.");
    }
}

export default { getData }