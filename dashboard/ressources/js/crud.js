// Rechercher
const rechercheInput = document.querySelector("#recherche-input");
const dataTable = document.querySelector("#data-table");
const tableRows = dataTable.querySelectorAll("tbody tr");
const tableCols = dataTable.querySelectorAll("tbody td");

rechercheInput.onkeyup = (e) => {
    if(rechercheInput.value.length > 0) {
        tableRows.forEach(row => {row.style.display = "none"});
        tableCols.forEach(col => {
            if(col.textContent.toLowerCase().includes(rechercheInput.value.toLowerCase())) {
                col.parentElement.style.display = "table-row";
            }
        })
    }else {
        tableRows.forEach(row => {row.style.display = "table-row"});
    }
}

// Chargement Villes Select 
import data from './data.js'
const villesSelect = document.querySelectorAll("#villes-select");

data.villes.forEach(ville => {
    let option = document.createElement("option");
    option.value = ville.toLowerCase();
    option.innerText = ville.toUpperCase();
    villesSelect[0].appendChild(option);
    villesSelect[1].appendChild(option);
});


// Modals
const ajouterBtn = document.querySelector("#ajouter-btn");
const ajouterModal = document.querySelector("#ajouter-modal");

ajouterBtn.addEventListener("click", () => {
    ajouterModal.classList.add("modal-active");
    document.body.style.position = 'fixed';
});

/* 
**** Crud modals de modif
*/

// modifier gare
const modifierModal = document.querySelector("#modifier-modal");

function modifierGare(id) {
    modifierModal.classList.add("modal-active");
    document.body.style.position = 'fixed';

    tableRows.forEach(row => {
        let rowCols = row.querySelectorAll("td")
        if(rowCols[0].textContent == id) {
            document.querySelector("#gareIdInput").value = id
            document.querySelector("#gareNomInput").value = rowCols[1].textContent

            Array.from(document.querySelectorAll("#villes-select")[1].options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[2].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            document.querySelector("#gareAdresseInput").value = rowCols[3].textContent
            document.querySelector("#gareTelInput").value = rowCols[4].textContent

        }
    })
}
window.modifierGare = modifierGare








function supprimerElement(id) {
    if(confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
        document.querySelector("#elementIdInput").value = id
        document.querySelector("#supprimer-form").submit()
    }else {
        console.log("nope")
    }
}
window.supprimerElement = supprimerElement
