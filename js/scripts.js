var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  validCheck: function() {
    if (this.firstName === "" || this.lastName === ""){
      return false;
    } else {
      return true;
    }
  }
};

var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  },
  validCheck: function() {
    if (this.street === "" || this.city === "" || this.state === "") {
      return false;
    } else {
      return true;
    }
  }
};

var Phone = {
  phoneNumber: function() {
    return this.number;
  },
  validCheck: function() {
   if (this.number.length < 9) {
      return false;
    } else {
      return true;
    }
  }
};


$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.addresses = [];
    newContact.phones = [];

    if (newContact.validCheck()) {
      $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span></li>');
    } else {
      alert("Please enter a valid name.")
    };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find('input.new-street').val();
      var inputtedCity = $(this).find('input.new-city').val();
      var inputtedState = $(this).find('input.new-state').val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      console.log(newAddress.validCheck());
      console.log(newAddress.street);

      if (newAddress.validCheck()) {
        newContact.addresses.push(newAddress);   
      } else {
        alert("Invalid Address.");
      }

    });

    $(".new-phone").each(function() {
      var inputtedNumber = $(this).find('input.new-number').val();

      var newPhoneNumber = Object.create(Phone);
      newPhoneNumber.number = inputtedNumber;

      if (newPhoneNumber.validCheck()) {
        newContact.phones.push(newPhoneNumber);
      } else {
        alert("Invalid Phone Number.  Use 9 digit format.");
      }

    });



    $('.contact').last().click(function() {
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.fullName());
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);

      $("ul#addresses").text("");
      $("ul#phone-numbers").text("");
      
      newContact.phones.forEach(function(phone) {
        $('ul#phone-numbers').append("<li>" + phone.phoneNumber() + "</li>");
      });

      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append("<li>" + address.fullAddress() + "</li>");

      });
    });

    this.reset();

  });

$("#add-phone").click(function() {
  $("#new-phones").append('<div class="new-phone">' +
                            '<div class="form-group">' +
                              '<label for="new-phone-number">Phone Number</label>' +
                              '<input type="text" class="form-control new-number">' +
                            '</div>' +
                          '</div>');
});

$("#add-address").click(function() {
  $("#new-addresses").append('<div class="new-address">' + 
                               '<div class="form-group">' + 
                                 '<label for="new-street">Street</label>' + 
                                 '<input type="text" class="form-control new-street">' + 
                               '</div>' + 
                               '<div class="form-group">' + 
                                 '<label for="new-city">City</label>' + 
                                 '<input type="text" class="form-control new-city">' + 
                               '</div>' + 
                               '<div class="form-group">' + 
                                 '<label for="new-state">State</label>' + 
                                 '<input type="text" class="form-control new-state">' + 
                               '</div>' + 
                             '</div>');
});
  
})

