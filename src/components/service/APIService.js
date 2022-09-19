const axios = require('axios');

export async function requestPhoto(page, name) {
    try {const flower = await axios.get(`https://pixabay.com/api/?q=${name}&page=${page}&key=29134975-55176222cb40c79fbb9ec0121&image_type=photo&orientation=horizontal&per_page=12`)
    console.log(flower);
    return flower.data.hits} catch (err) {
        alert('Something going wrong')
    }
    
   
    

}

