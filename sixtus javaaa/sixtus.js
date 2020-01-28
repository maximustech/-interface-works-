function hideWelcome() {
  let hideWel = document.getElementById("wel");
  let startgame = document.querySelector (".hide");
  let p = document.getElementById("para");
  hideWel.style.display = ( "none");
  startgame.style.display = ("block");
  p.style.display = ("none");
}

function gameTerms() {
  let p = document.getElementById("para");
  let input = document.getElementById("input1");
  let inputstring = [2]

  for( let i in inputstring){
    console.log(inputstring[i])
    if(input.value.includes(inputstring[i])){
      alert("Yo cool mehn..., you are correct!");
      p.style.display = ("block");
      input.focus();
      return false;
    }else if(!input.value.includes(inputstring[i])){
      alert('wrong');
      return false;
    }
  }
}
    function gameEnd(){
      let hideWel = document.getElementById("wel");
      let startgame= document.querySelector (".hide");
      hideWel.style.display = ( "block");
      startgame.style.display = ("none");
    }
