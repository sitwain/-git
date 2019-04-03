var id = 0;
function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
    var li = document.createElement('li');
    li.id = id;
    li.innerText = item;
    li.addEventListener('click',removeItem);
    ul.appendChild(li);
    id++;
    //将item插入list中，点击触发删除
}
document.body.onkeyup = function(e){
	console.log(e)
      if(e.keyCode == 13){
        newItem();
      }
  }
function removeItem(e) {
    console.log(e);
    var ul = document.getElementById("list");
    ul.removeChild(e.path[0]);
    //点击后删除item
}


function addTodolist(e) {

    var todolist=document.createElement("input");
    var donelist=document.createElement("input");
    document.appendChild(todolist,donelist);

    var obj_list = {
        todo: "",   
        done: false     
    };
    document.getElementById("add_list").value = document.getElementById("add_list").value.trim();
    if (document.getElementById("add_list").value.length === 0){
        alert("事件为空");
        return;
    }
}
function load(){
    var todo=document.getElementById("todolist"),
        done=document.getElementById("donelist"),
        todostring="",
        donestring="";
        document.getElementById("add_list").foucus();
        todolis=loaddate();
        if(todolist=null){
            for(var i=0;i<todolist.length;i++){
                if(todolist[i].done){
                    todostring+="<li>"
                }
            }
todo.innerhtml=todostring;
done.innerhtml=donestring;       
        }
        else{
            todo.innerhtml="";
            done.innerhtml="";
        }

}
