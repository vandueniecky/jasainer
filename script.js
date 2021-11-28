// paralax jumbotron
$ (window).scroll(function(){

    // navbar transparant to color on scrollTop
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 250);

    // jumbotron Portofolio
    var wScroll = $(this).scrollTop();

    $ ('.jumbotron img').css({
        'transform' : 'translate(5px 0px, '+ wScroll/4 +'%)'
    
    });
    $ ('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
    
    });
    $ ('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'

    });
    $ ('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'

    });

});


// click trigger
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
});

$('button.navbar-toggler').click(function() {
    $('.navbar').addClass('scrolled');
});

// Contact from websit to Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbxp-zzbBT4jhgweKSLb8CPadWk-wVvBPcE4uYEpsRF-jASQY8Z80yCnLVUB4G_HaLeosQ/exec'
const form = document.forms['data-from-website'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

// Contact
const forms = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pesan = document.getElementById('pesan');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // ketika tombol sumbit diklik
    // tampilkan tombol loading dan hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // setelah tombol sumbit diklik
            // tampilkan tombol kirim dan hilangkan loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // tampilkan alert pesan success 
            myAlert.classList.toggle('d-none');
            // reset form nya
            form.reset();
         })
         .catch(error => console.error('Error!', error.message))
});

forms.addEventListener('keyup', (e) => {

  checkInputs();
  function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pesanValue = pesan.value.trim();


        if(usernameValue === '') {
            setErrorFor(username, 'Name cannot be blank');
        } else {
            setSuccessFor(username);
        }

        if(emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if(!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }

        if(pesanValue === '') {
            setErrorFor(pesan, 'Message cannot be blank');
        } else {
            setSuccessFor(pesan);
        }

        // if(selectValue === 'order desain') {
        //     setErrorFor(select, 'Are you sure? for Order');
        // }
        // if(selectValue === 'bertanya') {
        //     setSuccessFor(select);
        // }
        // if(selectValue === 'oot') {
        //     setSuccessFor(select);
        // }
        // else if(selectValue === 'kosong') {
        //     setErrorFor(select, 'Please choose one subject');
        // } 

        // else {
        //     setSuccessFor(select, 'Yes!');
        // }

    }

    
    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        small.innerText = message;
        formControl.className = 'control-form error';
    }

    function setSuccessFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        small.innerText = message;
        formControl.className = 'control-form success';
    }

    function isEmail(email) {
        return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ .test(email);
    }

});

// const select = document.getElementById('select')

// select.addEventListener

// const selectValue = select.value.trim();