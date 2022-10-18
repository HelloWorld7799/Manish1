import { LightningElement,track } from 'lwc';

export default class CoditionalRendering extends LightningElement {
    @track showData=false;

    changeHandler(event){
    this.showData=event.target.checked;
    }

   @track cities=[
        'Hyderabd','Vijawada','Gudivada','Guntur','Vizag'
    ]
}