
const tabla=[
    {Opcion:1, Traditional: "90-100", Range: "12-14", Latter: "A", SBG: "4" , Recomendacion : "Excelente"},
    {Opcion:2, Traditional: "80-89",  Range: "9-11",  Latter: "B", SBG: "3" , Recomendacion : "Excelente"},
    {Opcion:3, Traditional: "7-79",   Range: "6-8",   Latter: "C", SBG: "1" , Recomendacion : "Excelente"},
    {Opcion:4, Traditional: "60-69",  Range: "3-5",   Latter: "D", SBG: "1" , Recomendacion : "Excelente"},
    {Opcion:5, Traditional: "<60",    Range: "1-2",   Latter: "E", SBG: "0" , Recomendacion : "Excelente"},
    {Opcion:6, Traditional: "0",      Range: "0",     Latter: "Z", SBG: "0" , Recomendacion : "Excelente"},
]

console.table(tabla)
let nota = prompt("Digite su nota");


if (nota >=90 && nota <= 100){
    console.log(`su notas es  ${tabla[0].Latter}`);
    console.log("Exceeds Proficiency");

}else if (nota >=80 && nota <= 89){
    console.log(`su notas es  ${tabla[1].Latter}`);
    console.log("Exceeds Proficiency");


}else if (nota >=70 && nota <= 79){
    console.log(`su notas es  ${tabla[2].Latter}`);
    console.log("Exceeds Proficiency");


}else if (nota >=60 && nota <= 69){
    console.log(`su notas es  ${tabla[3].Latter}`);
    console.log("Exceeds Proficiency");


}else if (nota <60 ){
    console.log(`su notas es  ${tabla[4].Latter}`);
    console.log("Exceeds Proficiency");

}else if (nota ==0 ){
    console.log(`su notas es  ${tabla[5].Latter}`);
    console.log("Exceeds Proficiency");

}
