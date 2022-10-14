import { getProduitInfo } from "./produitInfo.js";
const form = document.querySelector("#container>form");
const codebarre = document.getElementById("codebarre");
form.addEventListener("submit", afficher);
function afficher(e) {
    e.preventDefault();
    console.log("opération réussi");
    console.log(codebarre.value);
    const url = "https://world.openfoodfacts.org/api/v0/product/" +
        codebarre.value +
        ".json";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        if (data.status === 1) {
            getProduitInfo(data);
        }
        else {
            console.log("Opération ratée");
        }
    });
}
//# sourceMappingURL=food.js.map