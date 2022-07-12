import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:"dash_to_anything"
})
export class CustomPipe implements PipeTransform{
    transform(value: string,default_replace="") {
        return value.replace("-",default_replace)
    }
}