window.onload=() => {
    
    document.getElementById('uno').innerText='Bat'
    document.getElementById('dos').innerText='Bi'
    document.getElementById('hiru').innerText='Hiru'

//1. Ariketa
// a)
    let bat=document.getElementById('uno')
    bat.onclick = () => {
        console.log("click bat botoian")
        let h1Goiburuak = document.querySelectorAll("h1")
        for(let i=0; i< h1Goiburuak.length; i++)
            h1Goiburuak[i].style.color = "red"
    }

// b)
    let bi=document.getElementById('dos')
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
// c)
    let hiru=document.getElementById('hiru')
    let goiburukoak= [];
    hiru.onclick = () => {
        console.log("click hiru botoian")
        let Hak= Array.from(document.querySelectorAll('h1, h2, h3'))
        Hak.forEach( (H,ind) => {goiburukoak[ind]=H.outerText;
            console.log(H.outerText);
        })
    }
}

