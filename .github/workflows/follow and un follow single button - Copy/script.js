let istatus = document.querySelector('h5')
let addfriend = document.querySelector('#add')
let cont = 0
addfriend.addEventListener("click", function(){
    if(cont == 0){
        istatus.style.color = "green"
        istatus.innerHTML = "Friend"
        cont = 1
        addfriend.innerHTML = "Remove Friend"
    }else{
        istatus.style.color = "red"
        istatus.innerHTML = "Stranger"
        cont = 0
        addfriend.innerHTML = "Add Friend"
    }
})