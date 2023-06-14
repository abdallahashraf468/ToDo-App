let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
let deleAll = document.querySelector(".dele-all");
window.onload = function(){
    theInput.focus();
};
theAddButton.onclick = function (){
    if(theInput.value === ''){
        console.log("No Value");
    
    } else {
        let noTasksMsg = document.querySelector(".no-tasks-message");
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {
            noTasksMsg.remove();
        }
       let mainSpan = document.createElement("span");
       let deleteElement = document.createElement("span");
       let text = document.createTextNode(theInput.value);
       let deletText = document.createTextNode("Delete");
       mainSpan.appendChild(text);
       mainSpan.className = 'task-box';
       deleteElement.appendChild(deletText);
       deleteElement.className = 'delete';
       mainSpan.appendChild(deleteElement);
       tasksContainer.appendChild(mainSpan);
       theInput.value = '';
       theInput.focus();
       calculTasks()
    }
};

document.addEventListener('click', function(e){

    if(e.target.className == 'delete'){
        e.target.parentNode.remove();

        if (tasksContainer.childElementCount == 0) {
            creatNoTasks();

        }
    }
    if(e.target.classList.contains ('task-box')){
        e.target.classList.toggle("finished");
    }
    
    calculTasks()

});

    let deleteaAll = document.createElement("span");
    let deleteAllBu = document.createTextNode("Delete All");
    deleteaAll.appendChild(deleteAllBu);
    deleAll.appendChild(deleteaAll);
    deleteaAll.className = 'delete1';

    function creatNoTasks() {
            let msgSpan = document.createElement("span");
            let msgText = document.createTextNode("No Tasks To Show");
            msgSpan.appendChild(msgText);
            msgSpan.className = 'no-tasks-message';
            tasksContainer.appendChild(msgSpan);
 
        }
        
        function calculTasks() {
            tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
            tasksCompleted.innerHTML = document.querySelectorAll('tasks-content .finished').length;

}

      deleAll.onclick = function()
                      {       
        while(true)
        {
            document.querySelector('.task-box').remove();  
                   theInput.focus();
        }
    }
         


  
