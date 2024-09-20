class User {
  constructor(name, email) {
    this.name = name;
    this.emaill = email;
  }
  viewdata() {
    // console.log`User name is ${this.name} and his/her email is ${this.email} `;
    console.log("Data: Users table");
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    console.log("Data got updated succesfully!");
  }
}

let student1 = new User("Suraj", "23surajrc@gmail.com");
let student2 = new User("Leo", "messi@gmaail.com");

// console.log(student2.viewdata());

let adObj = new Admin("Chronous", "cron@yahoo.com");
// console.log(adObj.editData());
// ----------------------------------------------------------------------------

// class Nodemailer {
//   async sendEmail() {
//     console.log("Sending an email");
//   }
//   async sendEmailWithPDF() {
//     console.log("Sending an email with PDF");
//   }
// }
class Mailer {
  constructor(mailService) {
    // console.log("Mailservice==>>>", mailService); //It will be the first line which will get printed on the console.
    this.mailService = mailService;
  }
  sentMyEmail() {
    this.mailService.sendEmail();
    console.log("This is a simple mail");
  }
  awsAttachedMail() {
    this.mailService.sendEmailWithPDF();
    console.log("This is a attached aws's pdf mail");
  }
}

class AWSNodemailer {
  async sendEmail() {
    console.log("Sending an basic email");
  }
  async sendEmailWithPDF() {
    console.log("Sending an email with PDF");
  }
}

const mailerObj = new Mailer(new AWSNodemailer());
// mailerObj.sentMyEmail();
// mailerObj.awsAttachedMail();

// mailerObj.sendEmailWithPDF();

// -----------------------------------------------------------------

class CronJob {
  constructor(timeString, cronFunc) {
    this.timeString = timeString;
    this.cronFunc = cronFunc;
  }
  start() {
    this.cronFunc();
  }
  stop() {
    // console.log("Stopping the cronFunc!!!");
    console.log(this.timeString);
  }
}
const upcomingCronFunc = new CronJob("12sept", async () => {
  for (let i = 0; i < 6; i++) {
    console.log(i);
  }
});
upcomingCronFunc.start();
// console.log(upcomingCronFunc);
upcomingCronFunc.stop();
