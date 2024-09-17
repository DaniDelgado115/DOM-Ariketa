let bat= document.getElementById('uno')
bat.innerText="Bat"
let bi= document.getElementById('dos')
bi.innerText="Bi"
let hiru= document.getElementById('hiru')
hiru.innerText= "Hiru"

//1. Ariketa
// a)
bat.onclick = () => {
    console.log("click bat botoian")
    let h1Goiburuak = document.querySelectorAll("h1")
    for(let i=0; i< h1Goiburuak.length; i++)
        h1Goiburuak[i].style.color = "red"
}

// b)