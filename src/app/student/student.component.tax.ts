import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:"hemadri"
})
export class studentcomponenttax implements PipeTransform{
    transform(value: number, tax: number){
        tax = tax > 1 ? tax: 10
        return (value) - ((value) * tax /100);
    }
}

