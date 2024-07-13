let btnUsersearch = document.querySelector(".searchForUser");
let userImage = document.querySelector(".UserImage");
let textLogo = document.querySelector(".textLogo");
let showInputForSearchUser = document.querySelector(".hideInput")
btnUsersearch.addEventListener("click",function(){
    userImage.classList.toggle("d-none");
    textLogo.classList.toggle("d-none");
    showInputForSearchUser.classList.toggle("d-block")
})
