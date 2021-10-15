import { postTrip } from './postTrip'

//create 'Save' button once image loaded
let saveButton = async () => {
    //button added if running app for first time
    let existingButton = document.getElementById('save');
    if (existingButton === null ) {
        const saveButton = document.createElement('button');
        saveButton.innerHTML = 'Save Trip';
        saveButton.id = 'save';
        saveButton.type = 'submit';
        //button added to DOM
        const addSaveButton = document.getElementById('saveBtn');
        addSaveButton.appendChild(saveButton);
        //listener
        saveButton.addEventListener('click', postTrip) 
    } else {
    //        
    }   
}

export { saveButton }