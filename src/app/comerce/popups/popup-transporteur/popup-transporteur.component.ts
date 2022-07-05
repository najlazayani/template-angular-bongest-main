import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-transporteur',
  templateUrl: './popup-transporteur.component.html',
  styleUrls: ['./popup-transporteur.component.scss']
})
export class PopupTransporteurComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}
