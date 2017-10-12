function set_bk(img_id, color="cls", setcolor=false){
  var bk = "rgba(0,0,0,0)";
  if (color == "bk")
    {bk="#000000";}
  else if (color=="wt")
    {bk="#ffffff";}
  console.log(setcolor)
  if (setcolor)
    {bk=setcolor;}
  document.getElementById(img_id).style.background=bk;
}
