////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var get_output_dimensions = 4;
const output_dimensions = document.createElement("div");
  output_dimensions.id = "output_dimensions";
  output_dimensions.className = "button_custom";
  output_dimensions.style.top = "90%";
  output_dimensions.style.left = "70%";
  output_dimensions.style.height = "4%";
  output_dimensions.style.width = "29%";
  output_dimensions.innerHTML = "Output Resolution: no change";
  main_window_bkgd.appendChild(output_dimensions);

  output_dimensions.onclick = function(){
    switch(get_output_dimensions){
      case 0:
        output_dimensions.innerHTML = "Output Resolution: 320x240";
        output_dimensions.style.backgroundColor = "#622";

        get_output_dimensions = 1;
        break;
      case 1:
        output_dimensions.innerHTML = "Output Resolution: 640x480";
        output_dimensions.style.backgroundColor = "#622";

        get_output_dimensions = 2;
        break;
      case 2:
        output_dimensions.innerHTML = "Output Resolution: 1280x720";
        output_dimensions.style.backgroundColor = "#622";

        get_output_dimensions = 3;
        break;
      case 3:
        output_dimensions.innerHTML = "Output Resolution: 1920x1080";
        output_dimensions.style.backgroundColor = "#622";

        get_output_dimensions = 4;
        break;
      case 4:
        output_dimensions.innerHTML = "Output Resolution: no change";
        output_dimensions.style.backgroundColor = "#222";

        get_output_dimensions = 0;
        break;
      default:
        console.log("Error with 'resolution/dimension' button.");
    }
  }
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////