//Date
var dt = new Date();
var newDate = dt.getDate()+'/'+(parseInt(dt.getMonth())+1)+'/'+dt.getFullYear();
//console.log(dt);
document.getElementById("date").value = newDate;

//-------------------------------------------------------------------


//Form & Table
const stdName =document.querySelector('#name');
const identification =document.querySelector('#identification');
const semester =document.querySelector('#semester');
const subjectName =document.querySelector('#subjectName');
const date =document.querySelector('#date');
const btn =document.querySelector('.btn');
const classList = document.querySelector('#classList');

btn.addEventListener('click', function(event){
    event.preventDefault();


    if(stdName.value=='' || identification.value=='' || semester.value=='' || subjectName.value==''){
        alert("Please fill up all blanks");
    }
    else
    {
        const newRow = document.createElement('tr');
    

    //stdName
    const newStdName = document.createElement('th')
    newStdName.innerHTML = stdName.value
    newRow.appendChild(newStdName)

    //identification
    const newIden = document.createElement('th')
    newIden.innerHTML = identification.value
    newRow.appendChild(newIden)

    //semester
    const newSemester = document.createElement('th')
    newSemester.innerHTML = semester.value
    newRow.appendChild(newSemester)

    //subject
    const newSub = document.createElement('th')
    newSub.innerHTML = subjectName.value
    newRow.appendChild(newSub)

    //date
    const newDate = document.createElement('th')
    newDate.innerHTML = date.value
    newRow.appendChild(newDate)

    classList.appendChild(newRow)

    }
})