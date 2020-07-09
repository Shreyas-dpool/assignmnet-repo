const celsiustofahrenheit= function (c,f) {
    f=(c/5*9)+32
    return f
}
console.log(celsiustofahrenheit(2))
const fahrenheittocelsius =function (f,c) {
    c=(f-32)*5/9
    return c
}
console.log(fahrenheittocelsius(40))
const kelvintocelsius =function (k) {
    c=k-273.15
    return c
}
console.log(kelvintocelsius(1))
const celsiustokelvin =function (c) {
    k=c+273.15
    return k
}
console.log(celsiustokelvin(6))