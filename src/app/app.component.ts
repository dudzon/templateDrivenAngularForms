import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("form", { static: false }) signupForm: NgForm;
  defaultQuestion: string = "pet";
  answer: string = "";
  genders: string[] = ["male", "female"];
  value: string = "";
  submitted = false;
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  };
  suggestUserName() {
    const suggestedName = "Superuser";
    console.log(this.signupForm);
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'gfdj@gmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit(form: NgForm) {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
