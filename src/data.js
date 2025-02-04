// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

//funcion para filtrar por genero  
export const filterGenero = (data, valor) =>{    
  const dataOrdenar = data.slice()                                           // se crea la const filtrarm y funcion con 2 parametros 
  const gender = dataOrdenar.filter(atleta =>(atleta.gender===valor ));                // se ejecuta la funcion de crear una var que filtre la data y dentro en cada atleta busque en genero su valor
  return gender;                                                                // que la funcion nos devuelva lo pedido en la var mujeresMedallistas
  
}; 

//funcion para filtrar por deporte
export const filterSport = (data, valor) =>{
  const dataOrdenar = data.slice()
  const sport = dataOrdenar.filter(atleta =>(atleta.sport===valor));
  return sport;
};

//funcion para filtrar por pais desde nacionalidad
export const filterNoc = (data, valor) =>{
  const dataOrdenar = data.slice()
  const noc = dataOrdenar.filter(atleta =>(atleta.noc===valor));
  console.log(noc)

  return noc;
};

//funcion ordenar ascendente
export const ordenarAZ =(data) =>{
  const dataOrdenar = data.slice()
  const ordenarAsc = dataOrdenar.sort((a, b) => ((a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1 ));
  return ordenarAsc;
 };
//orden descendente
 export const ordenarZA =(data) =>{
  const dataOrdenar = data.slice()   
  const ordenarDes = dataOrdenar.sort((a, b) => ((a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1 ));
  return ordenarDes;
 };





