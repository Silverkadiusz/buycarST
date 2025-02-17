import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars = [
    { id: 1, brand: 'Volkswagen', model: 'Golf', year: 2018, price: 15995, mileage: 50000, location: 'Dublin', fuelType: 'Petrol', transmission: 'Manual', image: 'https://via.placeholder.com/300x200' },
    { id: 2, brand: 'Volkswagen', model: 'Golf', year: 2019, price: 17995, mileage: 40000, location: 'Cork', fuelType: 'Diesel', transmission: 'Automatic', image: 'https://via.placeholder.com/300x200' }
  ];

  private brands = ['Volkswagen', 'Toyota', 'BMW', 'Audi', 'Mercedes'];

  private models = {
    'Volkswagen': ['Golf', 'Passat', 'Tiguan', 'Polo'],
    'Toyota': ['Corolla', 'Camry', 'Yaris', 'RAV4'],
    'BMW': ['X5', 'X3', 'Series 3', 'Series 5'],
    'Audi': ['A3', 'A4', 'A6', 'Q5'],
    'Mercedes': ['C-Class', 'E-Class', 'S-Class', 'GLC']
  };

  constructor() {}

  getBrands(): string[] {
    return this.brands;
  }

  getModelsByBrand(): { [key: string]: string[] } {
    return this.models;
  }

  getCars(filters: any): any[] {
    return this.cars.filter(car => {
      return (!filters.brand || car.brand === filters.brand) &&
             (!filters.model || car.model === filters.model) &&
             (!filters.minYear || car.year >= filters.minYear) &&
             (!filters.maxYear || car.year <= filters.maxYear) &&
             (!filters.minPrice || car.price >= filters.minPrice) &&
             (!filters.maxPrice || car.price <= filters.maxPrice) &&
             (!filters.fuelType || car.fuelType === filters.fuelType) &&
             (!filters.transmission || car.transmission === filters.transmission);
    });
  }
}
