export const ModCarros= (arreglo,cont)=>{
    cont.innerHTML="";
    arreglo.forEach(element => {
        const{img,name,price}=element
        cont.innerHTML +=`
        <div class=car-card><img src=${img} alt=""><h5>${name}</h5><p>${price}</p></div>
        `
        
    });
}