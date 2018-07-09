//get video
videoPlayer = document.getElementById("myVideo");
//get array of spans
spanArray = document.getElementsByClassName('spanText');
//everytime the video time updates check for changes
videoPlayer.ontimeupdate = () => {
  //loops though array
  for(i = 0; i < spanArray.length; i++){
//if the current time is greater than or equal to the start time
       if (videoPlayer.currentTime >= spanArray[i].dataset.start)
        {   //add the class
          spanArray[i].classList.add('currentText');
        }
//if the current time is greater than the end time
      if (videoPlayer.currentTime >= spanArray[i].dataset.end)
        { //remove the class
          spanArray[i].classList.remove('currentText');
        }
     };
  }


// videoPlayer.ontimeupdate = () => {
//   console.log(videoPlayer.currentTime);
// }
