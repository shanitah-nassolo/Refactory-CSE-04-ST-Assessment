
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {

    e.preventDefault();


    const inputs = form.querySelectorAll('input, select');


    const formData = {};



    inputs.forEach((input) => {


        if (input.required) {

            if (!input.value) {

                input.nextElementSibling.textContent = 'This field is required';
                input.classList.add('is-invalid');
            } else {
                input.nextElementSibling.textContent = '';
                input.classList.remove('is-invalid');
            }
        }


        formData[(input.id)] = input.value;
    });


    if ([...inputs].every(input => input.value !== '')) {

        alert('Form submitted successfully!');


        console.log(formData);
    }
});
