import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {
  img!: string;
  valor!: string;
  proximo!: string;
  pontos: number = parseInt(localStorage.getItem('pontos') || '0', 10);
  selectedItems: number[] = [];
  timer = JSON.parse(localStorage.getItem('timer') || '{"minutes":10,"seconds":0}');
  data: any = null;
  overlayType: 'sucesso' | 'falha' | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.img = this.route.snapshot.data['img'];
    this.valor = this.route.snapshot.data['valor'];
    this.proximo = this.route.snapshot.data['proximo'];

    this.carregarValores();
    this.startTimer();
  }

  carregarValores(): void {
    const url = `https://valores-back.onrender.com/valores/get-value?nome=${this.valor}`;
    this.http.get<any>(url).subscribe({
      next: (response) => {
        this.data = { ...response, perguntas: this.shuffleArray(response.perguntas) };
      },
      error: (err) => {
        console.error('Erro ao buscar os dados:', err);
        alert('Erro ao carregar os valores. Tente novamente.');
      }
    });
  }

  shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
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
    const corretas = this.selectedItems.filter(index => this.data.perguntas[index].situacao).length;

    let pontosGanhos = corretas === 3 ? 10 : corretas * 3;
    this.pontos += pontosGanhos;
    localStorage.setItem('pontos', this.pontos.toString());

    this.overlayType = corretas === 3 ? 'sucesso' : 'falha';

    setTimeout(() => {
      this.overlayType = null;
      this.router.navigate([`/${this.proximo}`]);
    }, 3750);
  }
}
