let username= prompt('Enter your username', '' )
let p = document.getElementById('p')
let p2 =document.getElementById('p2')
let h1 = document.querySelector('h1')
if (username){
    p2.innerText = username;
    p.innerText = 'logout';
    h1.style.display = 'block'

}
p.onclick = function(){
   if(p.innerText == 'log in'){
       p.innerText = 'log out'
       p2.style.display = 'block';
       h1.style.display = 'block'
location.reload();
}else{
    p.innerText = 'log in';
    let c = confirm();
    if(c === true){
        p2.style.display = 'none'
        h1.style.display = 'none'
    }else{
        alert('u re still logged in')
        p.innerText = 'log out'
    }
}
}