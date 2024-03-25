var list = [];
var input;

$(".addNew").click(function() {
    input=$(".newToDo").val();
    list.push(input);
    $(".toDoList").append("<li>" + input + "</li>");
    $(".numTasks").text(list.length);



});