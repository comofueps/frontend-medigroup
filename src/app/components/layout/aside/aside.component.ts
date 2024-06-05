import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Usuarios',
        icon: 'pi pi-user',
        routerLink: '/usuarios',
        // items: [
        //   {
        //     label: 'Documents',
        //     icon: 'pi pi-file',
        //   },
        //   {
        //     label: 'Images',
        //     icon: 'pi pi-image',
        //     items: [
        //       {
        //         label: 'Logos',
        //         icon: 'pi pi-image',
        //       },
        //     ],
        //   },
        // ],
      },
      {
        label: 'Citas',
        icon: 'pi pi-desktop',
        routerLink: '/citas',
        // items: [
        //   {
        //     label: 'Phone',
        //     icon: 'pi pi-mobile',
        //   },
        //   {
        //     label: 'Desktop',
        //     icon: 'pi pi-desktop',
        //   },
        //   {
        //     label: 'Tablet',
        //     icon: 'pi pi-tablet',
        //   },
        // ],
      },
      {
        label: 'Rutinas',
        icon: 'pi pi-list-check',
        routerLink: '/rutinas',

        // items: [
        //   {
        //     label: 'Upload',
        //     icon: 'pi pi-cloud-upload',
        //   },
        //   {
        //     label: 'Download',
        //     icon: 'pi pi-cloud-download',
        //   },
        //   {
        //     label: 'Sync',
        //     icon: 'pi pi-refresh',
        //   },
        // ],
      },
    ];
  }
}
