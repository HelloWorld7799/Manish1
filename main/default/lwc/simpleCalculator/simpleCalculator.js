import { LightningElement,track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
@track currentResult;
@track showResults=false;
@track previousResults=[];

firstNumber;
secondNumber;

changeHandler(event){
    const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
}
addHandler(){
const firstNum = parseInt(this.firstNumber);
const seconNum = parseInt(this.secondNumber);
this.currentResult=`Addition of ${firstNum} and ${seconNum} is ${firstNum+seconNum}`;
this.previousResults.push(this.currentResult);
}
subHandler(){
    const firstNum = parseInt(this.firstNumber);
    const seconNum = parseInt(this.secondNumber);
    this.currentResult=`Subtraction of ${firstNum} and ${seconNum} is ${firstNum-seconNum}`;
    this.previousResults.push(this.currentResult);

}
multiHandler(){
    const firstNum = parseInt(this.firstNumber);
    const seconNum = parseInt(this.secondNumber);
    this.currentResult=`Multiplication of ${firstNum} and ${seconNum} is ${firstNum*seconNum}`;
    this.previousResults.push(this.currentResult);

}
divHandler(){
    const firstNum = parseInt(this.firstNumber);
    const seconNum = parseInt(this.secondNumber);
    this.currentResult=`Division of ${firstNum} and ${seconNum} is ${firstNum/seconNum}`;
    this.previousResults.push(this.currentResult);

}

checkboxhandler(event){
   this.showResults=event.target.checked;
}

}