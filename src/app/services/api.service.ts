import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://valores-back.onrender.com';

  private http = inject(HttpClient);

  // Método GET (Ranking)
  getLista(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/user/ranking`).pipe(
      map(users => users.map(user => new User(user.id, user.nome, user.pontos, user.tempo)))
    );
  }

  getValores(nome: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/valores/get-value?nome=${nome}`).pipe(
      map(response => ({
        ...response,
        perguntas: response.perguntas ? this.shuffleArray(response.perguntas) : []
      }))
    );
  }

    // Método para embaralhar perguntas (pode ser colocado no componente também)
  private shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  //Método para criar o User
  createUser(body: { nome: string; pontos: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/create-user`, body);
  }

  // **Novo método PUT para atualizar usuário**
  updateUser(nome: string, pontos: number, tempo: string): Observable<any> {
    const url = `${this.apiUrl}/user/update-user?nome=${nome}`;
    const body = { nome, pontos, tempo };
    return this.http.put(url, body);
  }

}
