import {Component} from '@angular/core';

@Component({
    selector:'app-comp',
    template:` <div>
                    <h1>This is  main component of app</h1>
                    <book-comp></book-comp>
                </div>`
})

export class AppComponent{

}