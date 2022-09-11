document.querySelector('form').addEventListener('submit', todoApp);

let taskArr = []
function todoApp() {
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priorName = document.querySelector("#priority").value;
    // console.log(taskName, priorName); // get value of input

    let arrobj = {
        task: taskName,
        prior: priorName,
    }

    taskArr.push(arrobj);
    displayTable(taskArr);
}

const displayTable = (arr) => {
    document.querySelector("tbody").innerHTML = ""
    arr.forEach((cur) => {
        let row = document.createElement("tr")

        let col1 = document.createElement("td");
        col1.innerText = cur.task;


        let col2 = document.createElement("td");
        col2.innerText = cur.prior;
        if (cur.prior == "High") {
            col2.style.background = "green";
        } else {
            col2.style.background = "red";
        }


        let col3 = document.createElement("td");
        col3.innerText = "Delet"
        col3.style.color = "red"
        col3.addEventListener('click', function () {
            event.target.parentNode.remove();
            // parentNoderemove()
        })

        row.append(col1, col2, col3);
        // document.querySelector('tbody').append(row);
        document.querySelector("tbody").append(row)
    })
}