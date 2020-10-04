/***
 * @Aurthur  : Umar Abdulrahim 
 * @Filename : Search.js
 * @Desc     : its a jquery search plugin
 *
 * @free to use, just plug and play
 */





      var row = $('table tr');
          $('.search-form').keyup(function(){
              
              var value = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
              row.show().filter(function(){
                  
                  var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                  return !~text.indexOf(value);
                  
              }).hide();
          });
        
  


