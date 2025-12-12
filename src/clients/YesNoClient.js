import axios from "axios";

const consumirAPI = async () => {
    const respuesta = axios.get('https://yesno.wtf/api').then(r => r.data);
    console.log(respuesta);
    return respuesta;
}

export async function consumirAPIFacade(){
    return await consumirAPI();
}

export async function consumirAPIFacade2(){
    return await consumirAPI();
}