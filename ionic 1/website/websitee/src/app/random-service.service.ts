import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class RandomServiceService {
data: any[] = [];
constructor() {}
getData(){
return this.data = [
{
name: 'Any Name',
class: 'Xth',
roll: '100'
},
{
name: 'Second Name',
class: 'XII',
roll: '200'
},
{
name: 'Third Name',
class: 'IXth',
roll: '130'
},
{
name: 'Fourth Name',
class: 'VIIth',
roll: '560'
},
]
}
}