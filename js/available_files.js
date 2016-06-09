////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const available_files_list_background = document.createElement("div");
  available_files_list_background.id = "available_files_list_background";
  available_files_list_background.style.position = "absolute";
  available_files_list_background.style.top = "1%";
  available_files_list_background.style.left = "1%";
  available_files_list_background.style.height = "70%";
  available_files_list_background.style.width = "17%";
  available_files_list_background.style.backgroundColor = "#233";
  available_files_list_background.style.border = "1px solid #000";
  available_files_list_background.style.color = "#fff";
  available_files_list_background.style.padding = "8px";
  available_files_list_background.style.textAlign = "center";
  available_files_list_background.innerHTML = "\
    <strong><center>AVAILABLE FILES</center></strong>\
    ";
  main_window_bkgd.appendChild(available_files_list_background);

const available_files_list = document.createElement("div");
  available_files_list.id = "available_files_list";
  available_files_list.style.position = "absolute";
  available_files_list.style.top = "5%";
  available_files_list.style.left = "1%";
  available_files_list.style.height = "74%";
  available_files_list.style.width = "18%";
  available_files_list.style.backgroundColor = "#222";
  available_files_list.style.border = "1px solid #000";
  available_files_list.style.color = "#fff";
  available_files_list.style.overflowY = "scroll";
  main_window_bkgd.appendChild(available_files_list);

function switch_file(filename, name){
  multimedia_player.src = filename;
  update_metadata(filename);
}

function update_list_of_available_files(){
  var check = list_of_available_files.search(",");
  var available_file = [];
  var available_file2 = list_of_available_files.split(",");
  var available_table1 = "<table>";
  var available_table2 = [];
  for (var n = 0, len = available_file2.length; n < len; n++){
    available_table2[n] = "<tr><td onclick='switch_file(\"" +
      available_file2[n] + "\")' class='available_file_css'>" +
      available_file2[n] + "</td></tr>";
    available_file[n] = "<div onclick='switch_file(\"" +
      available_file2[n] + "\")' class='available_file_css'>> " +
      available_file2[n] + "</div>";
  }
  var available_table3 = "<table width=100%>" + available_table2 + "</table>";

  // remove excess commas
  var available_table4 = available_table3.replace(/,/g,"");
  var o = 0;

  available_files_list.innerHTML = available_table4;

  // set the first file in the list of available files to automatically load
  switch_file(available_file2[0]);
}
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////