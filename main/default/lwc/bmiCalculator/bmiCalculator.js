import { LightningElement,track } from 'lwc';
import {getBmi} from 'c/bmi';

export default class BmiCalculator extends LightningElement {
@track bmiData={
    weight:0,
    height:0,
    result:0
}
weightHandler(event){
    this.bmiData.weight=parseFloat(event.target.value);
}
heightHandler(event){
    this.bmiData.height=parseFloat(event.target.value);
}
calculateBMI(){

    this.bmiData.result=getBmi(this.bmiData.weight,this.bmiData.height);
}

get bmiValue(){
    if(this.bmiData.result ===undefined){
        return "";
    }
    return ` MY BMI VALUE IS ${this.bmiData.result}`;
}
}