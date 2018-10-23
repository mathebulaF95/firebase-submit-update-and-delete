import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
* Generated class for the HomePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

declare var firebase;

@IonicPage()
@Component({
 selector: 'page-home',
 templateUrl: 'home.html',
})
export class HomePage {

 updateVal;
 currentSelectedObj;
 count = 1;
 name;
 items = [];
 cuisine={
   name:''
 }
 constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
   
   firebase.database().ref('/cuisine/').on("value",(snapshot) => {
       snapshot.forEach((snap) => {
         console.log("--------------->"+snap.val());
         this.items.push(snap.val());
       });
       return false;
   });
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad HomePage');
 }

 writeCuisine(){
   console.log(this.name);
   this.cuisine.name = this.name;
   var database = firebase.database();
   database.ref('/cuisine/').push(this.cuisine);
 }

 update(i){
   this.count = 2;
   this.currentSelectedObj = i;
   console.log("-----------------> object on update()" + i)
 }
 delete(){
   console.log("---------------------> currentSelectedObj" + this.currentSelectedObj.name);
     var database = firebase.database();
     database.ref('/cuisine/' + this.currentSelectedObj.key).remove();
 }
 perfomUpdate(){
   this.currentSelectedObj.name = this.updateVal;
   var database = firebase.database();
   // database = firebase.database.ref('/cuisine/').update(i);
   database.ref('/cuisine/' + this.currentSelectedObj.key).set({name:this.currentSelectedObj.name});
   console.log("---------------------> object on perfomUpdate"+this.currentSelectedObj.name);
 }
 // <button ion-button full (click)="perfomAdd()">Add</button>
 // <button ion-button full (click)="perfomDelete()">Delete</button>
 // <button ion-button full (click)="gotoUpdate()">Update</button>
 perfomAdd(){
   console.log("hello add");
   this.count = 1;
 }
 perfomDelete(){
   console.log("hello delete");
   this.count = 3;
 }
 goBack(){
   this.count = 1;
 }
 presentToast() {
   let toast = this.toastCtrl.create({
     message: 'User was added successfully',
     duration: 3000,
     position: 'top'
   });
 
   toast.onDidDismiss(() => {
     console.log('Dismissed toast');
   });
 
   toast.present();
 }
}