module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('fd', function(date){
      date = new Date(date);
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      var result = '' + y + '/' + (m <= 9 ? '0' + m : m) + '/' + (d <= 9 ? '0' + d : d);

      return new Handlebars.SafeString(result);
    });
    
    Handlebars.registerHelper('if_even', function(conditional, options) {
        if((conditional != 0) && (conditional % 5) == 0) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
};
