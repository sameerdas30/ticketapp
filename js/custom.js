  var prevLink = '<a class="prev back_bt" href="#" data-corners="true" id="default"  data-wrapperels="span"  data-shadow="true"  data-theme="b" data-corners="true">Back</a>';
        var nextLink = '<a class="next next_bt" href="#" data-corners="true" id="default" data-shadow="true" data-wrapperels="span" data-theme="b" data-corners="true">Next</a>';
        var navHTML = '<div class="prev-next">' +
                         nextLink +
                         prevLink +
                      '</div>';
					  
					  $(function(){

            // init
            $('#register > div')
                .hide()
                .append(navHTML).trigger('create');
            /*$('#first-step .prev').remove();*/
            $('#ten-step .next').remove();
 
            // show first step
            $('#first-step').show();
			//$('option:selected', 'select#PUT').removeAttr('selected').next('option').attr('selected', 'selected');
			
            jQuery(document).ready(function(){
            jQuery('a.next').click(function(){
				

                var whichStep = $(this).parent().parent().attr('id');
				
							if( whichStep == 'first-step' )
							{
								 
								// validate first-step
								if (!jQuery("#checkbox_value_0").is(":checked")) 
									{	
									    /*alert('Please Check The Checkbox for further proceed');*/
										jQuery.alerts.dialogClass = 'alert-danger';
									jAlert('Please Check The Checkbox for further proceed', 'error', function(){
                          		    jQuery.alerts.dialogClass = null; // reset to default
                                    });															
										jQuery(this).parent().parent().parent().find('label').addClass('warning');
										jQuery('#checkbox_value_0').focus();
										return false;
									}	
								else
									{
										jQuery(this).parent().parent().parent().find('label').removeClass('warning');
										
									}	
								
							} 
						   
							else if( whichStep == 'second-step' )
							{
																	 
								var tsel = document.getElementById('p_city');
								 var tsv = tsel.options[tsel.selectedIndex].value;
								  if(tsv == '')
									{ 
									     jQuery.alerts.dialogClass = 'alert-danger';
									jAlert('Select City', 'error', function(){
                          		    jQuery.alerts.dialogClass = null; // reset to default
                                    });
											jQuery('#p_city').css("border","black solid 2px");
											/*$('#p_city').parent().css('height','32px');
											$('#p_city').parent().css('margin-top','3px');*/
											
																		
											return false;
										
									}
									else
									{
											jQuery('#p_city').css("border","none");
										
									}	
					
					
							}
							
							else if( whichStep == 'third-step' )
							{
								
	                            
							
		                        if(jQuery('#pDateTime').val()=='')
									{   
									    /*alert('Select Date');*/
										jQuery('#pDateTime').css("border","black solid 2px");
										jQuery('#pDateTime').parent().focus();
										return false;
									}
								else
									{
											jQuery('#pDateTime').css("border","none");
										
									}
	                            
                              
								
							}
							
							else if(whichStep == 'fourth-step' )
							{
								
								if(jQuery('#Ticket_no').val().match(/^[A-Z][A-Z][0-9]{6}$/i) || jQuery('#Ticket_no').val().match(/^[0-9]{8}$/i))
								{
			
									jQuery('#Ticket_no').css("border","none");/*alert('Enter Your Ticket Number');*/
			
								}
								else
									{
										jQuery.alerts.dialogClass = 'alert-danger';
										jAlert('Enter Valid Ticket No', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#Ticket_no').focus();
										jQuery('#Ticket_no').css("border","black solid 2px");
											
                                        });
										return false;
										
																			
									}
								
							}
							else if(whichStep == 'fourth-step-license')
							{
								
									 /*if($('#license_no').val().match(/^(?=.*?[a-z])(?=.*?\d)(?=.*?[- ])/i) || $('#license_no').val().match(/^[0-9]{8}$/i) )*/
									 if(!jQuery('#license_no').val()=='')
									
		                            {
									jQuery('#license_no').css("border","none");
										
								    }
								else 
								{
									jQuery.alerts.dialogClass = 'alert-danger';
			                            jAlert('Enter Valid Plate License No', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#license_no').css("border","black solid 2px");
										
										jQuery('#license_no').focus();
										
                                        });
									return false;
									
								}
							
							
							}
							
							else if(whichStep == 'fourth-step-para')
							{
								
								 if(jQuery('#p_checkbox_value_3').prop('checked') == true || jQuery('#p_checkbox_value_4').prop('checked') == true)
								{
								jQuery('#p_checkbox_value_4').parent().parent().find('label').removeClass('warning');
								jQuery('#p_checkbox_value_3').parent().parent().find('label').removeClass('warning');	
								}
								 else
								 {
									  jQuery.alerts.dialogClass = 'alert-danger';
			                            jAlert('Please Check Vehicle Type', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
                                        });
									 console.log(jQuery('#p_checkbox_value_3').is(':checked'));
										jQuery('#p_checkbox_value_4').parent().parent().find('label').addClass('warning');
										jQuery('#p_checkbox_value_3').parent().parent().find('label').addClass('warning');
										return false;
								 }
	
									if (jQuery('#p_checkbox_value_4').is(':checked'))
									{
								
										if(jQuery('#p_company_name').val()=='')
										{
											jQuery.alerts.dialogClass = 'alert-danger';
									jAlert('Enter Company Name', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_company_name').css("border","black solid 2px");
											jQuery('#p_company_name').focus();
												
                                        });
										return false;		
										}
										else 
										{
											jQuery('#p_company_name').css("border","none");
												
										}
									}
									
							}
							else if( whichStep == 'fifth-step' )
							{
								if(jQuery('#p_owner_fst_name').val()=='')
									{
										jQuery.alerts.dialogClass = 'alert-danger';
										jAlert('Enter Your First Name', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_fst_name').css("border","black solid 2px");
										jQuery('#p_owner_fst_name').focus();
										
                                        });
										return false;
										
									}
									else
									{
											jQuery('#p_owner_fst_name').css("border","none");
										
									}
									
									if(jQuery('#p_owner_lst_name').val()=='')
									{
										/*alert('Enter Your Last Name');*/
										jQuery.alerts.dialogClass = 'alert-danger';
										jAlert('Enter Your Last Name', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_lst_name').css("border","black solid 2px");
										jQuery('#p_owner_lst_name').focus();
										
                                        });
										return false;
									}
									else
									{
											jQuery('#p_owner_lst_name').css("border","none");
										
									}

									function emailInvalid(s)
									{
										if(!(s.match(/^[\w]+([_|\.-][\w]{1,})*@[\w]{2,}([_|\.-][\w]{1,})*\.([a-z]{2,4})$/i) ))
											{
											return false;
											}
										else
											return true;
									} 
                
							}
					
							else if( whichStep == 'six-step' )
							{
								
								
								if(jQuery('#Street_add').val()=='')
								{
									jQuery.alerts.dialogClass = 'alert-danger';
									jAlert('Enter Street Address', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#Street_add').css("border","black solid 2px");
									jQuery('#Street_add').focus();
									
                                        });
									return false;
								}
								else
								{
									jQuery('#Street_add').css("border","none");
									
								}
		                        if(jQuery('#p_owner_city').val()=='')
									{
										jQuery.alerts.dialogClass = 'alert-danger';
											jAlert('Enter City', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_city').css("border","black solid 2px");
											jQuery('#p_owner_city').focus();
											
                                        });
										return false;	
										
									}
									else
									{
										jQuery('#p_owner_city').css("border","none");
										
									}
								 var sel2 = document.getElementById('p_owner_province');
								 var sv2 = sel2.options[sel2.selectedIndex].value;
								  if(sv2 == '')
									{
										jQuery.alerts.dialogClass = 'alert-danger';
											jAlert('Select Province', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_province').css("border","black solid 2px");
										
											
                                        });
										return false;	
										
									}
									else
									{
										jQuery('#p_owner_province').css("border","none");
										
									}
								
									 
								/*if($('#Zip_code').val().match(/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/) || $('#Zip_code').val().match(/^([abceghjklmnprstvxy]\d[abceghjklmnprstvwxyz])\ {0,1}(\d[abceghjklmnprstvwxyz]\d)$/) )
									{
									$('#Zip_code').parent().removeClass('warning');	
										
									}
									else
									{
										alert('Enter Valid Zipcode');
										$('#Zip_code').parent().addClass('warning');
									$('#Zip_code').focus();
									return false;
									}*/
									if(jQuery('#Zip_code').val()=='')
									{
										jQuery.alerts.dialogClass = 'alert-danger';
								   jAlert('Enter Zipcode', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#Zip_code').css("border","black solid 2px");
								    jQuery('#Zip_code').focus();
								    
                                        });
									return false;
										
									}
									else
									{
										jQuery('#Zip_code').css("border","none");
										
									}
							}
								else if( whichStep == 'email-step' )
							{
								
									if(jQuery('#p_owner_email').val()=="")
									{
										jQuery.alerts.dialogClass = 'alert-danger';
										jAlert('Enter Your Email', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_email').css("border","black solid 2px");
										jQuery('#p_owner_email').focus();
										
                                        });
										return false;
									}
									
									else 
									{
										if(!emailInvalid(jQuery('#p_owner_email').val()))
										{
											jQuery.alerts.dialogClass = 'alert-danger';
											jAlert('Please Enter Valid Email Address', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_email').css("border","black solid 2px");
											jQuery('#p_owner_email').focus();
											
                                        });
										return false;	
										}
										else
										{
											jQuery('#p_owner_email').css("border","none");
											
										}
									}
									function emailInvalid(s)
									{
										if(!(s.match(/^[\w]+([_|\.-][\w]{1,})*@[\w]{2,}([_|\.-][\w]{1,})*\.([a-z]{2,4})$/i) ))
											{
											return false;
											}
										else
											return true;
									} 
                
							}
							else if( whichStep == 'seven-step' )
							{
								if(jQuery('#p_owner_phno').val()=='' )
								{
									jQuery.alerts.dialogClass = 'alert-danger';
									jAlert('Enter Your Contact Number', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_phno').css("border","black solid 2px");
									jQuery('#p_owner_phno').focus();
									
                                        });
									return false;
								}
								else if(!jQuery("#p_owner_phno").val().match(/^\(\d{3}\) \d{3}\-\d{4}( x\d{1,6})?$/))
								{
									jQuery.alerts.dialogClass = 'alert-danger';
									jAlert('Enter Valid Contact Number', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_owner_phno').css("border","black solid 2px");
									jQuery('#p_owner_phno').focus();
									
                                        });
									return false;
								}
								
								else
									{
										jQuery('#p_owner_phno').css("border","black solid 2px");
										
									}
							}
						else if( whichStep == 'eight-step')
							{
								if(jQuery('#p_language').val()=='')
									{
										jQuery.alerts.dialogClass = 'alert-danger';
										jAlert('Select Language', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
										jQuery('#p_language').css("border","black solid 2px");
											
                                        });
											
											
											return false;
										
									}
									else
									{
										jQuery('#p_language').css("border","black solid 2px");
										
									}
								var langid = $("#p_language").children(":selected").attr("id");
								if($(langid)=='N') {
							 $("#checkbox_value_1").attr('checked','checked');
								} else {
									if (!jQuery("#checkbox_value_1").is(":checked")) 
								{
									jQuery.alerts.dialogClass = 'alert-danger';
									jAlert('Please Check The Checkbox for further proceed', 'error', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
                                        });	
									jQuery('#checkbox_value_1').parent().find('label').addClass('warning');
								
									jQuery('#checkbox_value_1').focus();
									
									return false;
								}
								else
								{
								    jQuery('#checkbox_value_1').parent().find('label').removeClass('warning');
										
								}
								
								}
							
			if (jQuery('#p_checkbox_value_4').is(':checked'))
			{
				
			var notice_no = $('#Ticket_no').val();
			var license_no = $('#license_no').val();
			var date_of = $('#pDateTime').val();					
			var fname = $('#p_owner_fst_name').val();
			var city1 = $('#p_city').val();
			var cname = $('#p_company_name').val();
			var lname=$('#p_owner_lst_name').val();
			var mail=$('#p_owner_email').val();
			var language = $('#p_language').val();		
			var streetadd=$('#Street_add').val();
			var city=$('#p_owner_city').val();
			var province=$('#p_owner_province option:selected').text();  
		    var zipcode=$('#Zip_code').val();
			var phn=$('#p_owner_phno').val();
			
			
			
//show the confirmation notice values 
			<!-- $("#city11").css('background','#ff9999');-->
			$("#p_owner_fst_name1").val(fname+" "+lname);
			 <!--$("#p_owner_lst_name1").val(lname);-->
			 $("#p_owner_email_one").val(mail);
		     <!--$('#p_language1 option[value=' + language + ']').attr('selected', true);-->
			 $("#p_language11 option").remove();
		     $("#p_language11").append($('<option>', { 
		     value: language,
		     text : language 
		     }));
			 $("#Street_add1").val(streetadd);
			 $("#p_owner_province1 option").remove();
			  $("#p_owner_province1").append($('<option>', { 
		     value: province,
		     text : province 
		     }));
			$("#p_owner_city1").val(city);
			$("#city11 option").remove();
		    $("#city11").append($('<option>', { 
		value: city1,
		text : city1 
		}));
			<!-- $("#p_owner_city1").selectmenu('refresh');-->
			 $("#Zip_code1").val(zipcode);
			 $("#p_owner_phno1").val(phn);
			 $("#p_fname").val(fname);
			 $('#comp_hide').show();
			  $("#cm_name").val(cname);
			$("#p_fname").html(fname);
			 $("#p_lname").html(lname);
			 $("#date_of_infraction").val(date_of);
			 $("#notice_no").val(notice_no);
			 $("#license_no_of_ticket").val(license_no);
			 		
								
							} else if ($('#p_checkbox_value_3').is(':checked')){ 
									var notice_no = $('#Ticket_no').val();
			var license_no = $('#license_no').val();
			var city1 = $('#p_city').val();
			var date_of = $('#pDateTime').val();					
			var fname = $('#p_owner_fst_name').val();
			var lname=$('#p_owner_lst_name').val();
			var mail=$('#p_owner_email').val();
			var language = $('#p_language').val();		
            var streetadd=$('#Street_add').val();
			var city=$('#p_owner_city').val();
			var province=$('#p_owner_province option:selected').text(); 
		    var zipcode=$('#Zip_code').val();
			var phn=$('#p_owner_phno').val();
			
			
			
//show the confirmation notice values 
            <!-- $("#city11").css('background','#ff9999')-->		 
			$("#p_owner_fst_name1").val(fname+" "+lname);
			/* $("#p_owner_lst_name1").val(lname);*/
			 $("#p_owner_email_one").val(mail);
		     <!--$('#p_language1 option[value=' + language + ']').attr('selected', true);-->
		      $("#p_language11 option").remove();
			 $("#p_language11").append($('<option>', { 
		     value: language,
		     text : language 
		     }));
			  $("#Street_add1").val(streetadd);
			   $("#p_owner_province1 option").remove();
			  $("#p_owner_province1").append($('<option>', { 
		     value: province,
		     text : province 
		     }));
			$("#p_owner_city1").val(city);
			 $("#city11 option").remove();
		     $("#city11").append($('<option>', { 
		     value: city1,
		     text : city1 
		     }));
			<!-- $("#p_owner_city1").selectmenu('refresh');-->
			 $("#Zip_code1").val(zipcode);
			 $("#p_owner_phno1").val(phn);
			 $("#p_fname").val(fname);
			  $("#cm_name").val(cname);
			$('#comp_hide').hide();
			$("#p_fname").html(fname);
			 $("#p_lname").html(lname);
			 $("#date_of_infraction").val(date_of);
			 $("#notice_no").val(notice_no);
			 $("#license_no_of_ticket").val(license_no);
			 		
								
							} }
							
							
							if( whichStep == 'nine-step' )
							{
								if (!jQuery("#checkbox_value_2").is(":checked")) 
									{
										var fname = $('#p_owner_fst_name').val();
										var lname=$('#p_owner_lst_name').val();
										jQuery.alerts.dialogClass = 'alert-danger';
										jAlert('I, '+fname+' '+lname+' confirm that all information is accurate', function(){
                                        jQuery.alerts.dialogClass = null; // reset to default
                                        });
										jQuery('#checkbox_value_2').parent().find('label').addClass('warning');
										jQuery('#checkbox_value_2').focus();
										return false;
									}
									else
									{
										jQuery("#citywrong-step").hide();
										jQuery('#checkbox_value_2').parent().find('label').removeClass('warning');
										
										var str = $("form#register").serialize();
			/*	alert(str);*/
	  fsubmit(decodeURIComponent(str));
	  function fsubmit(datastr) {
            $.ajax({
            type: "POST", 
			beforeSend: function() {  $(".ui-loader").show(); }, //Show spinner
            complete: function() {  $(".ui-loader").hide(); }, //Hide spinn 
			data: datastr,
			url: 'http://wordpress-guru.net/ticket/m/mprocessing.php',
			cache: false,
			success: function(response) {
				
           /* alert("Thanks for your patience you will be taken to our next step!");*/
			window.location.href ='social.html?id='+response+'&t_type=parking';
			<!--alert(response);-->
        },
          error: function(response) {
        }
			});
	  }//Submit function end
									}	
							}
					if( whichStep != 'nine-step' )
							{		
                $(this).parent().parent().hide().next().trigger('create').show();
							}
            });
			});
            $('a.prev').click(function(){
                $(this).parent().parent().hide().prev().trigger('create').show();
            });
			                    
           $('#first-step a.prev').click(function(){
			   window.location.href ='home.html';
                
            });
		});
		
		
	
	
	// Mobiscroll date and time
$(function(){
    var nowd = new Date();
		var mt= nowd.getMonth();
		var yr= nowd.getFullYear();
    $('#pDateTime').mobiscroll().date({
        theme: 'ios',
        display: 'bubble',
        mode: 'scroller',
        dateFormat: 'yy-mm-dd',
        minDate: new Date(yr, mt - 1, 1),
        maxDate: new Date,
        width: 50
    });// ParkingDateTime Mobiscroll
});		
	
//Mobiscroll Script End

/*window.onload=function(){
$(window).bind('resize', function () {
    console.log('width = ' + $('[data-role="page"]').width());
    console.log('height = ' + $('[data-role="page"]').height());
	alert($('[data-role="page"]').width());
}).trigger('resize');
}*/
