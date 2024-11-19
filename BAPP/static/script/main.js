// Spinner
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function() {
        const spinner = document.getElementById('loading-spinner');
        
        console.log('Spinner element:', spinner);
        
        setTimeout(function() {
            console.log('Hiding spinner after 4 seconds');
            spinner.style.display = 'none';
        }, 2000); 
    });

//     document.getElementById('menuToggle').addEventListener('click', function() {
//         document.querySelector('.menu-items').classList.toggle('show-menu');
//     });
    
//     // 
//     document.getElementById('menuToggle').addEventListener('click', function() {
//     const menuItems = document.querySelector('.menu-items');
//     if (menuItems.style.display === 'none' || menuItems.style.display === '') {
//         menuItems.style.display = 'flex';
//     } else {
//         menuItems.style.display = 'none';
//     }
// });


//Gallery scroll



    // Works
    const imgBoxes = document.querySelectorAll('.img-box');
    const firstImgBox = document.getElementById('img1');
    let currentExpanded = firstImgBox;

    firstImgBox.classList.add('expanded');
    firstImgBox.classList.add('show-borders');

    imgBoxes.forEach(imgBox => {
        imgBox.addEventListener('click', function () {
            if (imgBox !== currentExpanded) {
                currentExpanded.classList.remove('expanded');
                currentExpanded.classList.remove('show-borders');
                imgBox.classList.add('expanded');
                imgBox.classList.add('show-borders');
                currentExpanded = imgBox;
            }
        });
    });
});

function typeWriter() {
    var i = 0;
    var txt = '!!!';
    var speed = 100;

    function type() {
        if (i < txt.length) {
            document.getElementById("blink").innerHTML += txt.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            i = 0;
            setTimeout(() => {
                document.getElementById("blink").innerHTML = "";
                type();
            }, speed * 10);
        }
    }

    type();
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;

function toggleOverlay(index) {
    var overlays = document.querySelectorAll('.overlay');
    overlays.forEach((overlay, i) => {
        if (i === index) {
            overlay.classList.toggle('show');
        } else {
            overlay.classList.remove('show');
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('load', function() {
        const spinner = document.getElementById('loading-spinner');

        console.log('spinner element:', spinner);

        setTimeout(function() {
            console.log('Hiding spinner after 4 seconds');
            spinner.style.display = 'none';
        }, 4000);
    });
});


// Carousel for Project
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,  // Ensure it loops if you want infinite scrolling
        margin: 10,  // You can set a margin between items if desired
        nav: true,   // Enable navigation if needed
        autoplay: true,  // Enable autoplay
        autoplayTimeout: 5000,  // 3 seconds delay
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    
    function createImageSwitcher(containerId, delay) {
        let currentImageIndex = 0;
        const $images = $(containerId + ' img');
        const totalImages = $images.length;

        function switchImage() {
            $images.removeClass('active color').eq(currentImageIndex).removeClass('active');
            currentImageIndex = (currentImageIndex + 1) % totalImages;
            $images.eq(currentImageIndex).addClass('active');
        }

        let interval = setInterval(switchImage, 2000 + delay);

        $(containerId).hover(
            function() {
                clearInterval(interval);
                $images.eq(currentImageIndex).addClass('color');
            },
            function() {
                interval = setInterval(switchImage, 1000 + delay);
                $images.removeClass('color');
            }
        );
    }

    createImageSwitcher('#imageContainer1', 0);
    createImageSwitcher('#imageContainer2', 500);
    createImageSwitcher('#imageContainer3', 500);
    createImageSwitcher('#imageContainer4', 500);
    createImageSwitcher('#imageContainer5', 500);
    createImageSwitcher('#imageContainer6', 500); 
            
}); 

// Navbar-sm
$(document).ready(function() {
    $('.toggle-btn').on('click', function() {
        $('.nav-menu-sm').addClass('active');
    });

    $('.close-btn').on('click', function() {
        $('.nav-menu-sm').removeClass('active');
    });
});

$(document).ready(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please enter a subject"
            },
            message: {
                required: "Please enter a message",
                minlength: "Your message must be at least 10 characters long"
            }
        },
        
    });

    $('#contactForm-sm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            Number: {
                required: "Please enter a subject"
            },
            message: {
                required: "Please enter a message",
                minlength: "Your message must be at least 10 characters long"
            }
        },
    });

    $('#backButton').click(function() {
        window.history.back();
    });
});
// Sound onclick
document.querySelectorAll('.soundButton').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent immediate navigation
        var sound = document.getElementById('clickSound');
        
        if (sound) {
            sound.play(); // Play the sound
        }
        
        // Wait for a short time before navigating (e.g., 300ms)
        setTimeout(function() {
            window.location.href = button.href; // Navigate to the link
        }, 650);
    });
});


//project corousel




