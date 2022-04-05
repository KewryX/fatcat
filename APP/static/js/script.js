document.addEventListener('DOMContentLoaded', main)

async function main(){


    let jokediv = document.querySelector('#joke');
    //macskafaktdiv.innerHTML="X";

    let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
    let szotar = await olvaso_fetch(url);
    console.log(szotar['type']);
    console.log(szotar['joke']);

    jokediv.innerHTML=szotar.joke;

}


async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}