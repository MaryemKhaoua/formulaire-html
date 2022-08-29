
function affichedate()
{
    var C= new Date();
    document.getElementById("DT").innerHTML=C;
}
function namee() 
{
    let B = document.getElementById('A');
    let nom = document.getElementById('name');
    if (nom.value.length <= 2) 
    {
      B.innerText = "INVALID"
      B.style.color="red"
      return false;
  
    }
    else {
      B.innerText="VALID"
      B.style.color="green"
      return true;
    }
}
function prenom() {

    let B1 = document.getElementById('A1');
  
    let prenm = document.getElementById('prenom');
  
    if (prenm.value.length <= 2)
     {
      B1.innerText = "INVALID"
      B1.style.color="red"
      return false;
  
    }
    else {
      B1.innerText="VALID"
      B1.style.color="green"
      return true;
    }
  }
  function age()
   {
    let dt=document.getElementById('age').value;
    let B2 = document.getElementById('A2');
    let ag = new Date().getFullYear()- new Date(dt).getFullYear();
    if (ag <= 18 || dt=="")
     {
      B2.innerText = 'Non admis'
      B2.style.color="red"
      return false;
    }
    else 
    {
      B2.innerText="Admis"
      B2.style.color="green"
      return true;
    }
  }
  function codep() {

    let B3 = document.getElementById('A3');
    let cp = document.getElementById('code');
  
    if (cp.value.length == 0 ||  cp.value.length<5) {
      B3.innerText = 'IVALID'
      B3.style.color="red"
      return false;
    }
    else {
      B3.innerText="VALID"
      B3.style.color="green"
      return true;
    }
  }
function pays()
{
  let B4=document.getElementById('A4');
  let select=document.getElementById('paays');
  if(select.value=="")
  {
    B4.innerText="Choisir votre pays"
    B4.style.color="red"
    return false;
  }
  else{
    B4.innerText="VALID"
   B4.style.color="green"
    return true;
  }
}

function genre()
{
  let genre= document.querySelector('input[name ="gnr"]:checked');
  let B5=document.getElementById('A5');
if(genre != null){ 
    B5.innerText="VALID"
  B5.style.color="green"
  return true; 
 
} 
else {
    B5.innerText="Choisir votre genre"
    B5.style.color="red"
    return false;
}
}
function contac()
{
 let  contact = document.querySelector('input[name = "cnt"]:checked');
  let B6=document.getElementById('A6');

if(contact != null){  
  
  B6.innerText="VALID"
  B6.style.color="green"
return true;
}
 else {
    B6.innerText="Choisir preference de contact"
    B6.style.color="red"
    return false;
}
}
function email()
{
  let B7=document.getElementById('A7');
  var mail = document.getElementById('email').value;
  var regEmail = new RegExp('^[0-9a-z._-]+[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
  
     if(!regEmail.test(mail)){
         B7.innerText="INVALID"; 
         B7.style.color="red"
         return false;
      }else{
        B7.innerText="VALID"
       B7.style.color="green"
         return true;
      }
   }
   function password()
   {
     let B8=document.getElementById('A8');
     let mdp=document.getElementById('passwrd').value;
     let B9=document.getElementById('A9');
     let vmdp=document.getElementById('vpasswrd').value;
     var regularExpression=/^[0-9a-z;,:!"#&*$_-é&?@*]{8,}$/;
     if(!regularExpression.test(mdp))
     {
      B8.innerText="Verifier votre mot de passe";
      B8.style.color="red"
     }
     else
     {
       B8.innerText="VALID"
       B8.style.color="green"
     }
     if(vmdp!=mdp|| vmdp=="")
    {
      B9.innerText="Password invalid";
      B9.style.color="red"
    }
      else{
       B9.innerText="VALID"
       B9.style.color="green"
    }
   }
   function verif() {
    namee()
    prenom()
    age()
    codep()
    pays()
    genre()
    contac()
    email()
    password()
  }