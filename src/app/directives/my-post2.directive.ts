import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyPost2]'
})
export class MyPost2Directive {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
