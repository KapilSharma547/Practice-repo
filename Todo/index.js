
document.querySelector('form').addEventListener("submit", todoApp)
let taskArr
if (localStorage.getItem("todoList") == null) {
    taskArr = [];
} else {

    taskArr = JSON.parse(localStorage.getItem("todoList"))
}
displayTable(taskArr);




function todoApp(event) {
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;

    let taskObj = {
        task: taskName,
        prior: priority,
    };

    taskArr.push(taskObj);
    // console.log(taskArr);
    console.log("Kal")
    localStorage.setItem("todoList", JSON.stringify(taskArr))

    displayTable(taskArr);
}
// APend data tp tbody
function displayTable(taskArr) {
    document.querySelector("tbody").innerHTML = ""
    // for (let i = 0; i < taskArr.length; i++)
    taskArr.forEach(function (elem, index) {
        let row = document.createElement("tr")

        let col1 = document.createElement("td")
        col1.innerText = elem.task;
        // 
        let col2 = document.createElement("td")
        col2.innerText = elem.prior;
        if (elem.prior == "High") {
            col2.style.backgroundColor = "red";
        } else {
            col2.style.backgroundColor = "green";

        }
        // 
        let col3 = document.createElement("td")
        col3.innerText = "Delete"
        col3.addEventListener("click", function () {
            // console.log(event.target.parentNode); //We find complerte row here
            // event.target.parentNode.remove(); //=>We removw from localStroge

            deleteRow(elem, index);

        })
        col3.style.color = "red";

        // 
        row.append(col1, col2, col3)

        document.querySelector("tbody").append(row)
    })
}


function deleteRow(elem, index) {
    taskArr.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(taskArr));
    displayTable(taskArr);
}

//slice() //=> remove array elemnet


// let arr = [1, 2, 3, 6, 7, 7, 9];
// // n paramiter - spilce(startingIndex, totalItemTOBe ROMOVed)
// arr.splice(0, 4);
// console.log(arr)





