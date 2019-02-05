function aggiungi() {

    var nome = $('#nome').val();
    var reddito = $('#reddito').val();
    var sesso = $('#sesso').val();


    if (sesso.toUpperCase() == "MASCHIO") {
        $("#Maschio").append("<div> NOME : " + nome + "\nREDDITO : " + reddito + "<div>");
    } else {
        $("#Femmina").append("<div> NOME : " + nome + "\nREDDITO : " + reddito + "<div>");
    }
}