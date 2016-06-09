////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const file_metadata_background = document.createElement("div");
  file_metadata_background.id = "file_metadata_background";
  file_metadata_background.style.position = "absolute";
  file_metadata_background.style.top = "80%";
  file_metadata_background.style.left = "1%";
  file_metadata_background.style.height = "10%";
  file_metadata_background.style.width = "17%";
  file_metadata_background.style.backgroundColor = "#233";
  file_metadata_background.style.border = "1px solid #000";
  file_metadata_background.style.color = "#fff";
  file_metadata_background.style.padding = "8px";
  file_metadata_background.style.textAlign = "center";
  file_metadata_background.innerHTML = "<strong>FILE DATA</strong>";
  main_window_bkgd.appendChild(file_metadata_background);

const file_metadata = document.createElement("div");
  file_metadata.id = "file_metadata";
  file_metadata.style.position = "absolute";
  file_metadata.style.top = "84%";
  file_metadata.style.left = "1%";
  file_metadata.style.height = "15%";
  file_metadata.style.width = "18%";
  file_metadata.style.backgroundColor = "#222";
  file_metadata.style.border = "1px solid #000";
  file_metadata.style.color = "#fff";
  file_metadata.style.overflowY = "scroll";
  main_window_bkgd.appendChild(file_metadata);

var metadata_filename = multimedia_player.src.substr(42);
setTimeout(function(){
  file_metadata.innerHTML = "\
    Filename: " + metadata_filename + "<br>\
    Duration: " + multimedia_player.duration + " seconds<br>\
    ";
    update_metadata();
},500);

function update_metadata(filename, duration){
  metadata_filename = filename;

  setTimeout(function(){
    file_metadata.innerHTML = "\
      Filename: " + metadata_filename + "<br>\
      Duration: " + multimedia_player.duration.toFixed(2) + " seconds<br>\
      ";
  },500);
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////