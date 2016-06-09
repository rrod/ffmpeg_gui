////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// multimedia player elements
var get_media_playpause = 0;
var multimedia_control_colors = ["#00c", "#220"];
const multimedia_control_playpause = document.createElement("div");
  multimedia_control_playpause.id = "multimedia_control_playpause";
  multimedia_control_playpause.className = "button_custom";
  multimedia_control_playpause.style.top = "95%";
  multimedia_control_playpause.style.left = "50%";
  multimedia_control_playpause.style.height = "4%";
  multimedia_control_playpause.innerHTML = "Play";
  multimedia_control_playpause.style.backgroundColor = multimedia_control_colors[0];
  main_window_bkgd.appendChild(multimedia_control_playpause);

  multimedia_control_playpause.onclick = function(){
    switch(get_media_playpause){
      case 0:
        multimedia_player.play();
        multimedia_control_playpause.innerHTML = "Pause";
        multimedia_control_playpause.style.backgroundColor = multimedia_control_colors[1];

        // run autoplay duration bar
        (function run_autoplay_duration_bar(){
          document.getElementById("duration_bar_progress_autoplay").style.width = ((multimedia_player.currentTime / multimedia_player.duration) * 100) + "%";
          requestAnimationFrame(run_autoplay_duration_bar);
        })();

        get_media_playpause = 1;
        break;
      case 1:
        multimedia_player.pause();
        multimedia_control_playpause.innerHTML = "Play";
        multimedia_control_playpause.style.backgroundColor = multimedia_control_colors[0];

        get_media_playpause = 0;
        break;
      default:
        console.log("Error with 'playpause' button.");
    }
  }

var get_media_mute = 0;
const multimedia_control_mute = document.createElement("div");
  multimedia_control_mute.id = "multimedia_control_mute";
  multimedia_control_mute.className = "button_custom";
  multimedia_control_mute.style.top = "95%";
  multimedia_control_mute.style.left = "60%";
  multimedia_control_mute.style.height = "4%";
  multimedia_control_mute.innerHTML = "Mute";
  multimedia_control_mute.style.backgroundColor = multimedia_control_colors[0];
  main_window_bkgd.appendChild(multimedia_control_mute);

  multimedia_control_mute.onclick = function(){
    switch(get_media_mute){
      case 0:
        multimedia_player.muted = true;
        multimedia_control_mute.innerHTML = "Unmute";
        multimedia_control_mute.style.backgroundColor = multimedia_control_colors[1];

        get_media_mute = 1;
        break;
      case 1:
        multimedia_player.muted = false;
        multimedia_control_mute.innerHTML = "Mute";
        multimedia_control_mute.style.backgroundColor = multimedia_control_colors[0];

        get_media_mute = 0;
        break;
      default:
        console.log("Error with 'mute' button.");
    }
  }

var get_media_loop = 0;
const multimedia_control_loop = document.createElement("div");
  multimedia_control_loop.id = "multimedia_control_loop";
  multimedia_control_loop.className = "button_custom";
  multimedia_control_loop.style.top = "90%";
  multimedia_control_loop.style.left = "50%";
  multimedia_control_loop.style.height = "4%";
  multimedia_control_loop.innerHTML = "Looping On";
  multimedia_control_loop.style.backgroundColor = multimedia_control_colors[0];
  main_window_bkgd.appendChild(multimedia_control_loop);

  // set initial state
  multimedia_player.loop = true;

  multimedia_control_loop.onclick = function(){
    switch(get_media_loop){
      case 0:
        multimedia_player.loop = false;
        multimedia_control_loop.innerHTML = "Looping Off";
        multimedia_control_loop.style.backgroundColor = multimedia_control_colors[1];

        get_media_loop = 1;
        break;
      case 1:
        multimedia_player.loop = true;
        multimedia_control_loop.innerHTML = "Looping On";
        multimedia_control_loop.style.backgroundColor = multimedia_control_colors[0];

        get_media_loop = 0;
        break;
      default:
        console.log("Error with 'loop' button.");
    }
  }

var get_media_speed = 1;
const multimedia_control_speed = document.createElement("div");
  multimedia_control_speed.id = "multimedia_control_speed";
  multimedia_control_speed.className = "button_custom";
  multimedia_control_speed.style.top = "90%";
  multimedia_control_speed.style.left = "60%";
  multimedia_control_speed.style.height = "4%";
  multimedia_control_speed.innerHTML = "Speed (1.0x)";
  multimedia_control_speed.style.backgroundColor = multimedia_control_colors[0];
  main_window_bkgd.appendChild(multimedia_control_speed);

  // set initial state
  multimedia_player.playbackRate = 1.0;

  multimedia_control_speed.onclick = function(){
    switch(get_media_speed){
      case 0:
        multimedia_player.playbackRate = 0.5;
        multimedia_control_speed.innerHTML = "Speed (0.5x)";
        multimedia_control_speed.style.backgroundColor = multimedia_control_colors[0];

        get_media_speed = 1;
        break;
      case 1:
        multimedia_player.playbackRate = 1.0;
        multimedia_control_speed.innerHTML = "Speed (1.0x)";
        multimedia_control_speed.style.backgroundColor = multimedia_control_colors[0];

        get_media_speed = 2;
        break;
      case 2:
        multimedia_player.playbackRate = 1.5;
        multimedia_control_speed.innerHTML = "Speed (1.5x)";
        multimedia_control_speed.style.backgroundColor = multimedia_control_colors[0];

        get_media_speed = 3;
        break;
      case 3:
        multimedia_player.playbackRate = 2.0;
        multimedia_control_speed.innerHTML = "Speed (2.0x)";
        multimedia_control_speed.style.backgroundColor = multimedia_control_colors[0];

        get_media_speed = 0;
        break;
      default:
        console.log("Error with 'loop' button.");
    }
  }
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////