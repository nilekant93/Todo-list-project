document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById("sendButton");
    const titleInput = document.querySelector(".setTitle");
    const dueInput = document.querySelector("input[name='due']");
    const descriptionInput = document.querySelector(".setDesc");

    const outputContainer = document.getElementById("tavaralaatikko");
    const outputTitle = document.getElementById("outputTitle");
    const outputDue = document.getElementById("outputDate");
    const outputDescription = document.getElementById("outputdesc");

    const addButton = document.getElementById("addButton");

    sendButton.addEventListener("click", function () {

        const title = titleInput.value;
        const due = dueInput.value;
        const description = descriptionInput.value;

        if (title.trim() === "") {
            alert("Title field cannot be empty!");
            return; 
        }

        outputTitle.textContent = title;
        outputDue.textContent =  due;
        outputDescription.textContent = description;

        titleInput.value = "";
        dueInput.value = "";
        descriptionInput.value = "";

    

    });

    var state = false;
    addButton.addEventListener("click", function(){
        if (state) {
            state = false;

            addButton.innerHTML = "+";
            document.getElementById("sl1").style.display = "none";
        }else{
            state = true;

            addButton.innerHTML = "-";
        document.getElementById("sl1").style.display = "block";
        }
    })
});