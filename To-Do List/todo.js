window.addEventListener("load", function() { //allows page to load and then we can query
    let addButton = document.querySelector("#add-button"); //look up button using querySelector, only finds first one on page. QuerySelectorAll selects all as an array.
    console.log(addButton);

    addButton.addEventListener("click", function(){
        let newItem = document.createElement("li");
        newItem.style.backgroundColor = "lime";

        let itemNameElement = document.querySelector("#item-name");
        newItem.textContent = itemNameElement.value;

        itemNameElement.value = "";

        let listContainer = document.querySelector("ul");
        listContainer.appendChild(newItem);
    });

});