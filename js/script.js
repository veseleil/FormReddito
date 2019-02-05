
var maschi_tot = 0;
var femmine_tot = 0;

function aggiungi() {

    var nome= $('#nome').val();
    var reddito= $('#reddito').val();
    var sesso= $('#sesso').val();

    if(nome == ""){
        alert("INSERISCI NOME !");
        return;
    }


    if (sesso.toUpperCase() == "MASCHIO") {
        maschi_tot++;
        $("#maschioNome").append("<div>" + nome + "<div>");
        $("#maschioReddito").append("<div>" + reddito + "<div>");
        $("#totaleMaschi").text("TOTALE : " + maschi_tot);
    } else {
        femmine_tot++;
        $("#femminaNome").append("<div>" + nome + "<div>");
        $("#femminaReddito").append("<div>" + reddito + "<div>");
        $("#totaleFemmine").text("TOTALE : " + femmine_tot);
    }
}
