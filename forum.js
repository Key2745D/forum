(async function(){

const token = new URL(document.currentScript.src).searchParams.get("token");
const domain = location.hostname;

// ambil database token online
const db = await fetch("https://raw.githubusercontent.com/Key2745D/forum/main/tokens.json")
.then(r=>r.json());

// cek
if(db[token] !== domain){
    document.body.innerHTML = "License Invalid";
    throw new Error("Blocked");
}

console.log("License OK");

})();
