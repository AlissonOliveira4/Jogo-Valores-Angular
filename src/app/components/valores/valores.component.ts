import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valores',
  imports: [CommonModule],
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  // Variáveis vindas da rota
  img!: string;
  valor!: string;
  proximo!: string;

  pontos: number = parseInt(localStorage.getItem('pontos') || '0', 10);
  selectedItems: number[] = [];
  timer = JSON.parse(localStorage.getItem('timer') || '{"minutes":10,"seconds":0}');

  data: any = null;
  overlayType: 'sucesso' | 'falha' | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService  // Injeta o service
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.img = data['img'];
      this.valor = data['valor'];
      this.proximo = data['proximo'];
      this.carregarValores();
    });

    this.startTimer();
  }


  carregarValores(): void {
    this.apiService.getValores(this.valor).subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.error('Erro ao buscar os dados:', err);
        alert('Erro ao carregar os valores. Tente novamente.');
      }
    });

    console.log(this.proximo)
  }

  startTimer(): void {
    const interval = setInterval(() => {
      if (this.timer.minutes === 0 && this.timer.seconds === 0) {
        clearInterval(interval);
        localStorage.removeItem('timer');
        alert('Tempo esgotado!');
        this.router.navigate(['/final']);
      } else {
        if (this.timer.seconds === 0) {
          this.timer.minutes -= 1;
          this.timer.seconds = 59;
        } else {
          this.timer.seconds -= 1;
        }
        localStorage.setItem('timer', JSON.stringify(this.timer));
      }
    }, 1000);
  }

  toggleSelection(index: number): void {
    if (this.selectedItems.includes(index)) {
      this.selectedItems = this.selectedItems.filter(i => i !== index);
    } else {
      if (this.selectedItems.length >= 3) {
        alert('Você só pode selecionar até 3 itens.');
        return;
      }
      this.selectedItems.push(index);
    }
  }

  acertou(event: Event): void {
    event.preventDefault();
    const corretas = this.selectedItems.filter(index => this.data?.perguntas[index]?.situacao).length;

    let pontosGanhos = corretas === 3 ? 10 : corretas * 3;
    this.pontos += pontosGanhos;
    localStorage.setItem('pontos', this.pontos.toString());

    this.overlayType = corretas === 3 ? 'sucesso' : 'falha';

    setTimeout(() => {
      this.overlayType = null;

      console.log('Navegando para:', this.proximo); // Debug para verificar o valor de this.proximo

      this.router.navigate([`/${this.proximo}`]);
    }, 3750);
  }

  //Converter para gerar os Id's das respostas
  getCharFromIndex(index: number): string {
    return String.fromCharCode(97 + index);
  }

  //Deixar os valores sempre com 2 casas decimais
  formatTime(value: number): string {
    return value.toString().padStart(2, '0');
  }

}
