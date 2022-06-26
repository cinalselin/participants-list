const inputName = document.getElementById("inputName");
const list = document.getElementById("list");
const anzahlName = document.getElementById("anzahlName");

let teilnehmer = [];

// ---------- ADD ----------

let addTeilnehmer = (event) => {
    event.preventDefault();
    teilnehmer.push(inputName.value);

    if(inputName.value == "") {
        teilnehmer.pop();
        anzahlName.innerHTML = "Please type a name!";

    } else {
        list.innerHTML = `<h3> ${teilnehmer.join("</h3><h3>")} </h3>`;
        let length = teilnehmer.length;
        anzahlName.innerHTML = length;
        inputName.value = "";

    }
    
};



// ---------- REMOVE ----------

deleteTeilnehmer = (event) => {
    event.preventDefault();
    teilnehmer.pop();

    if(teilnehmer.length != 0) {
        list.innerHTML = `<h3> ${teilnehmer.join("</h3><h3>")} </h3>`;
        let length = teilnehmer.length;
        anzahlName.innerHTML = length;

}   
    else {
        list.innerHTML = "";
        anzahlName.innerHTML = "";
}
};
