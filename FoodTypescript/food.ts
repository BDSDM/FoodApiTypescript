import { ProduitData } from "./produitData.js";
import { getProduitInfo } from "./produitInfo.js";

const form = <HTMLElement>document.querySelector("#container>form");
const codebarre = <HTMLInputElement>document.getElementById("codebarre");

form.addEventListener("submit", afficher);

function afficher(e: SubmitEvent) {
  e.preventDefault();

  console.log("opération réussi");
  console.log(codebarre.value);

  const url =
    "https://world.openfoodfacts.org/api/v0/product/" +
    codebarre.value +
    ".json";
  fetch(url)
    .then((response: Response) => response.json())
    .then((data: ProduitData) => {
      if (data.status === 1) {
        getProduitInfo(data);
      } else {
        console.log("Opération ratée");

        // alert("Le code barre rentré n'est pas référencé");
      }
    });
}
