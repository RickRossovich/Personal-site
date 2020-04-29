import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Contact } from "../interface/contact";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  @Output() added = new EventEmitter<Contact>();
  addContact(form: NgForm) {
    this.added.emit(form.value);
    form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
