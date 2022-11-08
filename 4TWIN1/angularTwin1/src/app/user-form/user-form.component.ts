import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id:number=null;
  list : User[] = [];
  user : User = new User();
  accountCategory:string="Customer";
  verif(f){
    console.log(f.value);
  }
  test(err){
 
    console.log(err);
    this.user.accountCategory="Customer";
   this.list.push(this.user);
   console.log(this.list);
   //err.submit();
  }
  onSubmit(){
   //this.list.push(this.user);
   //console.log(this.list);
   this.ac.paramMap.subscribe(res=>{this.id=+res.get('id')})
   if(!this.id){  //this.id == 0
    console.log("add");
    this.sservice.addUser(this.user).subscribe();
   }else{
    console.log("update", this.id);
    this.sservice.updateUser(this.user).subscribe(()=>this._router.navigateByUrl("user"));
   }
   
  }
  constructor(private sservice:SharedService,private _router:Router, private ac:ActivatedRoute) { }

  ngOnInit(): void {
   
    if(this.id != 0){
      this.ac.paramMap.subscribe(res=>{this.id=+res.get('id'),this.sservice.getUser(this.id).subscribe(res=>this.user=res)} );
    }
    
    //get user
    ;
  }

}
