let a = function(){
    console.log("liczba argumentów ", arguments.length);
    return arguments[0] + arguments[1] + arguments[2];
}
console.log("a", a(1,2,3));