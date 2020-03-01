import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
const todos = [{
  id:1,
  title:"吃饭",
  done:true
},
{
  id:2,
  title:"睡觉",
  done:false
}]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private router:Router){}
  ngOnInit(){
   console.log( this.router)
   this.router.events.subscribe((event)=>{
    if(event instanceof NavigationEnd){
      const hash = window.location.hash.substr(1)
      switch(hash){
        case '/':
          this.visibility = 'all'
          break;
          case '/active':
            this.visibility = 'active'
            break;
          case '/completed':
            this.visibility = 'completed'
            break;
      }
    }
   })
  }
  public visibility: string = 'all'
  title = 'todomvc-angular';
  public todos:{
    id:number,
    title:string,
    done:boolean,
  }[]=todos;
  public currentEditing:{
    id:number,
    title:string,
    done:boolean
 }=null
  addTodo(e):void{
        const titleText=e.target.value
        if(!titleText.length){
          return
        }
        const last = this.todos[this.todos.length-1]
        this.todos.push({
          id:last?last.id+1:1,
          title:titleText,
          done:false
        })
        e.target.value=""
  };
  get toggleAll(){
    return this.todos.every(item=>item.done)
  }  
  set toggleAll(val:boolean){
    this.todos.forEach(item=>item.done=val)
  };
  removeTodo(index:number):void{
      this.todos.splice(index,1)
  };
  saveEdit(todo,e){
    todo.title=e.target.value
    this.currentEditing=null
  };
  handleEditKeyUp(e){
    const{Keycode,target}=e
    if(Keycode===27){
      target.value=this.currentEditing.title
      this.currentEditing=null
    }
  };
  get remaningCount(){
    return this.todos.filter(item=>!item.done).length
  };
  clearAllDone(){
   this.todos = this.todos.filter(i=>!i.done)
  };
  get filterTodos() {
    if (this.visibility === 'all') {
      return this.todos
    } else if (this.visibility === 'active') {
      return this.todos.filter(t => !t.done)
    } else if (this.visibility === 'completed') {
      return this.todos.filter(t => t.done)
    }
  }
}
