// Code goes here

(function($, window, document) {
  $.fn.lightbox = function(options){
    
    function showDialog(){
      
      var $overlay = $("<div class='lightbox-overlay'></div>");
      var $container = $("<div class='lightbox-container'></div>");
      var $header = $("<div class='lightbox-header'><span class='lightbox-header-text'>" + options.header + "</span><button type='button' class='lightbox-control'>X</button></div>");
      var $content = $("<div class='lightbox-content'>" + options.content + "</div>");
      
      $('body').append($overlay);
      $('body').append($container);
      $container.css('background-color', 'red');
      $container.append($header);
      $container.append($content);
      
      // close listener
      $header.find('button').on('click', function(){
        $('body').find('div.lightbox-overlay').remove();
        $('body').find('div.lightbox-container').remove();
      });
    }
    
    $(this).on('click', function(){
      showDialog();
    });
    
    
  };

})(jQuery, window, document);