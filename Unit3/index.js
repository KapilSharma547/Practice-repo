
function nikeProductCF(n, p) {
    this.name = n
    this.price = p
}



let arr = [];
function nikeProduct(e) {
    e.preventDefault();
    let form = document.getElementById("product_form")

    let name = form.name.value;
    let price = form.price.value;

    let prod = new nikeProductCF(name, price)

    arr.push(prod);
    console.log("arr:", arr)
}

