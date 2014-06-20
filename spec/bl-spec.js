describe("businessLogic", function () {

  describe("checkMyRes", function () {
    it('returns true if the the person has a reserveration, false otherwise', function() {
      var result = bl.checkMyRes('Billy');
      expect(result).toEqual(true);
    }); 
  });

 

});