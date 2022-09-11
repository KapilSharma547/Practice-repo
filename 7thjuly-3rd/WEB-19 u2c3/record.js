// fill in javascript code here
let dataArr = [];

const fatch = (event) => {
    event.preventDefault();
    let employeeName = document.getElementById('name').value
    let employeeId = document.getElementById("employeeID").value
    let department = document.getElementById("department").value
    let exp = document.getElementById("exp").value
    let email = document.getElementById("email").value
    let number = document.getElementById("mbl").value

    // console.log(exp,email,number)
    let dataobj = {
        name: employeeName,
        id: employeeId,
        depart: department,
        exp: exp,
        mail: email,
        number: number
    }
    // console.log(dataobj);  //=>obj is ready now  
    dataArr.push(dataobj);
    // console.log(dataArr);
    display(dataArr);
}

const display = (dataArr) => {  
    document.querySelector('tbody').innerHTML =
        ""
    dataArr.forEach((cur) => {
        let row = document.createElement('tr');
        let colName = document.createElement('td')
        colName.innerText = cur.name;


        let colEmp = document.createElement('td')
        colEmp.innerText = cur.id;


        let colDepart = document.createElement('td')
        colDepart.innerText = cur.depart;

        // let colRole = document.createElement('td')

        let colExp = document.createElement('td')
        let x=colExp.innerText = cur.exp;


        let colEmail = document.createElement('td')
        colEmail.innerText = cur.mail;

        let colMobile = document.createElement('td')
        colMobile.innerText = cur.number;


        let colRole = document.createElement('td')
       colRole.innerText=exp(x)
       
        // if (cur.exp > 5) {
        //     colRole.innerText = "Senior"
        // } else if (cur.exp >= 2 && cur.exp <= 5) {
        //     colRole.innerText = "Junior"
        // } else if (cur.exp <= 1) {
        //     colRole.innerText = "Fresher"
        // }

        let colDelet = document.createElement('td')
        colDelet.innerText ="Delete";
        colDelet.addEventListener('click', function (event) {
            event.target.parentNode.remove();
            // 
        })




        row.append(colName, colEmp, colDepart, colExp, colEmail
            , colMobile, colRole, colDelet)
        document.querySelector('tbody').append(row)
    })




}

document.querySelector('form').addEventListener('submit', fatch);


// function exp(kapil)
const exp=(kapil)=>
{
    if(kapil>=5){
        return "Senior"
    }
    else if(kapil>2 && kapil<5){
        return "Junior"
    }else if(kapil<2){
        return "Fresher"
    }
}