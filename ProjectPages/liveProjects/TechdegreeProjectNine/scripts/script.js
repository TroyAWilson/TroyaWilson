const dropDown = document.getElementsByClassName('dropDown');
const bell = document.getElementById('bell');
const circle = document.getElementsByClassName('circle');
const notificationBar =document.getElementsByClassName('notification-bar-top');
const xButton =document.getElementsByClassName('notification-x');
const messageUserButton =document.getElementsByClassName('message-user-button');
const messageUserText = document.getElementsByClassName('message-user-text');
const messageUserInput = document.getElementsByClassName('message-user-input');
const messageSent =document.getElementsByClassName('sent-message');
const errorMessage =document.getElementsByClassName('error-message');


bell.addEventListener("click", ()=>{
  dropDown[0].classList.toggle("show");
  circle[0].style.opacity ="0";
});


xButton[0].addEventListener('click', ()=>{
  notificationBar[0].style.display = "none";
});

messageUserButton[0].addEventListener('click', ()=>{
  if (messageUserInput[0].value == "" || messageUserText[0].value == "")
  {
  errorMessage[0].style.display ="inline";
  messageSent[0].style.display ="none";
    if(messageUserText[0].value == "          " || messageUserText[0].value ==""){
  messageUserText[0].classList.add('error-border');
    }
    if(messageUserInput[0].value == ""){
  messageUserInput[0].classList.add('error-border');
    }
}else{
  messageSent[0].style.display ="inline";
  errorMessage[0].style.display ="none";
  messageUserText[0].classList.remove('error-border');
  messageUserInput[0].classList.remove('error-border');
}
  messageUserInput[0].value ="";
  messageUserText[0].value ="";
});
