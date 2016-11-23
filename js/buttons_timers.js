////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var click_one = 0;
var click_two = 0;

// used for locking in timer values
var click_one_locked = 0;
var click_two_locked = 0;

var new_cut = "";
function cut_file(){
  if ((click_one - click_two) < 0){
    // convert to hh:mm:ss time
    var click_one_hours = parseInt(click_one / 3600);
    var click_one_minutes = parseInt(click_one / 60) % 60;
    var click_one_seconds = click_one % 60;
    var click_one_final = "00" + ":" + click_one_minutes + ":" + click_one_seconds.toFixed(1);

    click_two = click_two - click_one; // calculate the time length to cut
    var click_two_hours = parseInt(click_two / 3600);
    var click_two_minutes = parseInt(click_two / 60) % 60;
    var click_two_seconds = click_two % 60;
    var click_two_final = "00" + ":" + click_two_minutes + ":" + click_two_seconds.toFixed(1);

    new_cut = " -ss " + click_one_final + " -t " + click_two_final + " ";
  }
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const time_reset = document.createElement("div");
  time_reset.id = "time_reset";
  time_reset.className = "button_custom";
  time_reset.style.top = "90%";
  time_reset.style.left = "20%";
  time_reset.style.height = "3%";
  time_reset.style.width = "29%";
  time_reset.innerHTML = "Reset Timers";
  time_reset.onclick = function(){
    time_duration.innerHTML = "Duration (-t)<br>";
    time_start.innerHTML = "Start Time (-ss)<br>";
    time_end.innerHTML = "End Time<br>";

    click_one = 0;
    click_two = 0;
    new_cut = "";
  }
  main_window_bkgd.appendChild(time_reset);

const time_duration = document.createElement("div");
  time_duration.id = "time_duration";
  time_duration.className = "button_custom";
  time_duration.style.top = "94%";
  time_duration.style.left = "20%";
  time_duration.style.height = "5%";
  time_duration.innerHTML = "Duration (-t)<br>";
  main_window_bkgd.appendChild(time_duration);

const time_start = document.createElement("div");
  time_start.id = "time_start";
  time_start.className = "button_custom";
  time_start.style.top = "94%";
  time_start.style.left = "30%";
  time_start.style.height = "5%";
  time_start.style.color = "#fff";
  time_start.innerHTML = "Start Time (-ss)<br>";
  time_start.onclick = function(){ // locks in the starting time
    if (time_start.style.color === "rgb(255, 255, 255)"){
      click_one_locked = click_one.toFixed(3);
      time_start.style.color = "#f00";
    }else{
      time_start.style.color = "#fff";
    }
  }
  main_window_bkgd.appendChild(time_start);

const time_end = document.createElement("div");
  time_end.id = "time_end";
  time_end.className = "button_custom";
  time_end.style.top = "94%";
  time_end.style.left = "40%";
  time_end.style.height = "5%";
  time_end.style.color = "#fff";
  time_end.innerHTML = "End Time<br>";
  time_end.onclick = function(){ // locks in the ending time
    if (time_end.style.color === "rgb(255, 255, 255)"){
      click_two_locked = click_two.toFixed(3);
      time_end.style.color = "#f00";
    }else{
      time_end.style.color = "#fff";
    }
  }
  main_window_bkgd.appendChild(time_end);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////