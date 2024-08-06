
let helado ="chocolate";
if(helado=== "chocolate"){
    alert("Bienvenido a PELUVERSE");
}
else{
    alert("mala eleccion");
}

function alertarpeluverse(){
    alert('SÍ, ESTÁS EN PELUVERSE');
}
document.querySelector('h1').onclick = alertarpeluverse;

function alertarmejor(){
    alert('la mejor entre comillas');
}
document.querySelector('h2').onclick = alertarmejor;

let miimagen = document.querySelector('img');
miimagen.onclick=function(){
    let src = miimagen.getAttribute('src');
    if(src === 'fotosweb/angelodemoni.jpg' ){
        miimagen.setAttribute('src','fotosweb/demoniangel.jpg');
    }
    else{
        miimagen.setAttribute('src','fotosweb/angelodemoni.jpg');
    }
}
