function urlParam(name){
            var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
            if(results)
                return results[1] || 0;
            else
                return ''; 
        }
 
        if(urlParam('view') == 'full'){ 
        }
        else if(urlParam('view') == 'mobile'){
            // <![CDATA[
            document.location = "http://index.vishnurajeevan.com/intown_mobile/mobile_website_test/";  
            // ]]>
        }
        else if(urlParam('view') == '' ){
            // <![CDATA[
            var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));  
            if (mobile) { 
                    document.location = "http://index.vishnurajeevan.com/intown_mobile/mobile_website_test/";  
            }
            // ]]>
        }
