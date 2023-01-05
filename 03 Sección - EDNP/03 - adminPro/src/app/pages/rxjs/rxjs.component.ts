import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  constructor() {


    // this.retornarObservable().pipe(retry(1)).subscribe(
    //   (valor) => console.log('Subs: ', valor),
    //   (error) => console.warn('Error: ', error),
    //   () => console.info('Obs terminado')
    // );

    this.retornaIntervalo()
      .pipe(
        take(4), map(valor => valor + 1)
      )
      .subscribe(console.log);

  }

  ngOnInit(): void {}

  retornaIntervalo(): Observable<number>{

    return interval(1000);

  }

  retornarObservable(): Observable<number> {
    let i = -1;

    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llegó a valor de 2');
        }
      }, 1000);
    });

  }
}
