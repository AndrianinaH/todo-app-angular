import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TodoServiceProvider {

    private apiUrl: string = "http://localhost:8081/tasks";
   
    constructor(public http: HttpClient) {
    }

    getAllTodo(){
        return new Promise((resolve,reject) => {
            this.http.get(this.apiUrl).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }

    addTask(data){
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'});
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl, data, { headers: headers }).subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    updateTask(data){
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'});
        return new Promise((resolve, reject) => {
            this.http.put(this.apiUrl, data, { headers: headers }).subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    
    findTask(id){
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'});
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl+'/'+id, { headers: headers }).subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }

    deleteTask(id){
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'});
        return new Promise((resolve, reject) => {
            this.http.delete(this.apiUrl+'/'+id,{headers: headers}).subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }



}