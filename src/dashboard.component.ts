import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../../core/services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  searchForm: FormGroup;
  brands: string[] = [];
  models: string[] = [];
  selectedCategory: string = 'spalinowe';
  fuelTypes: string[] = ['Benzyna', 'Diesel', 'Hybryda', 'Elektryczny', 'LPG', 'CNG'];
  bodyTypes: string[] = ['SUV', 'Sedan', 'Kombi', 'Hatchback', 'Inne'];
  locations: string[] = ['Dublin', 'Cork', 'Galway', 'Limerick', 'Inne'];
  transmissionTypes: string[] = ['Manualna', 'Automatyczna'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private carService: CarService
  ) {
    this.searchForm = this.fb.group({
      brand: [''],
      model: [''],
      minPrice: [null],
      maxPrice: [null],
      minYear: [null],
      maxYear: [null],
      fuelType: [''],
      bodyType: [''],
      location: [''],
      transmission: [''],
      mileage: [null]
    });
  }

  ngOnInit() {
    this.loadBrands();
  }

  loadBrands() {
    this.carService.getBrands().subscribe(brands => {
      this.brands = brands;
    });
  }

  onBrandSelect() {
    const brand = this.searchForm.get('brand')?.value;
    if (brand) {
      this.carService.getModels(brand).subscribe(models => {
        this.models = models;
      });
    } else {
      this.models = [];
    }
  }

  searchCars() {
    if (this.searchForm.valid) {
      this.router.navigate(['/cars'], {
        queryParams: { ...this.searchForm.value, category: this.selectedCategory }
      });
    }
  }

  navigateToCategory(category: string) {
    this.selectedCategory = category;
  }
}