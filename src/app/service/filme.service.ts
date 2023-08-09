import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private filmes: Filme[] = [];
  constructor() {}

  public getFilmes(): Filme[] {
    return this.filmes;
  }
  public addFilmes(nome: string, date: string) {
    date = date.replace('-', '/');
    let filme: Filme = { nome: nome, data: new Date(date), status: false };
    this.filmes.push(filme);
    console.log(this.filmes);
  }
}

interface Filme {
  nome: string;
  data: Date;
  status?: boolean;
}
