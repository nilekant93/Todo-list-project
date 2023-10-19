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
    const deleteButton = document.getElementById('deleteButton');
    const movableTavaralaatikko = document.getElementById("movableTavaralaatikko");

    let sumennusAktiivinen = false;
    let poistamistila = false;
    let hoverTila = false;

    function toggleTavaralaatikkoScaling(enable) {
        const tavaralaatikot = document.querySelectorAll('.tavaralaatikko1');
        tavaralaatikot.forEach((tavaralaatikko) => {
            if (enable) {
                tavaralaatikko.addEventListener('mouseenter', scaleTavaralaatikko);
                tavaralaatikko.addEventListener('mouseleave', resetTavaralaatikko);
                tavaralaatikko.style.transform = 'scale(0.7)';
            } else {
                tavaralaatikko.removeEventListener('mouseenter', scaleTavaralaatikko);
                tavaralaatikko.removeEventListener('mouseleave', resetTavaralaatikko);
                tavaralaatikko.style.transform = 'scale(1)';
            }
        });
    }

    

    deleteButton.addEventListener('click', () => {
        // Vaihda poistamistilan tila päälle tai pois päältä
        poistamistila = !poistamistila;
    
        if (poistamistila) {
            // Poistamistila on aktivoitu, suurenna deleteButtonia
            deleteButton.style.transform = 'scale(1.5)'; // Voit säätää suurennuskerrointa tarpeen mukaan
        } else {
            // Poistamistila ei ole aktivoitu, palauta deleteButton alkuperäiseen kokoon
            deleteButton.style.transform = 'scale(1)';
        }
        
        // Päivitä nappi visuaalisesti riippuen poistamistilan tilasta
        if (poistamistila) {
            // Poistamistila on aktivoitu, tee tarvittavat visuaaliset muutokset nappiin
            deleteButton.classList.add('poistamistila');
        } else {
            // Poistamistila ei ole aktivoitu, poista visuaaliset muutokset nappiin
            deleteButton.classList.remove('poistamistila');
        }

        if (poistamistila) {
            // Poistamistila on päällä, suorita tarvittava toiminto
            console.log('Poistamistila on päällä');
        } else {
            // Poistamistila ei ole päällä, suorita tarvittava toiminto
            console.log('Poistamistila ei ole päällä');
        }

        if (poistamistila) {
            // Enable the scaling feature
            toggleTavaralaatikkoScaling(true);
        } else {
            // Disable the scaling feature
            toggleTavaralaatikkoScaling(false);
        }

        if (poistamistila) {
            addButton.style.display = 'none';
        }
        else {
            addButton.style.display = 'block';
        }
        


    });


    // Function to scale up a tavaralaatikko1
function scaleTavaralaatikko(event) {
    event.target.style.transform = 'scale(1)';
    event.target.style.cursor = 'pointer';
}

// Function to reset the scale of a tavaralaatikko1
function resetTavaralaatikko(event) {
    event.target.style.transform = 'scale(0.7)';
    event.target.style.cursor = 'default';
}


  
    
   
    sendButton.addEventListener("click", function () {

        
        const title = titleInput.value;
        const due = dueInput.value;
        const description = descriptionInput.value;

        if (title.trim() === "") {
            alert("Title field cannot be empty!");
            return; 
        }
        
        const newTavaralaatikko = document.createElement("div");
        newTavaralaatikko.className = "tavaralaatikko1 fade-in";
        

        tavaralaatikkoLukumaara++;

        newTavaralaatikko.innerHTML = `
        <h1 class="otsikko">${tavaralaatikkoLukumaara}</h1>
        <p id="otsikkoTavaralaatikko">${title}</p>
        <p id="paivamaaraTavaralaatikko">${due}</p>
        <p id="kuvausTavaralaatikko">${description}</p>`;

        outputContainerWrapper.appendChild(newTavaralaatikko);

       
       
       
        titleInput.value = "";
        dueInput.value = "";
        descriptionInput.value = "";
       

    

    });

   
    outputContainerWrapper.addEventListener('click', (event) => {
        // Tarkista, onko poistamistila aktivoitu
        if (poistamistila) {
            // Tarkista, onko klikattu elementti tavaralaatikko
            if (event.target.classList.contains('tavaralaatikko1')) {
                event.target.classList.add('fade-out');
                // Poista tavaralaatikko
                
                event.target.remove();
                paivitaJarjestysnumerot();

               
            }
        }
    });
   
    outputContainerWrapper.addEventListener('mouseenter', (event) => {
        // Tarkista, onko poistamistila aktivoitu ja hiiri tavaralaatikon päällä
        if (poistamistila && event.target.classList.contains('tavaralaatikko1')) {
            // Muuta kursorin tyyppiä "pointer" -kursoriksi
            event.target.style.cursor = 'pointer';
            console.log('kursori pitäis nyt muuttua');
        }
    });
    
    outputContainerWrapper.addEventListener('mouseleave', (event) => {
        // Tarkista, onko poistamistila aktivoitu ja hiiri poistuu tavaralaatikon päältä
        if (poistamistila && event.target.classList.contains('tavaralaatikko1')) {
            // Palauta kursorin tyyppi takaisin normaaliksi
            event.target.style.cursor = 'default';
            console.log('kursori pitäis nyt palautua');
        }
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
    addButton.addEventListener("click", function() {
        if (state) {
          state = false;
          addButton.innerHTML = "+";
      
          const sl1 = document.getElementById("sl1");
          sl1.style.display = "none";
          sl1.classList.remove("fade-in-sl1"); // Remove the fade-in class
        } else {
          state = true;
          addButton.innerHTML = "-";
      
          const sl1 = document.getElementById("sl1");
          sl1.style.display = "block";
          sl1.classList.add("fade-in-sl1"); // Add the fade-in class
        }
      });

    addButton.addEventListener('mouseenter', () => {
        hoverTila = true;
        if (!poistamistila) {
            addButton.style.transform = 'scale(1.2)';
        }
    });
    
    addButton.addEventListener('mouseleave', () => {
        hoverTila = false;
        if (!poistamistila) {
            addButton.style.transform = 'scale(1)';
        }
    });

    
    deleteButton.addEventListener('mouseenter', () => {
        // Apply hover effect when the mouse enters the delete button
        if (!poistamistila) {
            deleteButton.style.transform = 'scale(1.2)';
        }
    });
    
    deleteButton.addEventListener('mouseleave', () => {
        // Reset the style when the mouse leaves the delete button
        if (!poistamistila) {
            deleteButton.style.transform = 'scale(1)';
        }
    });
  
    addButton.addEventListener('click', () => {
        addButton.style.transform = 'scale(1.5)';
    });

    


   


});