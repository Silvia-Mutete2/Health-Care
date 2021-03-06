let form = document.querySelector('form');
let patientName = document.querySelector('#patient-name');
let contact = document.querySelector('#contact');
let date = document.querySelector('#date');
let time = document.querySelector('#time');
let symptoms = document.querySelector('#symptoms');
let consultations = document.querySelector('#consultations');
let services = document.querySelector('#services');
let url= "https://shadescare.herokuapp.com/consultations"

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
});

form.addEventListener('submit', addConsultations);
function addConsultations(e) {
  e.preventDefault();

    let newConsultation = {
      patientname : patientName.value,
      contact : contact.value,
      date : date.value,
      time : time.value,
      symptoms : symptoms.value}

      fetch(consultations, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newConsultation)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
          }

const showConsultations= (data) => {
  console.log(data)
  while(consultations.firstChild) {
    consultations.removeChild(consultations.firstChild);
        }
        let objectStore = objectStore('consultations');
        let cursor = e.target.result;
        if(cursor) {      
  let ConsultationHTML = document.createElement('li');
  ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
  ConsultationHTML.classList.add('list-group-item');
                    
  const html = ConsultationHTML.innerHTML = `  
            <p class="font-weight-bold">Patient Name:  <span class="font-weight-normal">${cursor.value.patientname}<span></p>
            <p class="font-weight-bold">Contact:  <span class="font-weight-normal">${cursor.value.contact}<span></p>
            <p class="font-weight-bold">Date:  <span class="font-weight-normal">${cursor.value.date}<span></p>
            <p class="font-weight-bold">Time:  <span class="font-weight-normal">${cursor.value.time}<span></p>
            <p class="font-weight-bold">Symptoms:  <span class="font-weight-normal">${cursor.value.symptoms}<span></p>
                         `;
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('btn', 'btn-danger');
    cancelBtn.innerHTML = 'Cancel'
    cancelBtn.onclick = removeConsultation;

    ConsultationHTML.appendChild(cancelBtn);
    consultations.appendChild(ConsultationHTML);          
    cursor.continue();
    } else {
      if(!consultations.firstChild) {
          services.textContent = 'Change your visiting hours';
          let noSchedule = document.createElement('p');
          noSchedule.classList.add('text-center');
          noSchedule.textContent = 'No results Found';
          consultations.appendChild(noSchedule);
          } else {
          services.textContent = 'Cancel Your consultations'
            }
          }
        }
         
    