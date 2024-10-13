// src/app/components/main/main.component.ts
import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  selectedProduct: Product | null = null;
  isEditModalOpen = false;
  pageSizes = [10, 20, 50, 100]; // Available page size options
  pageSize = 20; // Default page size
  currentPage = 1; // Default current page
  totalPages = 10; // Total number of pages (You can update this dynamically)


  openEditModal(product: Product): void {
    this.selectedProduct = { ...product };
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.selectedProduct = null;
    this.isEditModalOpen = false;
  }

  
}
