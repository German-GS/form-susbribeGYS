const $form= document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form=new FormData(this)
    console.log(form.name)
}

/* function create_person(){

}


function takeResults(){
    name=document.getElementById("name")
    lastName=document.getElementById("last_name")
    cel_number=document.getElementById("cel_number")
    email=document.getElementById("email")
    etapa=document.getElementById("etapa")
    edad=document.getElementById("age")
    house_number=document.getElementById("house_number")
    date_birth=document.getElementById("date_of_birth")
    ocupation=document.getElementById("ocupation")


}
 */
