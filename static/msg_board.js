function post_msgb(){
  //check input
  console.log("post_msg(): pass");
}

function post_api(api_name, data, method="post"){
  ;
}

function get_msgb(){
  console.log("post_msg(): pass");
}

function createMSGCell(){
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.className = "msg_cell";
  var p_mu = document.createElement("p");
  p_mu.className = "msg_username";
  var hr = document.createElement("hr");
  var p_mt = document.createElement("p");
  p_mt.className = "msg_text";
  var p_mf = document.createElement("p");
  p_mf.className = "msg_footer";
  td.appendChild(p_mu);
  td.appendChild(hr);
  td.appendChild(p_mt);
  td.appendChild(p_mf);
  tr.appendChild(td);
  return tr;
}

function setMSGCell(mu, mt, mf){
  var cell = createMSGCell();
  var p_mu = cell.children[0].children[0];
  var p_mt = cell.children[0].children[2];
  var p_mf = cell.children[0].children[3];
  p_mu.textContent = mu;
  p_mt.textContent = mt;
  p_mf.textContent = mf;
  return cell;
}

function appendMSG(user, text, date){
  var cell = setMSGCell(user, text, date);
  var table = document.getElementById("msg_table");
  table.appendChild(cell);
}

/////////////////////////////////////////////
window.onload = function () {
  appendMSG("t1", "13244", "2017-1-1");
  appendMSG("t2", "23244", "2017-1-2");
  appendMSG("t3", "33244", "2017-1-3");
  appendMSG("t4", "43244", "2017-1-4");
};
