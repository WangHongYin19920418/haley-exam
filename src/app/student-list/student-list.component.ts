import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

interface Patient{
  id:number,
  name:string,
  time:number,
  sex:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  patients:Array<Patient>;
  constructor() {
    this.loadPatientsData();
  }
  sortPatients(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if(type=="asc"){
      this.patients.sort(function (a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a 必须等于 b
        return 0;
      })
    }else if(type=="desc"){
      this.patients.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        // a 必须等于 b
        return 0;
      })
      }else if(type=="random"){
        this.patients.sort(function (a, b) {
          if (a.id !== b.id) {
            return Number(Number(Math.random()*10).toFixed(0));
          }
        })    }
  }
  loadPatientsData(){
    this.patients = [
      {id:2,name:"XiaoMing",time:6,sex:"male"},
      {id:1,name:"ZhangSan",time:4,sex:"male"},
      {id:3,name:"LiSi",time:7,sex:"female"}
    ];
  }
  addNewPatient(){
    let puid = Number(Math.random()*1000).toFixed(0);
    let ptime = Number(Number(Math.random()*10).toFixed(0));
    let newPatient:Patient = {
      id:Number(puid),
      name:"WangWu",
      time:ptime,
      sex:"male"
    }
    this.patients.push(newPatient);
  }
  deletePatientByID(id){
    this.patients.forEach((patient,index,arr)=>{
      if(patient.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
