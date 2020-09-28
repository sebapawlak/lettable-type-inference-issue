import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const observable = of("Hello")

observable.pipe(
    map((value) => value.length),
    map((value) => value +1),
)
