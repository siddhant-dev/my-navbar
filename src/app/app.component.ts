import { Component, ElementRef, OnInit } from '@angular/core';
import { ModalService } from 'angular-modal-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  showMenu = false;
  element: any;


  ngOnInit() {
    this.element = document.querySelector('.modal-body');
    this.element.style.borderRadius = '15px';
    console.log(this.element.classList);

  }

  menu() {
    this.showMenu = !this.showMenu;
  }

  constructor(private modal: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  open(id: string) {
    this.modal.open(id);

  }
  close(id: string) {
    this.modal.close(id);
  }
  
}



