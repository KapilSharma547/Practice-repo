// Write all the Javascript here
let dataArr = [];
// const mass = () => {
//     dataArr.map((cur) => {
//         if (cur.name == "") {
//             alert("Fill all input fields");

//         }
//         else if
//             (cur.category == "") {
//             alert("Fill all input fields")
//         }
//         else if
//             (cur.brand == "") {
//             alert("Fill all input fields")
//         } else if
//             (cur.deliveredBy == "") {
//             alert("Fill all input fields")
//         }
//     })
// }

const fethData = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let brand = document.getElementById("brand").value;
    let price = document.getElementById("price").value;
    let deliveredBy = document.getElementById("deliveredBy").value;
    // let deliveredBy = document.getElementById("deliveredBy").value;
    let obj = {
        name: name,
        category: category,
        brand: brand,
        price: price,
        deliveredBy: deliveredBy
    }
    dataArr.push(obj);
    // console.log(dataArr);

    // function buttonfun() {
    //     dataArr.map((cur) => {
    //         if (cur.name == "" || cur.category == "" || cur.brand == ""
    //             || cur.deliveredBy == "") {

    //         } else {
    //             Showdetails(dataArr);
    //             total()
    //         }
    //     })
    // }

    Showdetails(dataArr);
    total();
    mass();
    // buttonfun();
}

const Showdetails = () => {
    document.querySelector('tbody').innerHTML = "";
    dataArr.map((cur) => {
        let row = document.createElement('tr')

        let colname = document.createElement('td')
        colname.innerText = cur.name;

        //
        let colcategory = document.createElement('td')
        colcategory.innerText = cur.category;
        //
        let colbrand = document.createElement('td')
        colbrand.innerText = cur.brand;
        //
        let colprice = document.createElement('td')
        let x = colprice.innerText = cur.price;
        //
        let coldeliveredBy = document.createElement('td')
        coldeliveredBy.innerText = cur.deliveredBy;
        //
        let colsegment = document.createElement('td')
        colsegment.innerText = segment(x)
        //
        let colDelet = document.createElement('td')
        colDelet.innerText = "Delete";


        

        row.append(colname, colcategory, colbrand, colprice, coldeliveredBy,
            colsegment, colDelet)
        document.querySelector('tbody').append(row)
    })
}




document.querySelector("form").addEventListener('submit', fethData)



const segment = (elem) => {
    if (elem < 1000) {
        return "Expensive";
    } else {
        return "Not Expensive";
    }
}

const total = () => {
    let sum = 0
    dataArr.map((cur) => {
        sum = sum + Number(cur.price);
    })
    document.getElementById("total-price").innerText = "Total Price :- " + sum;
}


