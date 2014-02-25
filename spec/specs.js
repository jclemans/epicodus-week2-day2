describe('Contact', function() {
  describe('fullName', function() {
      it('will ouput the first and last name with a space in between', function() {
        var testContact = Object.create(Contact);
        testContact.firstName = 'Steve';
        testContact.lastName = 'Irwin'
        testContact.fullName().should.equal('Steve Irwin');
      });
  });
});

describe("Address", function() {
  describe("fullAddress", function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "208 SW 5th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("208 SW 5th Ave, Portland, Oregon");
    });
  });

  describe("validCheck", function() {
    it("returns a boolean indicating if the entered information is valid", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "";
      testAddress.city = "";
      testAddress.state = "";
      testAddress.validCheck().should.equal(false);
    });

    it("returns a boolean indicating if the entered information is valid", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123";
      testAddress.city = "portland";
      testAddress.state = "or";
      testAddress.validCheck().should.equal(true);
    });
  });



});

describe("Phone", function() {
  describe("phoneNumber", function() {
    it("returns the phone number entered with nice formatting", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "5032569874";
      testPhone.phoneNumber().should.equal("5032569874");
    });
  });
  describe("validCheck", function() {
    it("returns a boolean indicating if the entered information is valid", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = " ";
      testPhone.validCheck().should.equal(false);
    });
    it("return false if the number entered is not a valid 9 digit number", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "12345";
      testPhone.validCheck().should.equal(false);
    });
  });
});



