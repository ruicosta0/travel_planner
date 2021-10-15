//Global variables

//build pixabay API url

const key_text = "key="
const search_term = "&q="
const type_text  = "&image_type=photo"
const category = "&category=places"


async function pixabayRequest () {
    
    //remove existing image for new request
    let existingImgElement = document.querySelector("img")
    if(typeof(existingImgElement) != 'undefined' && existingImgElement != null) {
        existingImgElement.remove();
    } else {
        //
    }

    //Create fresh img tag
    let newImageElement = document.createElement("img");
    newImageElement.id = "pixImg";
    let imageSection = document.querySelector(".image");
    imageSection.appendChild(newImageElement);

    let response = await fetch('http://localhost:8081/image');
    
    try {    
       
        let pixCredentials = await response.json();
        let place = document.getElementById('dest').value;
        
        //make request to pixabay
        let url = pixCredentials.pixabay_url + key_text + pixCredentials.pixabay_API + search_term + place + type_text + category
        let pixabayResponse = await fetch(url);
        let pixabayImage = await pixabayResponse.json();

        //load image to UI
        let totalHits = pixabayImage.totalHits
        if(totalHits === 0) {
            document.getElementById("pixImg").src = "";
            document.getElementById("pixImg").alt = "Sorry no image is available";
        } else {
            let photo_url = pixabayImage.hits[0].previewURL;
            document.getElementById("pixImg").src = photo_url;
    }

    } catch (error) {
        console.log("error", error)
    }
}   

export { pixabayRequest }