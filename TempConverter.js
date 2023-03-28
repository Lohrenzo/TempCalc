// c = k - 273.15 
// f = (1.8 * c) + 32 
// k = c + 273.15 
// c = (f - 32) / 1.8
// k = ((f - 32) / 1.8) + 273.15
// f = (1.8 * (k - 273.15)) + 32

// Celsius Conversions Start
let cel = document.getElementById("cel");
let celFah = document.getElementById("celfah");
let celKel = document.getElementById("celkel");

function celsius() {
    let celVal = Number(cel.value);
    let celFahVal = Math.round((1.8 * celVal) + 32);
    let celKelVal = Math.round(celVal + 273.15);
    celFah.innerHTML = (celFahVal);
    celKel.innerHTML = (celKelVal);
}

function reset1() {
    cel.value = "";
    celFah.innerHTML = "";
    celKel.innerHTML = "";
}
// Celsius Conversions End

// Fahrenheit Conversions Start
let fah = document.getElementById("fah");
let fahCel = document.getElementById("fahcel");
let fahKel = document.getElementById("fahkel");

function fahrenheit() {
    let fahVal = Number(fah.value);
    let fahCelVal = Math.round((fahVal - 32) / 1.8);
    let fahKelVal = Math.round(fahCelVal + 273.15);
    fahCel.innerHTML = (fahCelVal);
    fahKel.innerHTML = (fahKelVal);
}

function reset2() {
    fah.value = "";
    fahCel.innerHTML = "";
    fahKel.innerHTML = "";
}
// Fahrenheit Conversions End

// Kelvin Conversions Start
let kel = document.getElementById("kel");
let kelCel = document.getElementById("kelcel");
let kelFah = document.getElementById("kelfah");

function kelvin() {
    let kelVal = Number(kel.value);
    let kelCelVal = Math.round(kelVal - 273.15);
    let kelFahVal = Math.round((1.8 * (kelVal - 273.15)) + 32);
    kelCel.innerHTML = (kelCelVal);
    kelFah.innerHTML = (kelFahVal);
}

function reset3() {
    kel.value = "";
    kelCel.innerHTML = "";
    kelFah.innerHTML = "";
}
// Kelvin Conversions End
