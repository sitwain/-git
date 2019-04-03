
function addTodolist(e) {
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
