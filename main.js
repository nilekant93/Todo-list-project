document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById("sendButton");
    const titleInput = document.querySelector(".setTitle");
    const dueInput = document.querySelector("input[name='due']");
    const descriptionInput = document.querySelector(".setDesc");

    let tavaralaatikkoLukumaara = 0;

    const outputContainer = document.getElementById("tavaralaatikko");
    const outputTitle = document.getElementById("outputTitle");
    const outputDue = document.getElementById("outputDate");
    const outputDescription = document.getElementById("outputdesc");
    const outputContainerWrapper = document.getElementById("outputContainerWrapper");

    const addButton = document.getElementById("addButton");

    sendButton.addEventListener("click", function () {

        const title = titleInput.value;
        const due = dueInput.value;
        const description = descriptionInput.value;

        if (title.trim() === "") {
            alert("Title field cannot be empty!");
            return; 
        }
        
        const newTavaralaatikko = document.createElement("div");
        newTavaralaatikko.className = "tavaralaatikko1";

        tavaralaatikkoLukumaara++;

        newTavaralaatikko.innerHTML = `
        <h1 class="otsikko">${tavaralaatikkoLukumaara}</h1>
        <p>${title}</p>
        <p>${due}</p>
        <p>${description}</p>
        <button class="deleteButton">Delete</button>
        `;

        outputContainerWrapper.appendChild(newTavaralaatikko);

        const deleteButton = newTavaralaatikko.querySelector(".deleteButton");
        deleteButton.addEventListener("click", function () {
            outputContainerWrapper.removeChild(newTavaralaatikko);
            paivitaJarjestysnumerot();
            
        });
       
        titleInput.value = "";
        dueInput.value = "";
        descriptionInput.value = "";
       

    

    });

    function paivitaJarjestysnumerot() {
        const tavaralaatikot = outputContainerWrapper.querySelectorAll(".tavaralaatikko1");
        tavaralaatikot.forEach(function (tavaralaatikko, index) {
            const otsikko = tavaralaatikko.querySelector(".otsikko");
            otsikko.textContent = `${index + 1}`;
    });

    tavaralaatikkoLukumaara = tavaralaatikot.length;
    }

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