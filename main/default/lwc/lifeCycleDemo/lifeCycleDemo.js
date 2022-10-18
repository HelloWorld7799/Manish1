import { LightningElement } from 'lwc';

export default class LifeCycleDemo extends LightningElement {
    constructor(){
        super();
        console.log('1.Constructor Called');
    }
    connectedCallback(){
        console.log('2.ConnectedCallback Called');
    }
    renderedCallback(){
        console.log('3.RenderedCallback Called');
    }
    disconnectedCallback(){
        console.log('4.DisconnectedCallback Called');
    }
}