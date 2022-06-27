'use strict';

const contactForm = document.querySelector('form.contact-me');



contactForm.addEventListener('submit', function(e)
{

    e.preventDefault();

    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const fullName = firstName.value + ' ' + lastName.value;

    let templateParams = 
    {
        from_name: fullName,
        reply_to: document.getElementById('email').value,
        message: document.getElementById('email-content').value,
    };
    

    emailjs.send('service_htyk3kh','template_2s29lub', templateParams)
        .then(function(response) 
        {
            console.log('Email sent', response.status, response.text);

            let emailThankYou = document.getElementsByClassName('email-thankyou')[0];
            console.log(emailThankYou);
            emailThankYou.styles.display = 'block';

        }, function(error) 
        {
            console.log('Email failed to send', error);
        });

        let inputs = document.getElementsByTagName("input"); 
        for (let i = 0; i < inputs.length; i++) { 
            inputs[i].disabled = true;
        } 

        document.getElementById('email-content').disabled = true;
        

   
});