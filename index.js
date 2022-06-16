const features = document.getElementById('features');
features.addEventListener('click', (e)=> {
    e.preventDefault();
    document.getElementsByClassName('features')[0].classList.toggle('features-active');
    
    toggleArrow('features-arrow');
    
});

const company = document.getElementById('company');
company.addEventListener('click', (e)=> { 
    
    e.preventDefault();
    document.getElementsByClassName('company')[0].classList.toggle('company-active');
    toggleArrow('company-arrow');

});


const toggleArrow = (id) => {
    let image = document.getElementById(id).src;
    if(image.indexOf('images/icon-arrow-down.svg')!=-1 ){
        document.getElementById(id).src = 'images/icon-arrow-up.svg';
    }
    else  {
        document.getElementById(id).src = 'images/icon-arrow-down.svg';
    }
}

