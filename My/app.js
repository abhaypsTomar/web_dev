async function fetchData(){
    try {
        const response = await fetch("", {
            method: "GET",
            
        })

        if(response.ok){
            //do something
        }
    } catch (error) {
        //console the error
    }
}

function fetchData(){
    fetch("", {}).then(res => {

    }).catch(err => {
        
    })
}