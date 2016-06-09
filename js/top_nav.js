////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// TOP NAV
// background
const top_nav_bkgd_height = 5;

const top_nav_bkgd = document.createElement("div");
  top_nav_bkgd.id = "top_nav_bkgd";
  top_nav_bkgd.style.position = "absolute";
  top_nav_bkgd.style.top = 0;
  top_nav_bkgd.style.left = 0;
  top_nav_bkgd.style.width = "100%";
  top_nav_bkgd.style.height = top_nav_bkgd_height + "%";
  top_nav_bkgd.style.backgroundColor = "rgba(0,0,0,0)";
  document.body.appendChild(top_nav_bkgd);

  document.getElementById("top_nav_bkgd").appendChild(top_nav_menu);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const top_nav = document.getElementById("top_nav_menu");
  top_nav.style.position = "absolute";
  top_nav.style.top = "40%";
  top_nav.style.left = "1%";
  top_nav.style.width = "99%";
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// DROP-DOWN MENU FOR THE "EXPORT" BUTTON IN THE TOP NAVIGATION MENU
const copy_options = document.createElement("div");
  copy_options.id = "copy_options";
  copy_options.style.position = "absolute";
  copy_options.style.top = "1%";
  copy_options.style.left = "5%";
  copy_options.style.backgroundColor = "#0c8";
  copy_options.style.color = "#000";

function copy_to(filetype){
  cut_file();
  var request = new XMLHttpRequest();
  request.open("POST", "/copy_to", true);
  request.send(JSON.stringify([metadata_filename, filetype, new_cut]));
}

var show_copy_options = 0;
var expected_file_size_3gp = 0;
var expected_file_size_avi = 0;
var expected_file_size_flv = 0;
var expected_file_size_m4a = 0;
var expected_file_size_mp3 = 0;
var expected_file_size_mp4 = 0;
var expected_file_size_webm = 0;
function convert(value){
  show_copy_options = value;
  function show_options(){
    if (value === 1){
      var copy_options_list_filetypes = ["3gp", "avi", "flv", "m4a", "mp3", "mp4", "webm"];
      var copy_options_list_expected_file_size = [];
      var copy_options_list_functions = [];
      for (var n = 0, len = copy_options_list_filetypes.length; n < len; n++){
        copy_options_list_expected_file_size[n] = 0;
        copy_options_list_functions[n] = "copy_to(metadata_filename, " + copy_options_list_filetypes[n] + "";
      }

      var copy_options_list1 = [];
      for (var n = 0, len = copy_options_list_filetypes.length; n < len; n++){
        copy_options_list1[n] = "<tr><td onclick='copy_to(\"" + copy_options_list_filetypes[n] + "\")'>> " + copy_options_list_filetypes[n] + " (" + copy_options_list_expected_file_size[n] + " mb)</td></tr>";
      }
      var copy_options_list2 = "<table width=100%>" + copy_options_list1 + "</table>";

      copy_options.innerHTML = copy_options_list2.replace(/,/g,"");
      main_window_bkgd.appendChild(copy_options);
    } else{
      setTimeout(function(){
        copy_options.innerHTML = "";
      }, 3000);
    }
  }
  show_options();
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const button_convert = document.getElementById("button_convert");
  button_convert.onmouseover = function(){ convert(1); };
  button_convert.onmouseout = function(){ convert(0); };

const view_files = document.getElementById("view_files");
  setTimeout(function(){
    view_files.addEventListener("click", view_available_files);
  }, 500);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var list_of_available_files = "";
function view_available_files(){
 var request = new XMLHttpRequest();
 request.open("GET", "/get_available_files", true);
 request.send();

 setTimeout(function(){
   list_of_available_files = request.response;
   update_list_of_available_files();
 }, 200)
}
view_available_files();
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const main_window_bkgd_height = 100 - top_nav_bkgd_height;

var main_window_bkgd = document.createElement("div");
  main_window_bkgd.id = "main_window_bkgd";
  main_window_bkgd.style.position = "absolute";
  main_window_bkgd.style.top = top_nav_bkgd_height + "%";
  main_window_bkgd.style.left = 0;
  main_window_bkgd.style.width = "100%";
  main_window_bkgd.style.height = main_window_bkgd_height + "%";
  main_window_bkgd.style.color = "#fff";
  document.body.appendChild(main_window_bkgd);

  main_window_bkgd = document.getElementById("main_window_bkgd");
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// multimedia player elements
const multimedia_player = document.createElement("video");
  multimedia_player.id = "multimedia_player";
  multimedia_player.style.position = "absolute";
  multimedia_player.style.top = "1%";
  multimedia_player.style.left = "20%";
  multimedia_player.style.height = "79%";
  multimedia_player.style.width = "79%";
  multimedia_player.style.border = "1px solid #000";
  multimedia_player.controls = false;
  multimedia_player.style.backgroundColor = "#000";
  main_window_bkgd.appendChild(multimedia_player);
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////