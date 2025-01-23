import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ProduitsService} from "../../services/produits.service";
import {PageEvent} from "@angular/material/paginator";
import Swal from "sweetalert2";
import {ModifierproduitComponent} from "../modifierproduit/modifierproduit.component";

class ProductService {
}

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{
  constructor(private productService:ProduitsService,private router:Router,public dialog: MatDialog) {}
  ngOnInit() {

    this.getproducts();

  }
  message:string ='';
  public produits:any = [];
  filteredproduits:any = [];

  getproducts(){

    this.productService.getAllProduits().subscribe(
      {
        next:(response)=>{
          this.message="success"
          this.produits =
            this.filteredproduits = response;
          console.log(response)
          this.paginateReclamations();


        }
      }
    )

  };

  paginatedReclamations: any = [];
  pageSize = 3;
  currentPage = 0;

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.paginateReclamations();
  }

  paginateReclamations() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedReclamations = this.filteredproduits.slice(startIndex, endIndex);
  }
  Ondeletereclamation(id: number | undefined){
    if(id!= null){
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimez-le!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productService.deleteProduit(id).subscribe(
            data => {
              Swal.fire('Supprimé!', 'Votre fichier a été supprimé.', 'success');
              this.filteredproduits = this.produits.filter((reclamation: any) => reclamation.idProduit !== id);
              this.getproducts();

            },
            error => {
              console.error('Erreur lors de la suppression:', error);
            }
          );

        }
      });
    }
    this.paginateReclamations();
  }


  selectetat: string = 'ALL'; // Set default value to '' for "All"
  filterReclamations() {
    if (this.selectetat !== undefined && this.selectetat !== null && this.selectetat !== 'ALL') {
      // Convertir la valeur de selectetat en nombre
      const selectedEtatNumber = Number(this.selectetat);

      this.filteredproduits = this.produits.filter((produit: any) => produit.etat === selectedEtatNumber);
    } else {
      // Si aucune sélection n'est faite, afficher tous les produits
      this.filteredproduits = this.produits;
    }
    this.paginateReclamations();
  }
  searchKeyword: string = '';

  searchReclamations() {
    if (this.searchKeyword) {
      // Filter based on searchKeyword being present in 'libelle' or other properties
      this.filteredproduits = this.produits.filter((produit: any) =>
        produit.libelle.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        produit.marque.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      // If no keyword is entered, show all products
      this.filteredproduits = this.produits;
    }
    this.paginateReclamations(); // Apply pagination to filtered results
  }
  selectedproduit: any;
  openDialog(reclamation: any) {
    this.selectedproduit = reclamation;
    const dialogRef = this.dialog.open(ModifierproduitComponent, {
      width: 'auto', // specify width as per your requirement
      data: {produit: reclamation } // pass data to your dialog component if needed
    });
    dialogRef.componentInstance.update.subscribe((updatedReclamation: any) => {
      // Find the index of the updated reclamation in the array
      const index = this.produits.findIndex((item: any) => item.idProduit === updatedReclamation.idProduit);
      if (index !== -1) {
        // Update the corresponding reclamation in the array
        this.produits[index].libelle = updatedReclamation.libelle;
        this.produits[index].description = updatedReclamation.description;
        this.produits[index].marque= updatedReclamation.marque;

        // Reapply filtering logic if filteredReclamations is derived from reclamations

        this.filteredproduits = this.produits;


      }
    });
    this.paginateReclamations();
  }


}
