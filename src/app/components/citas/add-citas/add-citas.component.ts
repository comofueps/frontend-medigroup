import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-citas',
  standalone: true,
  imports: [],
  templateUrl: './add-citas.component.html',
  styleUrl: './add-citas.component.css',
})
export class AddCitasComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const usuarioId = this.route.snapshot.params['id'];
    console.log('id' + usuarioId);
  }

  onSubmit(): void {
    this.router.navigateByUrl('/citas');
  }
  cancel() {
    this.router.navigateByUrl('/usuarios');
  }
}
