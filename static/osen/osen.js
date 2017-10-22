var osen_omake_start = 530;
var IsExtend = {};

function CreateCell(omake){
  var tr = document.createElement("tr");
  var td_num = document.createElement("td");
  var td_guest = document.createElement("td");
  var td_date = document.createElement("td");
  var a_num = document.createElement("a");

  td_num.appendChild(a_num);
  tr.appendChild(td_num);
  tr.appendChild(td_guest);
  tr.appendChild(td_date);
  if (omake) {
    var a_omake = document.createElement("a")
    var td_omake = document.createElement("td");
    td_omake.appendChild(a_omake);
    tr.appendChild(td_omake);
  }

  return tr;
}

function SetCell(dict, omake){
  var new_cell = CreateCell(omake);
  new_cell.children[0].children[0].textContent = dict['n'];
  new_cell.children[1].textContent = dict['g'];
  new_cell.children[2].textContent = dict['d'];
  return new_cell
}


//{n: number; d: date; g: guests}
function AddCell(dict, add_id){
  var c = SetCell(dict);
  var table = document.getElementById("msg_table");
  table.appendChild(cell);
}

function ParseJSON(content, add_id){
  if (add_id == 'homeraji') {
    var omake = true;
    var src_dir = '/osen/homeraji/';
    var src_name = 'Home-';
    var src_omake_dir = '/osen/homeraji_omake/';
    var src_omake_name = 'Homeomake-';
  }
  else {
    var omake = false;
    var src_dir = '/osen/otomain/';
    var src_name = 'Otomain-';
  }
  var li = JSON.parse(content);
  var len = li.length;
  for (var i=(len-1); i>=0; i--){
    var cell = SetCell(li[i], omake);
    cell.children[0].children[0].setAttribute("href", lv)
    var table = document.getElementById(add_id);
    if (omake && (parseInt(li[i]['n']) >= osen_omake_start)){
      cell.children[3].children[0].textContent = 'True';
      cell.children[3].children[0].setAttribute("href", src_omake_dir + src_omake_name + li[i]['n'] + '.mp3');
    }
    cell.children[0].children[0].setAttribute("href", src_dir + src_name + li[i]['n'] + '.mp3');
    table.appendChild(cell);
  }
}

function GetAjax(filename, callback, add_id) {
  if (IsExtend[add_id]){return 0;}
  var ajax_msg = new XMLHttpRequest();
  ajax_msg.onreadystatechange=function(){
    if (ajax_msg.readyState==4 && ajax_msg.status==200){
      callback(ajax_msg.responseText, add_id);
      IsExtend[add_id] = 1;
    }
  }
  ajax_msg.open("get", filename, true);
  ajax_msg.timeout = 20000;
  ajax_msg.send();
}
