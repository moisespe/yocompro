var palanca = document.getElementById('option-profile');
let profile = document.getElementById('profile');

profile.style.display = "none";

palanca.addEventListener('click', function(){
    
    if (profile.style.display === "block") {
        profile.style.display = "none";
    }else{
        profile.style.display = "block";
    }
});

// palanca.addEventListener('toggle', verOpciones);


/*

*/