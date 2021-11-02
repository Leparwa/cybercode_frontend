import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MpesaService } from '../../services/mpesa.service';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-buy-data',
  templateUrl: './buy-data.component.html',
  styleUrls: ['./buy-data.component.scss']
})
export class BuyDataComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private modalService: NgbModal, 
    private fb:FormBuilder,
    private mpesaService:MpesaService
    
    ) {}

  ngOnInit(): void {
    this.getToken()
    this.myForm = this.fb.group({
      name: ['', Validators.required],

    });
  }
  open() {
    const modalRef = this.modalService.open(ModalComponentComponent,  {centered: false,  scrollable:true,  backdrop:false, container:'#buy_data_container' } );
    modalRef.componentInstance.myForm = this.myForm;
  }

  getToken(){
    this.mpesaService.getToken()
  }
}

