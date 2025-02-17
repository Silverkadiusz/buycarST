import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userForm: FormGroup;
  user: any;
  listings: any[] = [];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.loadUserData();
    this.loadUserListings();
  }

  loadUserData() {
    // Na razie statyczne dane, później podmienimy na API
    this.user = {
      name: 'Jan Kowalski',
      email: 'jan.kowalski@example.com',
      phone: '+48 600 123 456'
    };
    this.userForm.patchValue(this.user);
  }

  loadUserListings() {
    this.listings = [
      { id: 1, brand: 'Volkswagen', model: 'Golf', year: 2018, price: 22995, status: 'Aktywne' },
      { id: 2, brand: 'BMW', model: 'X5', year: 2020, price: 49999, status: 'Sprzedane' }
    ];
  }

  saveProfile() {
    console.log('Dane użytkownika zapisane:', this.userForm.value);
  }
}
