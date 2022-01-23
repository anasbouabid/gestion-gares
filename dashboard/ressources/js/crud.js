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

            Array.from(document.querySelector("#villes-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[2].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            document.querySelector("#gareAdresseInput").value = rowCols[3].textContent
            document.querySelector("#gareTelInput").value = rowCols[4].textContent

        }
    })
}


function modifierEntreprise(id) {
    modifierModal.classList.add("modal-active");
    document.body.style.position = 'fixed';

    tableRows.forEach(row => {
        let rowCols = row.querySelectorAll("td")
        if(rowCols[0].textContent == id) {
            document.querySelector("#entrepriseIdInput").value = id
            document.querySelector("#entrepriseNomInput").value = rowCols[1].textContent
            document.querySelector("#entrepriseAdresseInput").value = rowCols[2].textContent
            document.querySelector("#entrepriseTelInput").value = rowCols[3].textContent
        }
    })
}


function modifierAutocar(id) {
    modifierModal.classList.add("modal-active");
    document.body.style.position = 'fixed';

    tableRows.forEach(row => {
        let rowCols = row.querySelectorAll("td")
        if(rowCols[0].textContent == id) {
            document.querySelector("#autocarIdInput").value = id
            document.querySelector("#autocarChauffeurInput").value = rowCols[1].textContent
            document.querySelector("#autocarMatriculeInput").value = rowCols[2].textContent
            document.querySelector("#autocarTelInput").value = rowCols[3].textContent

            Array.from(document.querySelector("#entreprises-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[4].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            document.querySelector("#autocarNbrPlacesInput").value = rowCols[5].textContent
            

        }
    })
}


function modifierVoyage(id) {
    modifierModal.classList.add("modal-active");
    document.body.style.position = 'fixed';

    tableRows.forEach(row => {
        let rowCols = row.querySelectorAll("td")
        if(rowCols[0].textContent == id) {
            document.querySelector("#voyageIdInput").value = id

            Array.from(document.querySelector("#autocars-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[1].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            Array.from(document.querySelector("#trajets-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[2].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            for(let i=3; i<10; i++) {
                if(rowCols[i].textContent === "X") {
                    document.querySelector(`#jour-${i-2}`).checked = true
                }else {
                    document.querySelector(`#jour-${i-2}`).checked = false
                }
            }            

        }
    })
}



function modifierTarif(id) {
    modifierModal.classList.add("modal-active");
    document.body.style.position = 'fixed';

    tableRows.forEach(row => {
        let rowCols = row.querySelectorAll("td")
        if(rowCols[0].textContent == id) {
            document.querySelector("#tarifIdInput").value = id

            Array.from(document.querySelector("#gares_dep-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[1].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            Array.from(document.querySelector("#gares_arriv-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[2].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            document.querySelector("#tarifInput").value = rowCols[3].textContent
        }
    })
}



function ajouterTrajetArret() {
    let ligne = document.querySelector(".trajetArret");
    let tableBody = document.querySelector("#tableAjouterTrajet tbody");

    tableBody.appendChild(ligne.cloneNode(true))
}
function ajouterTrajetArretModif() {
    let ligne = document.querySelector(".trajetArret");
    let tableBody = document.querySelector("#tableModifierTrajet tbody");

    tableBody.appendChild(ligne.cloneNode(true))
}



function modifierTrajet(id) {
    modifierModal.classList.add("modal-active");
    document.body.style.position = 'fixed';

    tableRows.forEach(row => {
        let rowCols = row.querySelectorAll("td")
        if(rowCols[0].textContent == id) {
            document.querySelector("#trajetIdInput").value = id
            let trajetString = rowCols[1].textContent
            let trajets = trajetString.split("-");


            let ligne = document.querySelector(".trajetArret");
            let tableBody = document.querySelector("#tableModifierTrajet tbody");
            tableBody.innerHTML = ""
            trajets.forEach(trajet => {
                let newLigne = ligne.cloneNode(true)
                let gare = trajet.split("_")[0]
                let temps = trajet.split("_")[1]
                Array.from(newLigne.querySelector(".gares_dep-select").options).forEach(opt => {
                    if(opt.value.toLowerCase() === gare.toLowerCase()) {
                        opt.selected = true
                    }
                })
                newLigne.querySelector(".time").value = temps

                tableBody.appendChild(newLigne)
            })
        }
    })
}


function modifierUtilisateur(id) {
    modifierModal.classList.add("modal-active");
    document.body.style.position = 'fixed';

    tableRows.forEach(row => {
        let rowCols = row.querySelectorAll("td")
        if(rowCols[0].textContent == id) {
            document.querySelector("#userIdInput").value = id

            document.querySelector("#userNomInput").value = rowCols[1].textContent
            document.querySelector("#userPrenomInput").value = rowCols[2].textContent
            document.querySelector("#userEmailInput").value = rowCols[3].textContent

            Array.from(document.querySelector("#sexe-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[4].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })

            Array.from(document.querySelector("#types-select-modif").options).forEach(opt => {
                if(opt.value.toLowerCase() === rowCols[5].textContent.toLowerCase()) {
                    opt.selected = true
                }
            })


            const entreprisesSelect = document.querySelector("#entreprise-select-modif")
            const entreprisesSelectLabel = document.querySelector("#entreprise-select-modif-label")
            if(document.querySelector("#types-select-modif").value === "manager") {
                entreprisesSelect.style.display = "initial"
                entreprisesSelectLabel.style.display = "initial"
                entreprisesSelect.disabled = false

                Array.from(entreprisesSelect.options).forEach(opt => {
                    if(opt.value.toLowerCase() === rowCols[6].textContent.toLowerCase()) {
                        opt.selected = true
                    }
                })
            }else {
                entreprisesSelect.style.display = "none"
                entreprisesSelectLabel.style.display = "none"
                entreprisesSelect.disabled = true
            }
        }
    })
}





function supprimerElement(id) {
    if(confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
        document.querySelector("#elementIdInput").value = id
        document.querySelector("#supprimer-form").submit()
    }else {
        console.log("nope")
    }
}
window.supprimerElement = supprimerElement
