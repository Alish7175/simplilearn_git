import {PipeTransform, Pipe} from '@angular/core'

@Pipe({
    name: 'picker'
})
export class Picker implements PipeTransform{
    transform(value: string , limit: number){
        return value.substring(0,limit);
    }
}