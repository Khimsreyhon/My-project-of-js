function deleteFood(event) {
    const buttonName = event.target.className;
    if (buttonName == "delete") {
        const delBtn = event.target.parentElement;
        delBtn.remove();
    }
}
result = ''

function addFood(event) {
    event.preventDefault();

























    let ul = document.querySelector('ul');
    result = '';
    let item1 = document.querySelector("#add-food-textfield");
    let item3 = document.querySelector("#add-price-textfield");
    let item4 = document.querySelector("#datemin");

    let n1 = item1.value;
    let n3 = item3.value;
    let n4 = item4.value;
    result = n1 + "-" + n3 + "$" + "-" + n4
    if (n1 === '' && n2 === '' && n3 === '' && n4 === '') {
        window.confirm("Please write the Name of food")

    } else {
        let foodName = document.createElement("span");
        foodName.className = "name";
        foodName.textContent = result;

        let deleteBtn = document.createElement("span");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "x";

        let li = document.createElement("li");

        li.appendChild(foodName);
        li.appendChild(deleteBtn);
        foodList.appendChild(li);
        ul.appendChild(li);
    }
    item1.value = "";
    item2.value = "";
    item3.value = "";
    item4.value = "";
}
let showImage = () => {
    document.querySelector('.img-group').style.display = "block";
    document.querySelector('.img-group').style.display = "Flex";
};
let hideImage = () => {
    document.querySelector('.img-group').style.display = "none";
};

function searchFood(event) {

    let input = document.querySelector("#search-foods input");
    let filter = input.value.toUpperCase();
    let ul = document.querySelector("#food-list ul");
    let li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

        let span = li[i].getElementsByTagName("span")[0];
        let txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) >= 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}






let foodList = document.querySelector("#food-list ul");
foodList.addEventListener("click", deleteFood);


let addForm = document.querySelector("button");
addForm.addEventListener("click", addFood);

let searchFoodInput = document
    .getElementById("search-foods")
    .querySelector("input");
searchFoodInput.addEventListener("keyup", searchFood);

function show(element, isshow) {
    if (isshow) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

const createBtn = document.querySelector("#Add");
const formBtn = document.querySelector('#add-food');
const addBtn = document.querySelector('#create');
const containerBtn = document.querySelector('.container');

createBtn.addEventListener('click', e => {
    show(formBtn, true);
    show(createBtn, false);
    show(containerBtn, false);
});

addBtn.addEventListener('click', e => {
    e.preventDefault();
    show(formBtn, false);
    show(createBtn, true);
    show(containerBtn, true);
})