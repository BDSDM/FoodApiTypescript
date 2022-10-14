class ProduitInfo {
  imageProduit: string;
  nomP: string;
  marqueP: string;
  ingredientP: string;
  paysP: string;
  emballageP: string;

  constructor(
    imageProduit: string,
    nomP: string,
    marqueP: string,
    ingredientP: string,
    paysP: string,
    emballageP: string
  ) {
    this.imageProduit = imageProduit;
    this.nomP = nomP;
    this.marqueP = marqueP;
    this.ingredientP = ingredientP;
    this.paysP = paysP;
    this.emballageP = emballageP;
  }
}

export function getProduitInfo(data: any) {
  const produit = new ProduitInfo(
    data.product.image_front_small_url,
    data.product.product_name,
    data.product.brands,
    data.product.ingredients_text,
    data.product.countries,
    data.product.packaging_old
  );
  const image = <HTMLElement>document.querySelector("img");
  const Nom = <HTMLOutputElement>document.getElementById("nom");
  const Marque = <HTMLOutputElement>document.getElementById("marque");
  const Ingredient = <HTMLOutputElement>document.getElementById("ingredient");
  const Pays = <HTMLOutputElement>document.getElementById("pays");
  const Emballage = <HTMLOutputElement>document.getElementById("emballage");

  image.setAttribute("src", produit.imageProduit);
  Nom.innerHTML = produit.nomP;
  Marque.innerHTML = produit.marqueP;
  Ingredient.innerHTML = produit.ingredientP;
  Pays.innerHTML = produit.paysP;
  Emballage.innerHTML = produit.emballageP;
}
