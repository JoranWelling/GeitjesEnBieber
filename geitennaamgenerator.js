function maakGEITENNAAMHAHA(echteNaam){
    let aanhef = ["Koning", "Meneer", "Mevrouw", "Hertogin van"];
    let achtervoegsel = ["Jr.", "de Stinkgeit", "Geitbek"];
    let shuffledNaam = echteNaam.split('').sort(function () { return 0.5 - Math.random() }).join('');
    return aanhef.random() + " " + shuffledNaam + " " + achtervoegsel.random();
}
function maaknaamyoloboeie(){ 
    let naam = document.getElementById('name').value;
    let geitennaam = maakGEITENNAAMHAHA(naam);
    document.getElementById('uitkomst').innerHTML = geitennaam;
}
window.addEventListener('load', function(){
    document.getElementById('knop').addEventListener('click', maaknaamyoloboeie);
})



Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}