////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// back-end Node.js script for "GUI for FFmpeg"
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// global variables
var fs = require("fs");
var express = require('express');
var exec = require("child_process").exec;

var app = express();
app.use(express.static(__dirname));

var selected_file = "";
var supported_file_types = ["3gp", "avi", "flv", "m4a", "mp3", "mp4", "webm"];
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// update the list of available files in the folder
app.all('/get_available_files', function(req, res){
  var available_files = [];
  const check_available_files = [];
    check_available_files[0] = "ls *.webm";
    check_available_files[1] = "ls *.mp3";
    check_available_files[2] = "ls *.avi";
    check_available_files[3] = "ls *.3gp";
    check_available_files[4] = "ls *.mp4";
    check_available_files[5] = "ls *.flv";
    check_available_files[6] = "ls *.m4a";

    var o = 0;
    for (var n = 0, len = check_available_files.length; n < len; n++){
      exec(check_available_files[n], function(err, stdout){
        var kk = stdout.split("\n");
        for (var k = 0; k < kk.length; k++){
          if (stdout.split("\n")[k] != ''){
            available_files[o] = stdout.split("\n")[k];
            o++;
          }
        }
      });
    }

    setTimeout(function(){
      res.send(available_files.toString());
    }, 100);
});
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// retrieves the selected file's name from the client to use for FFmpeg
app.all('/send_selected_file', function(req, res){
  req.on('data', function(data){
    selected_file = data.toString();
    // console.log("Selected file: " + data.toString());
  });
});
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// change the video quality
var get_output_quality_flag = "-b:v 2000k";
app.all('/get_output_quality', function(req, res){
  req.on('data', function(data){
    get_output_quality_flag = parseInt(data);

    switch (get_output_quality_flag){
      case 0:
        get_output_quality_flag = "";
        // console.log("Lower video quality.");
        break;
      case 1:
        get_output_quality_flag = "-b:v 2000k";
        // console.log("Higher video quality.");
        break;
      default:
        console.log("Could not get correct value for get_output_quality_flag.");
    }
  });
});
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// GET -an / -vn for NO AUDIO / NO VIDEO flags
var get_no_audio_flag = "";
var get_no_video_flag = "";
app.all('/get_no_audio', function(req, res){
  req.on('data', function(data){
    get_no_audio_flag = parseInt(data);

    switch (get_no_audio_flag){
      case 0:
        get_no_audio_flag = "-an"
        // console.log("Removing the audio.");
        break;
      case 1:
        get_no_audio_flag = "";
        // console.log("Keeping the audio.");
        break;
      default:
        console.log("Could not get correct value for get_no_audio_flag.");
    }
  });
});

app.all('/get_no_video', function(req, res){
  req.on('data', function(data){
    get_no_video_flag = parseInt(data);

    switch (get_no_video_flag){
      case 0:
        get_no_video_flag = "-vn"
        // console.log("Removing the video.");
        break;
      case 1:
        get_no_video_flag = "";
        // console.log("Keeping the video.");
        break;
      default:
        console.log("Could not get correct value for get_no_video_flag.");
    }
  });
});
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// spits out the final command to FFmpeg when the user presses the
// "Copy File" button
app.all("/copy_to", function(req, res){
  req.on("data", function(data){
    selected_file = JSON.parse(data)[0];
    var filetype = JSON.parse(data)[1];
    var new_cut = JSON.parse(data)[2];

    for (var n = 0, len = supported_file_types.length; n < len; n++){
      if (filetype === supported_file_types[n].toString()){
        var cmd = "ffmpeg -i " +
          selected_file +
          " " +
          new_cut +
          " " +
          get_no_audio_flag +
          " " +
          get_no_video_flag +
          " " +
          get_output_quality_flag +
          " ffmpeg_gui_test_2." +
          supported_file_types[n];

        exec(cmd);
        console.log(cmd);
      }
    }
  });
});
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("FFMPEG GUI server listening at http://%s:%s", host, port);
});
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////