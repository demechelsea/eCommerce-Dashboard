import { Component } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginator],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  totalItems = 100; // Total number of items
  pageSize = 10; // Default page size

  onPageChange(event: PageEvent) {
    console.log('Page Event:', event);
    // Handle pagination logic (e.g., fetch new data based on pageIndex)
  }
}
