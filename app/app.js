var id = 0;
function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
	var li = document.createElement('li');
    //将item插入list中，点击触发删除
}
function unique(arr){
  var newarr=[];
  for (var i=0;i<arr.length;i++){
    for(var j=0;j<newarr.length;j++){
      if(arr[i]==newarr[j]){
        break;
      }
    }
    if(j==newarr.length){
      newarr.push(arr[i])
    }
    }
    return newarr;
  }
document.body.onkeyup = function(e){
	console.log(e)
      if(e.keyCode == 13){
        newItem();
      }
  }

function removeItem(id) {
    //点击后删除item
}





