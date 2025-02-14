import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit, AfterViewInit {

  pontos: number = 0;
  mensagem: string = '';
  feedbacks = ['perfeito', 'bom', 'médio', 'ruim'];
  mensagens = [
    "Seu resultado foi excelente! Com incríveis 70 pontos",
    "Seu resultado foi bom! Mas precisa estudar um pouco mais sobre os valores",
    "Seu resultado foi mediano! Então estude mais sobre os valores",
    "Seu resultado foi ruim! Você deveria estudar mais sobre os valores"
  ];

  @ViewChild('titulo') tituloElement!: ElementRef;
  @ViewChild('btnFacebook') btnFacebook!: ElementRef;
  @ViewChild('btnWhatsapp') btnWhatsapp!: ElementRef;
  @ViewChild('btnTwitter') btnTwitter!: ElementRef;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.pontos = parseInt(localStorage.getItem("pontos") || '0', 10);
    this.atualizarFeedback();
  }

  ngAfterViewInit(): void {
    this.atualizarLinksCompartilhamento();
  }

  atualizarFeedback(): void {
    let feedbackIndex = 3; // Default feedback (ruim)

    if (this.pontos === 70) feedbackIndex = 0;
    else if (this.pontos >= 50) feedbackIndex = 1;
    else if (this.pontos >= 30) feedbackIndex = 2;

    this.mensagem = this.mensagens[feedbackIndex];
    localStorage.setItem("mensagem", this.mensagem);
  }

  atualizarLinksCompartilhamento(): void {
    console.log("Atualizando links de compartilhamento");

    const titulo = this.tituloElement.nativeElement.innerHTML;
    const urlPagina = "https://valores-front.onrender.com";

    let textoCompartilhamento = this.pontos >= 40
      ? `Acabei de jogar e consegui ${this.pontos} pontos! E você, consegue mais? 💪 #JogoValores \n`
      : `Parece que preciso estudar mais! 😅 Eu fiz ${this.pontos} pontos. Você consegue fazer melhor? 💪 #JogoValores \n`;

    if (this.btnFacebook) {
      this.btnFacebook.nativeElement.href =
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlPagina)}&quote=${encodeURIComponent(textoCompartilhamento)}`;
    }

    if (this.btnWhatsapp) {
      this.btnWhatsapp.nativeElement.href =
        `https://api.whatsapp.com/send?text=${encodeURIComponent(textoCompartilhamento + " " + urlPagina)}`;
    }

    if (this.btnTwitter) {
      this.btnTwitter.nativeElement.href =
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(textoCompartilhamento)}&url=${encodeURIComponent(urlPagina)}`;
    }

    console.log("Links atualizados com sucesso");
  }

  updateUser(event: Event): void {
    event.preventDefault();

    const nome = localStorage.getItem("nome") || '';
    let tempoObj = JSON.parse(localStorage.getItem("timer") || '{}');
    let tempoFormatado = `00:${String(tempoObj.minutes || 0).padStart(2, '0')}:${String(tempoObj.seconds || 0).padStart(2, '0')}`;

    this.apiService.updateUser(nome, this.pontos, tempoFormatado).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Erro ao atualizar usuário:', err);
        this.router.navigate(['/']);
      }
    });
  }
}
