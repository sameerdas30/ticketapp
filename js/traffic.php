<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Ticket Filer Mobile App Store</title> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content='True' name='HandheldFriendly' />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="viewport" content="target-densitydpi=device-dpi" />
    <meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
     <meta name="application-name" content="Ticketfiler.com"/>
<meta name="msapplication-TileColor" content="#d84949"/>
<meta name="msapplication-square70x70logo" content="tiny.png"/>
<meta name="msapplication-square150x150logo" content="square.png"/>
<meta name="msapplication-wide310x150logo" content="wide.png"/>
<meta name="msapplication-square310x310logo" content="large.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" href="images/apple-touch-icon-57x57.png">
    <link rel="apple-touch-startup-image" href="images/splash-startup.png">
    <!-- Custom CSS -->  
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/mobiscroll.custom-2.5.0.min.css" rel="stylesheet" type="text/css" />
    <!-- Latest Mobile CSS --> 
	<link href="css/jquery.mobile-1.3.2.min.css" rel="stylesheet" type="text/css">
    <!-- Fonts CSS --> 
	<link href="font/fonts.css" rel="stylesheet" type="text/css">
    <!-- Latest Jquery --> 
    <script src="js/jquery.js"></script>
  
       <script src="js/jquery.mobile-1.3.2.min.js"></script>
     <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
     
     <script src="js/mobiscroll.custom-2.5.0.min.js" type="text/javascript"></script>
    
     <script type="text/javascript">
	 function getPageName(url) {
    var currurl = window.location.pathname;
    var index = currurl.lastIndexOf("/") + 1;
    var filenameWithExtension = currurl.substr(index);
    var filename = filenameWithExtension.split(".")[0]; // <-- added this line
    return filename;                                    // <-- added this line
}
     jQuery(document).ready(function(){	
	var pname=getPageName(window.location);
	if(pname=='faq')
	{
		jQuery('#faq').addClass('ui-btn-active');

	}
	else if(pname=='legal')
	{
		jQuery('#legal').addClass('ui-btn-active');
	}
	else
	{
		jQuery('#fileticket').addClass('ui-btn-active');	
	}
});
</script>
<script>
  window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : '422443441198616',                        // App ID from the app dashboard
      channelUrl : 'http://wordpress-guru.net/channel.php', // Channel file for x-domain comms
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here
  };

  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   function shareOnFacebook() {
   FB.ui(
  {
    method: 'feed',
    name: 'Finally, it is now easier to fight your ticket than it is to pay it.',
    link: 'http://wordpress-guru.net/ticket/m',
    picture: 'images/screen.png',
    caption: 'Finally, it is now easier to fight your ticket than it is to pay it.',
    description: 'Finally, it is now easier to fight your ticket than it is to pay it.'
  },
  function(response) {
    if (response && response.post_id) {
	  console.log(response);
	  window.navigate('thankyou.php?social=Facebook&rid='+response.post_id);

    } else {
      alert('Sorry try again we are unable to authenticate.');
    }
  }
);
   }
   function tws_closed() {
	      // stub function, override this
		document.location.href="thankyou.php?social=Twitter&rid=success";
	    }

	    function tws_click(url, title) {
	      
	      url = encodeURIComponent('http://wordpress-guru.net/ticket/m');
	      title =  encodeURIComponent('Ticketapp');
	      var width = 700;
	      var height = 500;
	      var shareurl = "https://twitter.com/share?text="+title+"&count=none&counturl="+url+"&url="+url
	      var win = window.open(shareurl, 'sharer', 'toolbar=0,status=0,width='+width+',height='+height);
	      var tws_closed_checks = 0;
	      var timer = setInterval(function() {   
	        if (win.closed || tws_closed_checks++ >= 150) {  
	          clearInterval(timer);  
	          tws_closed();
	        }
	      }, 500);
	      
	      return false;
	    }
</script>
<script type="text/javascript">

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
var idofparking = getUrlVars()["id"];
$(document).ready(function () { 
    $('#id').val(idofparking);
	$("a#ref_mail_traffic").on('click', function(){
     window.location = "ref_mail_traffic.html?id="+idofparking+"&t_type=traffic";    
});
})
</script>

</head> 
<body> 
<div data-role="page"  data-theme="b">
	<div data-role="header" align="left">   
       <a  data-rel="back" data-role="button" data-icon="back" data-direction="reverse" data-theme="b" data-iconpos="notext"></a>
	<div class="header_content_ticket_div" align="center">
    <a href="home.html"><img src="images/logo.jpg" width="170" height="32" alt=""></a>
     </div> 
      <a href="home.html" data-role="button" data-icon="home" data-iconpos="notext" data-theme="b"></a>
    <div class="header_div"> 
    <div data-role="navbar">
		<ul id="tigg">
			<li><a href="home.html" id="fileticket" rel="external">File ticket</a></li>
			<li><a href="legal.html" id="legal" rel="external">Legal</a></li>
			<li><a href="faq.html" id="faq" rel="external">FAQ</a></li>
		</ul>
	</div><!-- /navbar -->
    </div>
    </div><!-- /header -->
    <script>
	//step wise validation starts
	 $(document).ready(function(){
  var prevLink = '<a class="prev" href="#" data-role="button" data-corners="true" data-shadow="true" data-wrapperels="span" data-inline="true"   data-theme="b" >Back</a>';
        var nextLink = '</a><a class="next" href="#" data-role="button"  data-corners="true" id="default" data-wrapperels="span" data-theme="b" >Next</a>';
        var navHTML = '<div class="prev-next">' +
                        
                         nextLink +
                      '</div>';
		$(function(){
            // init
            $('#register3 > div')
                .hide()
                .append(navHTML).trigger('create');
            $('#eleven-step .prev').remove();
            $('#last-step .next').remove();
 
            // show eleven step
            $('#eleven-step').show();
			//$('option:selected', 'select#PUT').removeAttr('selected').next('option').attr('selected', 'selected');
			
 
            $('a.next').click(function(){
			
                var whichStep = $(this).parent().parent().attr('id');

							if( whichStep == 'eleven-step' )
							{
								var form=register3;
								if ( ( form.paralegal[0].checked == false ) && ( form.paralegal[1].checked == false ) ) 
								{
									$('#checkbox_value_3').parent().parent().addClass('warning');
									$('#checkbox_value_4').parent().parent().addClass('warning');
									return false;
								}
								else if ($('#checkbox_value_3').is(':checked'))
								{
									
									
								if($('#t_language').val()=='')
								{
									$('#t_language').parent().addClass('warning');
									$('#t_language').focus();
										return false;	
								}
								else 
								{
									$('#t_language').parent().removeClass('warning');
										
								}
								if (!$("#t_checkbox_value_1").is(":checked")) 
								{
										/*alert('Please Check The Checkbox for further proceed');*/
									$('#t_checkbox_value_1').parent().addClass('warning');
									$('#t_checkbox_value_1').focus();
									return false;
								}
								else
								{
								    $('#t_checkbox_value_1').parent().removeClass('warning');
										
								}	
								}
else
{
		$('#checkbox_value_3').parent().removeClass('warning');
		$('#checkbox_value_4').parent().removeClass('warning');
}

	

								
								
		$(".para").each(function(){
			alert("hi");
		$('#lang').hide(); 
	      $(this).change(function(){ 
		 var asdf= $(this).val();
		 alert(asdf);
		  if($(this).val()=='Y')
		  {
			 $('#lang').show();
		  }
		  else
		  {
			   $('#lang').hide();
		  }
		  
		  
		  });
          });
							
	} 
							
							else if( whichStep == 'last-step' )
							{
							  
							}
							$(this).parent().parent().hide().next().trigger('create').show();
            		});
 
					$('a.prev').click(function(){
						$(this).parent().parent().hide().prev().trigger('create').show();
					});
        		});
				});
				
</script>
<script>
$(document).ready(function () {

});
</script>

    <!--step11 starts-->
<form name="register3" id="register3" enctype="multipart/form-data" method="post" action=""  >
<!--step12 starts-->
<div id="eleven-step">
<div data-role="content">
<div class="header_text_top_div"><h1>Free Paralegal 
Consultaion</h1>
<h3>Would you like a Free 
Consultation with a Licenced
Paralegal?</h3>
 </div>
 
<div class="check_box_div" >	
        <fieldset data-role="controlgroup" class="checkboxWidth">
<input type="radio" name="paralegal" value="Y" class="para" id="checkbox_value_3" data-iconpos="notext" data-theme="c"  />
 <label for="checkbox_value_3" data="test"></label>
 </fieldset>
       
         <div class="checkboxright_width">Yes please!</div>
         </div>
<div class="check_box_div" >	
       <fieldset data-role="controlgroup" class="checkboxWidth">
<input type="radio" name="paralegal" id="checkbox_value_4" onChange="" class="para" value="N" data-iconpos="notext" data-theme="c"  />
 <label for="checkbox_value_4" data="test"></label>
 </fieldset>
       
         <div class="checkboxright_width">No, thank you.</div> 
  </div>
<div id="lang">
  
  <h1>TRIAL lANGUAGE</h1>
  <h2>What language would you like your trial to be held in?</h2>
  
  <select name="t_language" id="t_language" data-theme="c">
    <option value="">LANGUAGE</option>	
    <option value="English">English Language</option>
    <option value="French">French Language</option>
    </select> 
  
  <p>If you would like to request an interpreter for 
    your trial please check the box below.</p>
  
  
  <div class="content_inner_div">
    <div class="check_box_div">	
  <fieldset data-role="controlgroup" class="checkboxWidth">
  <input type="checkbox" name="t_checkbox_value_1" id="t_checkbox_value_1" data-iconpos="notext" data-theme="c" />
    <label for="t_checkbox_value_1" data="test"></label>
    </fieldset>
      <div class="checkboxright_width">Request {selected above} interpreter </div>
      
      </div> 
    
    </div> 
</div>
         
          
 <p>
If you would like, we can have a licenced paralegal 
contact you about your case and go over your options.
You are under no obligation to hire them.</p>
</div>
</div>


  <!--step11 completed--> 

      
   
   <!--last step starts-->
 <div id="last-step">
  <div data-role="content">

<div class="header_text_top_div"><h1>12 Checkout</h1></div>

<div class="content_inner_div">
 <p align="center"><a href="#" onclick="shareOnFacebook();"><img src="images/face_book_button.jpg" width="290" height="47" alt=""> </a></p>
    <p align="center"><a href="#" onClick="tws_click('http://wordpress-guru.net/ticket','Finally, it is now easier to fight your ticket than it is to pay it.')"><img src="images/tweet_button.jpg" width="290" height="47" alt=""> </a></p>
    <p align="center"><a id="ref_mail_traffic" href="" rel="external"><img src="images/email_share.png" width="290" height="47" alt=""> </a></p>

</div>
      
   </div>
        <input type="hidden" name="id" id="id" value="" />
        <input type="hidden" name="t_type" id="t_type" value="traffic" /><!--Ticket Type-->
        <input type="hidden" name="s_type" id="s_type" value="mobile" /><!--Site Type--> 
        
	</div>    
    </form>
     <!--last step completed-->  
</div>
