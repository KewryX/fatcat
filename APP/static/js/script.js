document.addEventListener('DOMContentLoaded', main)

async function main(){


    let jokediv = document.querySelector('#joke');
    let setupdiv = document.querySelector('#setup')
    let deliverydiv = document.querySelector('#delivery')
    
    let nsfwdiv = document.querySelector('#nsfw');
    let religiousdiv = document.querySelector('#religious');
    let politicaldiv = document.querySelector('#political');
    let racistdiv = document.querySelector('#racist');
    let sexistdiv = document.querySelector('#sexist');
    let explicitdiv = document.querySelector('#explicit');

    let categorydiv = document.querySelector('#category');
    let typediv = document.querySelector('#type');
    //macskafaktdiv.innerHTML="X";

    let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";
    let szotar = await olvaso_fetch(url);
    console.log(szotar['type']);
    if (szotar.type == 'twopart')
    {

        jokediv.innerHTML=szotar.setup;
        deliverydiv.innerHTML = szotar.delivery
        nsfwdiv.innerHTML=`NSFW: ${szotar.flags.nsfw}`;
        religiousdiv.innerHTML=`religious: ${szotar.flags.religious}`;
        politicaldiv.innerHTML=`political: ${szotar.flags.political}`;
        racistdiv.innerHTML=`racist: ${szotar.flags.racist}`;
        sexistdiv.innerHTML=`sexist: ${szotar.flags.sexist}`;
        explicitdiv.innerHTML=`explicit: ${szotar.flags.explicit}`;

        categorydiv.innerHTML=`Category: ${szotar.category}`;
        typediv.innerHTML=`Type: ${szotar.type}`;

    }
    else
    {

        jokediv.innerHTML=szotar.joke;
        deliverydiv.style.display = "none";
        nsfwdiv.innerHTML=`NSFW: ${szotar.flags.nsfw}`;
        religiousdiv.innerHTML=`religious: ${szotar.flags.religious}`;
        politicaldiv.innerHTML=`political: ${szotar.flags.political}`;
        racistdiv.innerHTML=`racist: ${szotar.flags.racist}`;
        sexistdiv.innerHTML=`sexist: ${szotar.flags.sexist}`;
        explicitdiv.innerHTML=`explicit: ${szotar.flags.explicit}`;

        categorydiv.innerHTML=`Category: ${szotar.category}`;
        typediv.innerHTML=`Type: ${szotar.type}`;
    }
    console.log(szotar['joke']);

    
}


async function olvaso_fetch(url){
    let promise = await fetch(url);
    let promise_json = await promise.json();
    return promise_json;
}