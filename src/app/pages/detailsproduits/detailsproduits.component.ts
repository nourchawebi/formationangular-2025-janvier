import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProduitsService} from "../../services/produits.service";



@Component({
  selector: 'app-detailsproduits',
  templateUrl: './detailsproduits.component.html',
  styleUrls: ['./detailsproduits.component.css']
})
export class DetailsproduitsComponent implements OnInit {
  produit: any;
  produitId:any;

  constructor(
    private route: ActivatedRoute,
    private reclamationService:ProduitsService
  ) { }

  ngOnInit(): void {
    this.produitId = this.route.snapshot.paramMap.get('id');
    this.getReclamation();
  }

  getReclamation(): void {
    this.reclamationService.getProduitById(this.produitId)
      .subscribe(
        data => {
          console.log(data);
          if (Array.isArray(data) && data.length > 0) {
            this.produit = data[0]; // Access the first item in the array
            console.log(this.produit, "pp");
          } else {
            console.error('Aucun produit trouvé');

          }
        },
        error => {
          console.error('Erreur lors de la récupération du produit:', error);

        }
      );
  }


}
