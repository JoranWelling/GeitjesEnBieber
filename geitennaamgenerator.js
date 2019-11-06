function maakGeitennaam(echteNaam){
    let aanhef = ["Koning", "Meneer", "Mevrouw", "Hertogin van"];
    let achtervoegsel = ["Jr.", "de Geit", "Geit"];
    let shuffledNaam = echteNaam.split('').sort(function () { return 0.5 - Math.random() }).join('');
    return aanhef.random() + " " + shuffledNaam + " " + achtervoegsel.random();
}
function maakNaam(){
    let naam = document.getElementById('name').value;
    let geitennaam = maakGeitennaam(naam);
    document.getElementById('uitkomst').innerHTML = geitennaam;
}
window.addEventListener('load', function(){
    document.getElementById('knop').addEventListener('click', maakNaam);
})



Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}