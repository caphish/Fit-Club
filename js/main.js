const showPopupBtn = document.querySelector(".join-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const formPopup = document.querySelector(".form-popup");
const loginSignupLink= document.querySelectorAll(".form-box .bottom-link a ")

showPopupBtn.addEventListener("click",() =>{
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click",()=> showPopupBtn.click());

loginSignupLink.forEach(link =>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        formPopup.classList[link.id==="signup-link"? 'add': 'remove']("show-signup");
    });
});

const calculateForm= document.getElementById('bmi-form');
const calculateCm= document.getElementById('bmi-cm');
const calculateKg= document.getElementById('bmi-kg');
const calculateMessage= document.getElementById('bmi-message');

const calculateBmi= (e) =>{
    e.preventDefault();

    if(calculateCm.value==='' || calculateKg.value===''){
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        calculateMessage.textContent= "Fill in Height & Weight";

        setTimeout(()=>{
            calculateMessage.textContent='';
        },3000);
    } else{
        const cm= calculateCm.value /100;
        const kg= calculateKg.value;
        const bmi= Math.round(kg/(cm*cm));

        if(bmi<18.5){
            calculateMessage.textContent=`Your BMI is ${bmi} and you are skinny`;
        }
        else if(bmi<25){
            calculateMessage.textContent=`Your BMI is ${bmi} and you are healthy`;
        }
        else{
            calculateMessage.textContent=`Your BMI is ${bmi} and you are overweight`;
        }


        calculateCm.value='';
        calculateKg.value='';

        setTimeout(() => {
            calculateMessage.textContent='';
        }, 4000);
    }
}

calculateForm.addEventListener('submit', calculateBmi);

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const contactForm= document.getElementById('contact-form');
  const contactMessage= document.getElementById('contact-message');
  const contactUser= document.getElementById('contact-user');


  const sendEmail= (e) =>{
    e.preventDefault();

    if(contactUser.value===''){
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

       contactMessage.textContent= 'You must enter your email' ;

       setTimeout(()=>{
        contactMessage.textContent='';
       },3000);
    } else{
        emailjs.sendForm('service_54k6ktr','template_96gus84','#contact-form','TlfDk305jb6oa9rrE')
        .then(()=>{
            contactMessage.classList.add('color-green');
            contactMessage.textContent= 'You Registered Successfully';

            setTimeout(()=>{
                contactMessage.textContent='';
            
            },3000);
        },(error)=>{
            alaert("OOPS! SOMETHING WENT WRONG", error);
        });
        contactUser.value='';
    }
  }


  contactForm.addEventListener('submit', sendEmail);