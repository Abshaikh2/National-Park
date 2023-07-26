// jQuery Code
$(document).ready(function() {
    $('.visit').hover(
      function() {
        $('.visit-icon').css({
          "filter": "invert(39%) sepia(99%) saturate(1336%) hue-rotate(87deg) brightness(97%) contrast(91%)"
        });
      },
      function() {
        $('.visit-icon').css({
          "filter": "none"
        });
      }
    );
  
    $('.visit').hover(
      function() {
        $('.visitors').not('.specific-li').css({
          "color": "green"
        });
      },
      function() {
        $('.visitors').not('.specific-li').css({
          "color": ""  
        });
      }
    );
  
    $('.visit').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('#lulu').slideToggle();
    });
  
    $('#lulu').click(function(e){
      e.stopPropagation();
    });
  
    $(document).click(function(){
      if ($('#lulu').is(':visible')) {
        $('#lulu').slideUp();
      }
    });
  
    function toggleMenu() {
      $('.hide-menu-items').slideToggle();
    }
  
    $('.icon-menu').click(function() {
      toggleMenu();
    });
  
    function checkScreenWidth() {
      if ($(window).width() <= 1044) {
        $('.hide-menu-items').hide();
        $('.icon-menu').show();
      } else {
        $('.hide-menu-items').show();
        $('.icon-menu').hide();
      }
    }
  
    checkScreenWidth();
  
    $(window).resize(function() {
      checkScreenWidth();
    });
  });




  
  // JavaScript Code
  function adjustCarouselColumnClass() {
    var screenWidth = $(window).width();
    var carouselCols = $('.carousel-col');
  
    if (screenWidth < 1201) {
      carouselCols.removeClass('col-md-6').addClass('w-100');
    } else {
      carouselCols.removeClass('w-100').addClass('col-md-6');
    }
  }
  
  $(document).ready(function() {
    adjustCarouselColumnClass();
  
    $(window).resize(function() {
      adjustCarouselColumnClass();
    });
  });
  $(document).ready(function() {
    // Redirect to the sign-up page
    $('#signingup').click(function() {
        window.location.href = "Sign-Up.html";
    });

    // Redirect to the home page after form submission
    $('#submitBtn').click(function(e) {
        e.preventDefault(); // Prevent form submission (if you have a form)
        window.location.href = "index.html"; // Assuming index.html is your home page
    });

    $('#submitButn').click(function(e) {
      e.preventDefault(); // Prevent form submission (if you have a form)
      window.location.href = "index.html"; // Assuming index.html is your home page
  });
});

// Your existing JavaScript code and any additional logic for the forms
document.getElementById("singleForm").addEventListener("submit", function (event) {
  event.preventDefault();


  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const ticketType = document.getElementById("ticketType").value;
  const ticketQuantity = parseInt(document.getElementById("ticketQuantity").value, 10);
  const date = document.getElementById("date").value;

  document.getElementById("singleForm").reset();
});


// Your existing JavaScript code

// Event listener for the Family Booking form
document.getElementById("familyForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const familyName = document.getElementById("familyName").value;
  const email = document.getElementById("email").value;
  const ticketType = document.getElementById("ticketType").value;
  const familySize = parseInt(document.getElementById("familySize").value, 10);
  const date = document.getElementById("date").value;

  // Do further processing or validation as needed
  // For example, display a success message or send the booking details to the server

  // Clear form fields after submission
  document.getElementById("familyForm").reset();
});

// Event listener for the Extended Stay form
document.getElementById("extendedStayForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const stayDuration = parseInt(document.getElementById("stayDuration").value, 10);
  const startDate = document.getElementById("startDate").value;


  document.getElementById("extendedStayForm").reset();
});




function toggleText(button) {
  var hiddenText = $(button).prevAll(".redmore").first();
  $(hiddenText).toggle();
  $(button).text(function (i, text) {
    return text === "Read More" ? "Minimize" : "Read More";
  });
}

function toggleAdditionalContent() {
  var additionalContent = $("#additionalContent");
  additionalContent.toggle();

  var loadMoreButton = $("#lomore");
  loadMoreButton.text(function (i, text) {
    return text === "LOAD MORE" ? "HIDE" : "LOAD MORE";
  });
}


let preveiwContainer = document.querySelector('.menu-preview');

let previewBox = preveiwContainer.querySelectorAll('.preview');


document.querySelectorAll('.row .place card').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target')
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active')
    preveiwMenu.style.display = 'none'
  }
})