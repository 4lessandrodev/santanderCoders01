let series = ['Game of Thrones', 'Breaking Bad', 'Lost in space'];
let imprimirSeries = series => {
  for (let serie of series) {
    console.log(serie);
  }
};

let filme = {
  duracao: 80,
  tipo: 'Ficção',
  diretor: 'Steven Spelberg',
  ano: 2020
};

let imprimirFilme = filme => {
  for (let prop in filme) {
    console.log(filme[prop]);
  }
};

imprimirFilme(filme);