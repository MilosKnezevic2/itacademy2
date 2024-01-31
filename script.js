function myFunction(){
    const stranicaA = parseFloat(document.getElementById('a').value);
    const stranicaB = parseFloat(document.getElementById('b').value);

    if(isNaN(stranicaA) || isNaN(stranicaB) || stranicaA <= 0 || stranicaB <= 0) {
        prikaziPoruku('Izaberite ispravne vrijednosti!');
        return;
    }
    if (stranicaA != stranicaB) {
        const povrsina = stranicaA * stranicaB;
    
        const rezultat = document.getElementById('rezultat');
        rezultat.innerText = `Površina pravougaonika je: ${povrsina.toFixed(2)}`;    
    }
    else {
        const povrsina = stranicaA ** 2;
    
        const rezultat = document.getElementById('rezultat');
        rezultat.innerText = `Površina kvadrata je: ${povrsina.toFixed(2)}`;    

    }
}

function prikaziPoruku (poruka) {
    alert(poruka);
}