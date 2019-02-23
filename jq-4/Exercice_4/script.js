$(document).ready(function(){
   //Au clic sur le bouton, je lance ma fonction :
   $("button").click(function(){
     var lastName = $("#lastName");
     var surname = $("#surname");
     var birthDate = $("#birthDate");
     var birthPlace = $("#birthPlace");
     var job = $("#job");
     var company = $("#company");
     var nameRegex = /^\D+[-]?\D+/i;
     var dateRegex = /^((0[1-9])|([12][0-9])|(3[01]))[ \/\.\-]((0[1-9])|(1[012]))[ \/\.\-](((19)\d{2})|((200[0-1])))/;
     //déclare variable avec chaîne vide pour concaténation à venir
     var myString = "";
     //Valeur true par défaut, si le test n'est pas ok deviendra false
     var isCorrect = true;
     //si la valeur de mon lastName est ok, je concatène avec var myString
     if (nameRegex.test(lastName.val())){
       myString += lastName.val();
       //et la bordure devient verte
       lastName.css("border", "green 1px solid");
     }else{
       //sinon la bordure devient rouge
       lastName.css("border", "red 1px solid");
       //je met ma var = false pour savoir que le champ n'est pas correct !
       isCorrect=false;
     }
     //si la valeur de mon surname est ok, je concatène avec var myString
     if (nameRegex.test(surname.val())){
       myString += " " + surname.val();
       //et la bordure devient verte
       surname.css("border", "green 1px solid");
     }else{
       //sinon la bordure devient rouge
       surname.css("border", "red 1px solid");
       //je met ma var = false pour savoir que le champ n'est pas correct !
       isCorrect=false;
     }
     //si la valeur de mon birthDate est ok, je concatène avec var myString
     if (dateRegex.test(birthDate.val())){
       myString += ", né(e) le " + birthDate.val();
       //et la bordure devient verte
       birthDate.css("border", "green 1px solid");
     }else{
       //sinon la bordure devient rouge
       birthDate.css("border", "red 1px solid");
       //je met ma var = false pour savoir que le champ n'est pas correct !
       isCorrect=false;
     }
     //si la valeur de mon birthPlace est ok, je concatène avec var myString
     if (birthPlace.val() != ""){
       myString += " à " + birthPlace.val();
       //et la bordure devient verte
       birthPlace.css("border", "green 1px solid");
     }else{
       //sinon la bordure devient rouge
       birthPlace.css("border", "red 1px solid");
       //je met ma var = false pour savoir que le champ n'est pas correct !
       isCorrect=false;
     }
     //si la valeur de mon job est ok, je concatène avec var myString
     if (job.val() != ""){
       myString += ", actuellement " + job.val();
       //et la bordure devient verte
       job.css("border", "green 1px solid");
     }else{
       //sinon la bordure devient rouge
       job.css("border", "red 1px solid");
       //je met ma var = false pour savoir que le champ n'est pas correct !
       isCorrect=false;
     }
     //si la valeur de mon company est ok, je concatène avec var myString
     if (company.val() != ""){
       myString += " à " + company.val();
       //et la bordure devient verte
       company.css("border", "green 1px solid");
     }else{
       //sinon la bordure devient rouge
       company.css("border", "red 1px solid");
       //je met ma var = false pour savoir que le champ n'est pas correct !
       isCorrect=false;
     }
     //si var isCorrect toujours true
     if (isCorrect == true){
       //alors j'affiche ma concaténation
       alert(myString);
     }else{
       //sinon j'affiche un message d'erreur.
       alert("Vérifier que tous les champs soient correctement remplis.");
     }
   });
 });
