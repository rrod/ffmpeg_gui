////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// KEEP/REMOVE AUDIO AND VIDEO BUTTONS
var keep_audio = 1;
var keep_video = 1;
function generate_no_audio_no_video_buttons(){
  const button_no_audio = document.createElement("div");
    button_no_audio.id = "button_no_audio";
    button_no_audio.className = "button_custom";
    button_no_audio.style.top = "95%";
    button_no_audio.style.left = "80%";
    button_no_audio.style.height = "4%";
    button_no_audio.style.backgroundColor = "#0a0";
    button_no_audio.innerHTML = "Keep Audio &radic;";
    main_window_bkgd.appendChild(button_no_audio);

  const button_no_audio_cover = document.createElement("div");
    button_no_audio_cover.id = "button_no_audio_cover";
    button_no_audio_cover.className = "button_custom";
    button_no_audio_cover.style.top = button_no_audio.style.top;
    button_no_audio_cover.style.left = button_no_audio.style.left;
    button_no_audio_cover.style.height = button_no_audio.style.height;
    button_no_audio_cover.style.width = button_no_audio.style.width;
    button_no_audio_cover.style.backgroundColor = "rgba(0,0,0,0)";
    main_window_bkgd.appendChild(button_no_audio_cover);

  const button_no_video = document.createElement("div");
    button_no_video.id = "button_no_video";
    button_no_video.className = "button_custom";
    button_no_video.style.top = "95%";
    button_no_video.style.left = "90%";
    button_no_video.style.height = "4%";
    button_no_video.style.backgroundColor = "#0a0";
    button_no_video.innerHTML = "Keep Video &radic;";
    main_window_bkgd.appendChild(button_no_video);

  const button_no_video_cover = document.createElement("div");
    button_no_video_cover.id = "button_no_video_cover";
    button_no_video_cover.className = "button_custom";
    button_no_video_cover.style.top = button_no_video.style.top;
    button_no_video_cover.style.left = button_no_video.style.left;
    button_no_video_cover.style.height = button_no_video.style.height;
    button_no_video_cover.style.width = button_no_video.style.width;
    button_no_video_cover.style.backgroundColor = "rgba(0,0,0,0)";
    main_window_bkgd.appendChild(button_no_video_cover);

    button_no_audio_cover.onclick = function(){
      var request = new XMLHttpRequest();
      request.open("POST", "/get_no_audio", true);
      switch(keep_audio){
        case 0:
          button_no_audio.style.backgroundColor = "#a00";
          button_no_audio.innerHTML = "Remove Audio &radic;";

          request.send(keep_audio);

          keep_audio = 1;
          break;
        case 1:
          button_no_audio.style.backgroundColor = "#0a0";
          button_no_audio.innerHTML = "Keep Audio &radic;";

          request.send(keep_audio);

          keep_audio = 0;
          break;
        default:
          console.log("Error with 'keep_audio' button.");
      }
    }

    button_no_video_cover.onclick = function(){
      var request = new XMLHttpRequest();
      request.open("POST", "/get_no_video", true);
      switch(keep_video){
        case 0:
          button_no_video.style.backgroundColor = "#a00";
          button_no_video.innerHTML = "Remove Video &radic;";

          request.send(keep_video);

          keep_video = 1;
          break;
        case 1:
          button_no_video.style.backgroundColor = "#0a0";
          button_no_video.innerHTML = "Keep Video &radic;";

          request.send(keep_video);

          keep_video = 0;
          break;
        default:
          console.log("Error with 'keep_video' button.");
      }
    }
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// ADJUST OUTPUT VIDEO QUALITY BUTTON
var output_quality = 1;
function generate_quality_buttons(){
  const button_output_quality = document.createElement("div");
    button_output_quality.id = "button_output_quality";
    button_output_quality.className = "button_custom";
    button_output_quality.style.top = "95%";
    button_output_quality.style.left = "70%";
    button_output_quality.style.height = "4%";
    button_output_quality.style.backgroundColor = "#0a0";
    button_output_quality.innerHTML = "High Quality &radic;";
    main_window_bkgd.appendChild(button_output_quality);

  const button_output_quality_cover = document.createElement("div");
    button_output_quality_cover.id = "button_output_quality_cover";
    button_output_quality_cover.className = "button_custom";
    button_output_quality_cover.style.top = button_output_quality.style.top;
    button_output_quality_cover.style.left = button_output_quality.style.left;
    button_output_quality_cover.style.height = button_output_quality.style.height;
    button_output_quality_cover.style.width = button_output_quality.style.width;
    button_output_quality_cover.style.backgroundColor = "rgba(0,0,0,0)";
    button_output_quality_cover.onclick = function(){
      var request = new XMLHttpRequest();
      request.open("POST", "/get_output_quality", true);
      switch(output_quality){
        case 0:
          button_output_quality.style.backgroundColor = "#a00";
          button_output_quality.innerHTML = "Low Quality &radic;";

          request.send(output_quality);

          output_quality = 1;
          break;
        case 1:
          button_output_quality.style.backgroundColor = "#0a0";
          button_output_quality.innerHTML = "High Quality &radic;";

          request.send(output_quality);

          output_quality = 0;
          break;
        default:
          console.log("Error with 'output_quality' button.");
      }
    }
    main_window_bkgd.appendChild(button_output_quality_cover);
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////