function dog_age(age) {

    userName = document.getElementById("userName").value;
    age = document.getElementById("age").value;

    if (age >= 15) {
        document.getElementById("dogAge").innerHTML = `${userName} is ${age * 7} years old`;
        document.getElementById("aboutDog").innerHTML = `Your dog is old`;
    }
    else if (age >= 7) {
        document.getElementById("dogAge").innerHTML = `${userName} is ${age * 7} years old`;
        document.getElementById("aboutDog").innerHTML = `Your dog is middle age`;
    }
    else if (age >= 2) {
        document.getElementById("dogAge").innerHTML = `${userName} is ${age * 7} years old`;
        document.getElementById("aboutDog").innerHTML = `Your dog is little`;

    }
    else {
        document.getElementById("dogAge").innerHTML = `${userName} is ${age * 7} years old`;
        document.getElementById("aboutDog").innerHTML = `Your dog is puppy`;
    }

    return age * 7
}
function cat_age(ages) {

    catName = document.getElementById("catName").value;
    ages = document.getElementById("ages").value;

    if (ages >= 15) {
        document.getElementById("catAge").innerHTML = `${catName} is ${ages * 6} years old`;
        document.getElementById("aboutCat").innerHTML = `Your cat is old`;
    }
    else if (ages >= 6) {
        document.getElementById("catAge").innerHTML = `${catName} is ${ages * 6} years old`;
        document.getElementById("aboutCat").innerHTML = `Your cat is middle age`;
    }
    else if (ages >= 2) {
        document.getElementById("catAge").innerHTML = `${catName} is ${ages * 6} years old`;
        document.getElementById("aboutCat").innerHTML = `Your cat is little`;
    }
    else {
        document.getElementById("catAge").innerHTML = `${catName} is ${ages * 6} years old`;
        document.getElementById("aboutCat").innerHTML = `Your cat is puppy`;
    }
    return ages * 6
}






































