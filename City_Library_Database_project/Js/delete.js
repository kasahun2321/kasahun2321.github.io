
let deleteId= document.getElementById('')

const url = 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/224'

async function deletebooks() { 
  
    // Awaiting fetch which contains  
    // method, headers and content-type 
    const response = await fetch(url, { 
        method: 'DELETE', 
        headers: { 
            'Content-type': 'application/json'
        } 
    }); 

    // Awaiting for the resource to be deleted 
    const resData = await 'Resource Deleted...'; 

    // Return response data  
    return resData; 
} 