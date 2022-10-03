export const getProductos = async ()=>{
    const URL = 'https://ford-landingapp.herokuapp.com/productos';
    let res = await fetch(`${URL}`);
    let data = await res.json();
    return data;

}