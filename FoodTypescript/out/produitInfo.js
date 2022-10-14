class ProduitInfo {
    constructor(imageProduit, nomP, marqueP, ingredientP, paysP, emballageP) {
        this.imageProduit = imageProduit;
        this.nomP = nomP;
        this.marqueP = marqueP;
        this.ingredientP = ingredientP;
        this.paysP = paysP;
        this.emballageP = emballageP;
    }
}
export function getProduitInfo(data) {
    const produit = new ProduitInfo(data.product.image_front_small_url, data.product.product_name, data.product.brands, data.product.ingredients_text, data.product.countries, data.product.packaging_old);
    const image = document.querySelector("img");
    const Nom = document.getElementById("nom");
    const Marque = document.getElementById("marque");
    const Ingredient = document.getElementById("ingredient");
    const Pays = document.getElementById("pays");
    const Emballage = document.getElementById("emballage");
    image.setAttribute("src", produit.imageProduit);
    Nom.innerHTML = produit.nomP;
    Marque.innerHTML = produit.marqueP;
    Ingredient.innerHTML = produit.ingredientP;
    Pays.innerHTML = produit.paysP;
    Emballage.innerHTML = produit.emballageP;
}
//# sourceMappingURL=produitInfo.js.map