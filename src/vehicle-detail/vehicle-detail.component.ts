import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const vehicleId = this.route.snapshot.paramMap.get('id');

    // Na razie statyczne dane, później zastąpimy API
    this.vehicle = {
      id: vehicleId,
      brand: 'Volkswagen',
      model: 'Golf',
      price: 22995,
      year: 2018,
      mileage: 21417,
      engine: '1.2L Petrol',
      transmission: 'Automatic',
      color: 'Black',
      bodyType: 'Hatchback',
      doors: 5,
      nctExpiry: 'Jan 2025',
      totalOwners: 1,
      images: [
        'https://via.placeholder.com/600x400', // Główne zdjęcie
        'https://via.placeholder.com/100x100', // Miniaturki
        'https://via.placeholder.com/100x100',
        'https://via.placeholder.com/100x100'
      ],
      description: 'Volkswagen Golf Very Low Mileage High Spec Petrol Auto. Exceptionally low spec in as new condition...',
      greenlightVerified: false
    };
  }
}
