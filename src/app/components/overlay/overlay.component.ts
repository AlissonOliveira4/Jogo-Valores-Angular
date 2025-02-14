import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [CommonModule], // ❌ Removido ApiService dos imports
  providers: [ApiService], // ✅ Se precisar fornecer o serviço localmente
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  visibleOverlay: string | null = null;
  rankingData: User[] = [];

  private apiService = inject(ApiService); // ✅ Injeção correta do serviço

  ngOnInit(): void {
    this.fetchRankingData();
  }

  fetchRankingData(): void {
    this.apiService.getLista().subscribe({
      next: (data: User[]) => {
        console.log('Ranking carregado com sucesso!', data);
        this.rankingData = data;
      },
      error: (err) => {
        console.error('Erro ao carregar ranking:', err);
        this.rankingData = [];
      }
    });
  }

  openOverlay(type: string): void {
    this.visibleOverlay = type;
    if (type === 'ranking') {
      this.fetchRankingData();
    }
  }

  closeOverlay(): void {
    this.visibleOverlay = null;
  }
}
