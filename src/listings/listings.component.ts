import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarService } from '../../core/services/car.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  searchForm: FormGroup;
  cars: any[] = [];
  brands: string[] = [];
  models: { [key: string]: string[] } = {};
  selectedModels: string[] = [];
  fuelTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  bodyTypes: string[] = ['SUV', 'Estate', 'Hatchback', 'Saloon', 'Coupe', 'MPV', 'Convertible', 'Pick Up', 'Other'];
  transmissionTypes: string[] = ['Manual', 'Automatic'];
  locations: string[] = ['All Ireland', 'Dublin', 'Cork', 'Galway', 'Limerick'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {
    this.searchForm = this.fb.group({
      brand: [''],
      model: [''],
      minYear: [null],
      maxYear: [null],
      minPrice: [null],
      maxPrice: [null],
      minMileage: [null],
      maxMileage: [null],
      location: [''],
      fuelType: [''],
      transmission: [''],
      bodyType: ['']
    });
  }

  ngOnInit() {
    this.brands = this.carService.getBrands();
    this.models = this.carService.getModelsByBrand();

    this.route.queryParams.subscribe(params => {
      this.searchForm.patchValue(params);
      this.loadListings();
    });
  }

  onBrandSelect() {
    const brand = this.searchForm.get('brand')?.value;
    this.selectedModels = brand ? this.models[brand] || [] : [];
  }

  applyFilters() {
    this.router.navigate(['/cars'], { queryParams: this.searchForm.value });
  }

  loadListings() {
    this.cars = this.carService.getCars(this.searchForm.value);
  }
}
