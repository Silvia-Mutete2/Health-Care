$(document).ready(function(){
    //For the navbar to appear on scroll
    
    $(window).scroll(function(){
        if(this.scrollY >200){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
            }
        })
    })

let form = document.querySelector('form');
let patientName = document.querySelector('#patient-name');
let contact = document.querySelector('#contact');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let symptoms = document.querySelector('#symptoms');
let consultations = document.querySelector('#consultations');
let services = document.querySelector('#services');
const consultationData= "http://localhost:3000/consultations";

class consultation{
    constructor (patientName , contact, date , time, symptoms){
      this.patientName =form.patientName.value
      this.contact =form.contact.value
      this.date = form.date.value
      this.time =form.time.value
      this.symptoms =form.symptoms.value
    }
  }


// document.addEventListener("DOMContentLoaded", (e) => {
//     e.preventDefault();
//     console.log("The DOM has loaded");
// });
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener("submit", (e)=> {
    e.preventDefault()
  })
})


    function showConsultations(consultation){
        let ConsultationHTML = document.createElement('li');
        ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
        ConsultationHTML.classList.add('list-group-item');
        
        ConsultationHTML.innerHTML = `  
        <p class="font-weight-bold">Patient Name:  <span class="font-weight-normal">${cursor.value.patientname}<span></p>
         <p class="font-weight-bold">Contact:  <span class="font-weight-normal">${cursor.value.contact}<span></p>
        <p class="font-weight-bold">Date:  <span class="font-weight-normal">${cursor.value.date}<span></p>
        <p class="font-weight-bold">Time:  <span class="font-weight-normal">${cursor.value.time}<span></p>
        <p class="font-weight-bold">Symptoms:  <span class="font-weight-normal">${cursor.value.symptoms}<span></p>
   `;
   const cancelBtn = document.createElement('button');
   cancelBtn.classList.add('btn', 'btn-danger');
   cancelBtn.innerHTML = 'Cancel';
   cancelBtn.onclick = removeConsultation;


   ConsultationHTML.appendChild(cancelBtn);
   consultation.appendChild(ConsultationHTML);

    
    }
    
    function consultationData(){
        fetch('http://localhost:3000/consultations')
        .then(response => response.json())
        .then(consultationData => consultationData.forEach(consultation => showConsultations(consultation)));
    }
    function showConsultationHTML(){
        getconsultationData()
    }
    showConsultationHTML();           