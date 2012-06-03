/*
 * 
 * Copyright (c) 2012 Aderemi Dadepo
 * @license: Dual licensed under the MIT and GPL licenses.
 * @version: 0.0.1
 * http://geekabyte.blogspot.com
 */
(function($) {
  $.fn.maxlen = function(options) {
  
    // Create some defaults, extending them with any options that were provided
    var settings = $.extend({
      'limit' : 160,
      'order' : 'desc',
      'class' : 'maxlen_class',
      'position' : 'above'
    }, options);
    
    
    //get content of textarea;
    return this.each(function()
                     {
                        
                        
                        if (this.tagName != 'TEXTAREA' || $(this).attr('type') != 'text')
                        {
                            //because the plugin is meant for TEXTAREA and INPUT only
                            return true;
                        }
                        
                        //fisrt of all overide whatever limit that has been set via html
                        
                        $(this).attr('maxlength',settings.limit);
                        
                        
                        var len = $(this).val().trim().replace(/<br\s?\/?>/, '').length; //get the length of default content and remove padding
                        
    if (len >= settings.limit)
    {
        //make sure the content is trimmed to the limit that is specified
        //get content
        
        
        var content = $(this).val();
        content = content.substring(0,(settings.limit))
        $(this).val(content);
        
        if(settings.order == 'desc')
        {
            len = 0;
            
        }
        else
        {
        len  = settings.limit;
        }
        
        
        
        
        if (settings.position == 'above')
        {
            $(this).before("<p class='"+settings.class+" limit'>"+len+"</p>");
        }
        else if (settings.position == 'below')
        {
        $(this).after("<p class='"+settings.class+" limit'>"+len+"</p>");
        }
    }
    else
    {
        
        if(settings.order == 'desc')
        {
            len = settings.limit - len;
            
        }
        else
        {
        len  = len;
        }
        
        
        if (settings.position == 'above')
        {
            $(this).before("<p>"+len+"</p>");
        }
        else if(settings.position == 'below')
        {
        $(this).after("<p>"+len+"</p>");
        }
    }
    
    $(this).attr('maxlength',settings.limit);
    
    //on keyup check if the content is not over the limit
    $(this).keyup(function()
               {
                var changing_content = $(this).val();
                
                var rem_content = settings.limit - $(this).val().length;
                var len_content = $(this).val().length;
                
                
                 //check if the limit is not exceded
                 if (len_content == settings.limit)
                 {
                        if(settings.order == 'desc')
                            {
                                if (settings.position == 'above')
                                {
                                    $(this).prev().replaceWith("<p class='"+settings.class+" limit'>"+rem_content+"</p>");
                                }
                                else if (settings.position == 'below')
                                {
                                 $(this).next().replaceWith("<p class='"+settings.class+" limit'>"+rem_content+"</p>");
                                }
                            }
                        else
                            {
                                if (settings.position == 'above')
                                {
                                    $(this).prev().replaceWith("<p class='"+settings.class+" limit'>"+settings.limit+"</p>");
                                }
                                else if (settings.position == 'below')
                                {
                                $(this).next().replaceWith("<p class='"+settings.class+" limit'>"+settings.limit+"</p>");
                                }
                            }
                 }
                 else
                 {
                    if(settings.order == 'desc')
                        {
                            if (settings.position == 'above')
                                {
                                    $(this).prev().replaceWith("<p>"+rem_content+"</p>");
                                }
                                else if (settings.position == 'below')
                                {
                                $(this).next().replaceWith("<p>"+rem_content+"</p>");
                                }
                        }
                        else
                        {
                            if (settings.position == 'above')
                                {
                                    $(this).prev().replaceWith("<p>"+len_content+"</p>");
                                }
                            else if (settings.position == 'below')
                                {
                                $(this).next().replaceWith("<p>"+len_content+"</p>");
                                }
                        }
                 }
               });
    
    
    
                        
                    }
                     );
    
    
            
            
            

  };
})( jQuery );