const form = document.querySelector("#task-form");
const add_btn = document.querySelector("#add-task-btn");
const form_input = document.querySelector(".form-input");
const list_container = document.querySelector(".tasks");
// const add_btn = document.querySelector("");


form.addEventListener('submit',(e)=>{
        e.preventDefault();

        const user_input_value = form_input.value.trim();
        // console.log(user_input_value);

        if(user_input_value == ""){
            alert("please add task!");
            return;
        }

        // to place the content inside tasks div
        const task = document.createElement('div');
        task.classList.add("task");

        const content = document.createElement('div');
        content.classList.add('content');

        const input_area = document.createElement('input');
        input_area.classList.add('input_area');
        input_area.classList.add('text');
        input_area.classList.add('my-4');

        //now
        input_area.value = user_input_value;
        input_area.setAttribute("readonly","readonly");
        input_area.type="text";

        //now append new div into tasks container
        //appending input_area into its partnt contnet and content div inside its parent container tasks
        content.appendChild(input_area);
        task.appendChild(content);
        list_container.appendChild(task);

        // now we will create action div - to edit and delete 
        const actions = document.createElement('div');
        actions.classList.add('actions');
        actions.classList.add("mt-2");
        actions.classList.add('my-2')

        const edit_btn = document.createElement('button');
        edit_btn.classList.add("edit_btn");
        edit_btn.classList.add("mt-2");
        edit_btn.innerHTML = "Edit"

        const delete_btn = document.createElement('button');
        delete_btn.classList.add("delete_btn");
        delete_btn.innerHTML = "Delete";
        delete_btn.classList.add('margin-top:2')

        actions.appendChild(edit_btn);
        actions.appendChild(delete_btn);
        task.appendChild(actions);
  

        //after submitinf the value make input field empty
        form_input.value = "";


        //edit user's data

         edit_btn.addEventListener('click',()=>{
            if(edit_btn.innerHTML == "Edit"){
                input_area.removeAttribute('readonly');
                edit_btn.innerHTML = "Save";
                input_area.focus();
            }else{
                input_area.setAttribute("readonly","readonly");
                edit_btn.innerHTML = "Edit";
            }
        })

        //Delete users data
        delete_btn.addEventListener('click',()=>{
            list_container.removeChild(task);
        })
})