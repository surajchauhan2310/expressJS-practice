class RailwayForm {
  submit() {
    return `${this.name} your form has been submitted successfully with train no ${this.trainNum}!`;
  }
  cancel() {
    return `${this.name} your form has been cancelled successfully with train no ${this.trainNum}!`;
  }
  fill(name, trainNum) {
    this.name = name;
    this.trainNum = trainNum;
  }
}
//To create a form
let leoForm = new RailwayForm();

leoForm.fill("Leo", 12111);

//To submit a form
console.log(leoForm.submit());

//To cancel a form
console.log(leoForm.cancel());

//Same applies for cris as well
let crisForm = new RailwayForm();
crisForm.fill("Cristiano", 43255);
console.log(crisForm.submit());
console.log(crisForm.cancel());
