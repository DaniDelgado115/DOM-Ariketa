window.ondload=() => {
    
    document.getElementById('uno').innerText('Bat')
    document.getElementById('dos').innerText('Bi')
    document.getElementById('tres').innerText('Hiru')

//1. Ariketa
// a)
    
    bat.onclick = () => {
        console.log("click bat botoian")
        let h1Goiburuak = document.querySelectorAll("h1")
        for(let i=0; i< h1Goiburuak.length; i++)
            h1Goiburuak[i].style.color = "red"
    }

// b)
    bi.onclick = () => {
    console.log("click bi botoian")
    let h2Goiburuak = document.querySelectorAll("h2")
    let h2Arraya = Array.from(h2Goiburuak)
    h2Arraya.forEach( (h2elementu, indizea) => {
        console.log(h2elementu);
        console.log(indizea);
        h2elementu.innerText="Goiburu2-"+(indizea+1)
    })
}
}

