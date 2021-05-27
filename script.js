document.querySelector("button").addEventListener("click",function(){
    var text = document.querySelector("#todo").value;
    var list = document.createElement("li");
    document.querySelector("#list").appendChild(list);
    list.innerHTML = "" + text + " ";
    document.getElementById("todo").value = " ";
    var b = document.createElement("button");
    b.innerHTML = "DELETE"
    b.classList.add("trash");
    list.appendChild(b);
    var allTrash = document.querySelectorAll(".trash");
    
    allTrash.forEach(function(allTrash, i){
        allTrash.addEventListener("click",function(event){
            var div = event.target.parentElement;
            div.remove();
        });
    });
    
    var due = document.createElement("p");
    list.appendChild(due);
    due.innerHTML = "Due:";
    
    var dateHolder = document.createElement("input");
    due.appendChild(dateHolder);
    
    
});

