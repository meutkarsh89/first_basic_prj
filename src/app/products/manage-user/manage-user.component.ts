import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Product } from '../app-Product-interface/products.interface';
import { ProductsService } from '../appProduct-services/products.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  @ViewChild('productForm') proForm!:NgForm;
  dataTitle:Observable<Object> = this._productsService.getDataTitle();
  products:Product[]=[];
  shipment!:Product;
    // {prodImg:'../../assets/laptop.jpg', prodName:'Laptop', prodId:'prod01', prodPrice:50000},
    // {prodImg:'../../assets/mobile.jpeg', prodName:'Mobile', prodId:'prod01', prodPrice:10000},
    // {prodImg:'../../assets/television.jpg', prodName:'TV', prodId:'prod01', prodPrice:35000},
    // {prodImg:'../../assets/washing-machine.jpeg', prodName:'Washing Machine', prodId:'prod01', prodPrice:15000}
  
  fetching:boolean=false;
  edit:boolean=false;
  editIndex!:number;
  loading:boolean=false;

  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
    this.onFetchProduct();
  }

  onSubmit(prod:Product){
    if(this.edit){
      console.log(prod);
      const code:string|undefined = this.products[this.editIndex].prodCode;
      if(code!=undefined){
        this._productsService.updateEditShipment(code, prod).subscribe(res=>{
          console.log(res);
        })
      }
      this.edit=!this.edit;
    }
    else{
      this.shipment = {
        prodName:prod.prodName,
        prodId:prod.prodId,
        prodPrice:prod.prodPrice
      }
    }
  
    this.proForm.reset();
    this.onFetchProduct();
  }

  // onSubmit(prod:any){
  //   console.log(prod);
  //   if(this.edit){
  //     this.products[this.editIndex]={
  //       prodName:prod.prodName,
  //       prodId:prod.prodId,
  //       prodPrice:prod.prodPrice
  //     }
  //     this.edit=!this.edit
  
    
  //   }else{
  //     //for put request, need to send products array
  //     this.products.push({
  //       prodName:prod.prodName,
  //       prodId:prod.prodId,
  //       prodPrice:prod.prodPrice
  //     })
  //   }
  //   console.log(this.products); 
  //   this.proForm.reset(); 
  // }

  onFetchProduct(){
    this.fetching=true;
    //FETCH WHEN SAVED BY PUT REQUEST 
    // this._productsService.fetchProducts().subscribe(prods=>{
    //   console.log(prods);
    //   if(prods!=null){
    //     let data = JSON.stringify(prods)
    //     this.products = JSON.parse(data)
    //   }
    //   this.fetching=false
    // })

    this._productsService.fetchShipments().pipe(map((data:{[key:string]:any})=>{
      console.log(data);
      const prodArray:Product[]=[];
      for(const key in data){
        console.log(data.hasOwnProperty(key));
        if(data.hasOwnProperty(key)){
          prodArray.push({prodCode:key, ...data[key]})
        }
      }
      return prodArray
    }))
    .subscribe(res=>{
      console.log(res);
      if(res!=null){
        let data = JSON.stringify(res)
        this.products = JSON.parse(data)
      }
      this.fetching=false
    })
  }

  onSaveProducts(){
    this.loading=true;
    // SAVE PRODUCTS BY PUT REQUEST
    // this._productsService.saveProducts(this.products).subscribe((res)=>{
    //     console.log(res);
    //     this.loading=false;
    //   }
      
    // )

    //SAVE PRODUCTS BY POST REQUEST
    this._productsService.saveShipment(this.shipment).subscribe((res)=>{
      console.log(res);
      this.loading=false;
    })
    this.onFetchProduct();
    this.loading=false;
  }
  
  onEditProduct(index:number){
    this.edit=!this.edit;
    this.editIndex=index;
    let data = this.products[this.editIndex];
    
    this.proForm.setValue({
      prodId:data.prodId,
      prodName:data.prodName,
      prodPrice:data.prodPrice
    })
    
  }
  onSaveEdit(index:number){
  //when PUT method used
    // this.edit=!this.edit;
    // this.onSaveProducts();

  //when POST method used
    const prod:Product = this.products[index];
    const code:string|undefined = this.products[this.editIndex].prodCode;
      if(code!=undefined){
        this._productsService.updateEditShipment(code, prod).subscribe(res=>{
          console.log(res);
        })
      }
    this.edit=!this.edit;
  }

  // DELETE WHEN SAVED BY PUT METHOD
  onRemoveProduct(index:number){
    if(confirm("Do you want to delete this product!")){
      this.products.splice(index,1);
      this.onSaveProducts();
      // const code:any = this.products[index].prodCode
      // console.log(code);
      
      // this._productsService.deleteShipments(code).subscribe(res=>{
      //   console.log(res); 
      // })
    }
    
  }

  // DELETE WHEN SAVED BY POST METHOD
  onDeleteProduct(id:string | undefined){
    console.log(id);
    if(confirm("Do you want to delete this product!")){
      if(id!=null || id!=undefined){
        this._productsService.deleteShipments(id).subscribe(res=>{
          console.log(res);
          
        })
      }
    }
    this.onFetchProduct();
  }

}
