$(function(){
    var games = ['pierre', 'papier', 'ciseaux'];//on déclare le tableau game avec pierre, feuille papier ciseaux
    var win = 0, lost = 0, nbGame = 0;//On déclare la variable win ou on leur attribut la valeur 0
  $('#shifumi').click(function(){//le bouton s'appel Shifumi
    nbGame++;//on incrémente le nb de partie a chaque click
    // le math.random génére un nombre entre 1 et 3 et math. floor arrondi a l'entier
    var ComputerGame = Math.floor(Math.random()*3+1);
    // Prise en compte du choix du joueur, on récupere la valeur du selecteur
    var Player = $('#player').val();

    compare(ComputerGame,Player);//on compare ce que l'ordinateur a choisit et le joueur
    var message = 'Le pourcentage de victoire contre l\'ordinateur est : ' + ((win /nbGame)* 100).toFixed(2) + '%';
    $('#result').html(message);//.html sert a renvoyer et modifier l'element selectionné
    $('.left').html(win);
    $('.right').html(lost);
  });
  function compare(g1,g2){

    if (g1==g2){
      alert('match nul');
  }
  // Comparaison des résultats pierre papier ciseaux, incrémentation du score (c'est toute les possibilité du jeu)
  else if ((g1==1 && g2==3)||(g1==2 && g2==1)||(g1==3 && g2==2)) {
    alert('félicitation vous avez gagné, l\'ordinateur a joué ' + games[g2 - 1]);
    win++;//nb de partie gagné
  }
  else {
    alert('Perdu, retente ta chance!!');
    lost++;
  }
}
});
