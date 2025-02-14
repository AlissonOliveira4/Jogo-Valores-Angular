import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('nomeInput') nomeInput!: ElementRef;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    console.log("Reiniciou!");
    localStorage.removeItem("timer");
    localStorage.setItem("timer", JSON.stringify({ minutes: 10, seconds: 0 }));
    localStorage.setItem("pontos", "0");
    console.log("Timer setado:", localStorage.getItem("timer"));
  }

  goToInicio(): void {
    this.router.navigate(['/']);
  }

  saveUser(event: Event): void {
    event.preventDefault();
    const nome = this.nomeInput.nativeElement.value;


    if (!nome.trim()) {
      alert("Por favor, digite um nome!");
      return;
    }

    localStorage.setItem("nome", nome);

    const body = { nome, pontos: 0 };
    this.apiService.createUser(body).subscribe({
      next: () => {
        console.log("Usuário salvo com sucesso!");
        this.router.navigate(['/determinacao']);
      },
      error: (err) => {
        console.error("Erro ao salvar usuário:", err);
        this.router.navigate(['/determinacao']);
      }
    });
  }
}
