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
			

            $('a.next').click(function(){
				

                var whichStep = $(this).parent().parent().attr('id');
				
							if( whichStep == 'first-step' )
							{
								 
								// validate first-step
								if (!$("#checkbox_value_0").is(":checked")) 
									{	
									    /*alert('Please Check The Checkbox for further proceed');*/
										alert('Please Accept To Proceed');																
										$(this).parent().parent().parent().find('label').addClass('warning');
										$('#checkbox_value_0').focus();
										return false;
									}	
								else
									{
										$(this).parent().parent().parent().find('label').removeClass('warning');
										
									}	
								
							} 
						   
							else if( whichStep == 'second-step' )
							{
																	 
								var tsel = document.getElementById('p_city');
								 var tsv = tsel.options[tsel.selectedIndex].value;
								  if(tsv == '')
									{ 
									      alert('Select City');
											$('#p_city').parent().addClass('warning');
											/*$('#p_city').parent().css('height','32px');
											$('#p_city').parent().css('margin-top','3px');*/
											
											$('#p_city').focus();											
											return false;
										
									}
									else
									{
											$('#p_city').parent().removeClass('warning');
										
									}	
					
					
							}
							
							else if( whichStep == 'third-step' )
							{
								
	                            
							
		                        if($('#pDateTime').val()=='')
									{   
									    /*alert('Select Date');*/
										$('#pDateTime').parent().addClass('warning');
										$('#pDateTime').parent().focus();
										return false;
									}
								else
									{
											$('#pDateTime').parent().removeClass('warning');
										
									}
	                            
                              
								
							}
							
							else if(whichStep == 'fourth-step' )
							{
								
								if($('#Ticket_no').val().match(/^[A-Z][A-Z][0-9]{6}$/i) || $('#Ticket_no').val().match(/^[0-9]{8}$/i))
								{
			
									$('#Ticket_no').parent().removeClass('warning');/*alert('Enter Your Ticket Number');*/
			
								}
								else
									{
										alert('Enter Valid Ticket No');
										$('#Ticket_no').parent().addClass('warning');
										$('#Ticket_no').focus();
										return false;										
									}
								
							}
							else if(whichStep == 'fourth-step-license')
							{
								
									 /*if($('#license_no').val().match(/^(?=.*?[a-z])(?=.*?\d)(?=.*?[- ])/i) || $('#license_no').val().match(/^[0-9]{8}$/i) )*/
									 if(!$('#license_no').val()=='')
									
		                            {
									$('#license_no').parent().removeClass('warning');
										
								    }
								else 
								{
									alert('Enter Valid Plate License No');
									$('#license_no').parent().addClass('warning');
										
										$('#license_no').focus();
										return false;
									
								}
							
							
							}
							
							else if(whichStep == 'fourth-step-para')
							{
								
								 if($('#p_checkbox_value_3').prop('checked') == true || $('#p_checkbox_value_4').prop('checked') == true)
								{
								$('#p_checkbox_value_4').parent().parent().find('label').removeClass('warning');
								$('#p_checkbox_value_3').parent().parent().find('label').removeClass('warning');	
								}
								 else
								 {
									 alert('Please Check Vehicle Type');
									 console.log($('#p_checkbox_value_3').is(':checked'));
										$('#p_checkbox_value_4').parent().parent().find('label').addClass('warning');
										$('#p_checkbox_value_3').parent().parent().find('label').addClass('warning');
										return false;
								 }
	
									if ($('#p_checkbox_value_4').is(':checked'))
									{
								
										if($('#p_company_name').val()=='')
										{
											alert('Enter Company Name');
											$('#p_company_name').parent().addClass('warning');
											$('#p_company_name').focus();
												return false;	
										}
										else 
										{
											$('#p_company_name').parent().removeClass('warning');
												
										}
									}
									
							}
							else if( whichStep == 'fifth-step' )
							{
								if($('#p_owner_fst_name').val()=='')
									{
										alert('Enter Your First Name');
										/*alert('Enter Your First Name');*/
										$('#p_owner_fst_name').parent().addClass('warning');
										$('#p_owner_fst_name').focus();
										return false;
									}
									else
									{
											$('#p_owner_fst_name').parent().removeClass('warning');
										
									}
									
									if($('#p_owner_lst_name').val()=='')
									{
										/*alert('Enter Your Last Name');*/
										alert('Enter Your Last Name');
										$('#p_owner_lst_name').parent().addClass('warning');
										$('#p_owner_lst_name').focus();
										return false;
									}
									else
									{
											$('#p_owner_lst_name').parent().removeClass('warning');
										
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
								
								
								if($('#Street_add').val()=='')
								{
									alert('Enter Street Address');
									$('#Street_add').parent().addClass('warning');
									$('#Street_add').focus();
									return false;
								}
								else
								{
									$('#Street_add').parent().removeClass('warning');
									
								}
		
								 var sel2 = document.getElementById('p_owner_province');
								 var sv2 = sel2.options[sel2.selectedIndex].value;
								  if(sv2 == '')
									{
											alert('Select Province');
											$('#p_owner_province').parent().addClass('warning');
											$('#p_owner_province').focus();
											return false;
										
									}
									else
									{
										$('#p_owner_province').parent().removeClass('warning');
										
									}
								
									 var sel1 = document.getElementById('p_owner_city');
								 var sv1 = sel1.options[sel1.selectedIndex].value;
								  if(sv1 == '')
									{
											alert('Select City');
											$('#p_owner_city').parent().addClass('warning');
											$('#p_owner_city').focus();
											return false;
										
									}
									else
									{
										$('#p_owner_city').parent().removeClass('warning');
										
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
									if($('#Zip_code').val()=='')
									{
								    alert('Enter Valid Zipcode');
									$('#Zip_code').parent().addClass('warning');
								    $('#Zip_code').focus();
								    return false;
										
									}
									else
									{
										$('#Zip_code').parent().removeClass('warning');	
										
									}
							}
								else if( whichStep == 'email-step' )
							{
								
									if($('#p_owner_email').val()=="")
									{
										alert("Enter Your Email");
										$('#p_owner_email').parent().addClass('warning');
										$('#p_owner_email').focus();
										return false;
									}
									
									else 
									{
										if(!emailInvalid($('#p_owner_email').val()))
										{
											alert("Please Enter Valid Email Address");
											$('#p_owner_email').parent().addClass('warning');
											$('#p_owner_email').focus();
											return false;
										}
										else
										{
											$('#p_owner_email').parent().removeClass('warning');
											
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
								if($('#p_owner_phno').val()=='' )
								{
									alert('Enter Your Contact Number');
									$('#p_owner_phno').parent().addClass('warning');
									$('#p_owner_phno').focus();
									return false;
								}
								else if(!$("#p_owner_phno").val().match(/^\(\d{3}\) \d{3}\-\d{4}( x\d{1,6})?$/))
								{
									alert('Enter Valid Contact Number');
									$('#p_owner_phno').parent().addClass('warning');
									$('#p_owner_phno').focus();
									return false;
								}
								
								else
									{
										$('#p_owner_phno').parent().removeClass('warning');
										
									}
							}
						else if( whichStep == 'eight-step' )
							{
								if (!$("#checkbox_value_1").is(":checked")) 
								{
									
									alert('Please Check The Checkbox for further proceed');
									$('#checkbox_value_1').parent().find('label').addClass('warning');
									$('#checkbox_value_1').focus();
									return false;
								}
								else
								{
								    $('#checkbox_value_1').parent().find('label').removeClass('warning');
										
								}	
								
			               
							
							
			if ($('#p_checkbox_value_4').is(':checked'))
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
			var city=$('#p_owner_city option:selected').text();
			var province=$('#p_owner_province option:selected').text();  
		    var zipcode=$('#Zip_code').val();
			var phn=$('#p_owner_phno').val();
			
			
			
//show the confirmation notice values 
			<!-- $("#city11").css('background','#ff9999');-->
			$("#p_owner_fst_name1").val(fname+" "+lname);
			 <!--$("#p_owner_lst_name1").val(lname);-->
			 $("#p_owner_email_one").val(mail);
		     <!--$('#p_language1 option[value=' + language + ']').attr('selected', true);-->
		     $("#p_language11").append($('<option>', { 
		     value: language,
		     text : language 
		     }));
			 $("#Street_add1").val(streetadd);
			 $("#p_owner_province1").val(province);
			$("#p_owner_city1").val(city);
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
			var city=$('#p_owner_city option:selected').text();
			var province=$('#p_owner_province option:selected').text(); 
		    var zipcode=$('#Zip_code').val();
			var phn=$('#p_owner_phno').val();
			
			
			
//show the confirmation notice values 
            <!-- $("#city11").css('background','#ff9999')-->		 
			$("#p_owner_fst_name1").val(fname+" "+lname);
			/* $("#p_owner_lst_name1").val(lname);*/
			 $("#p_owner_email_one").val(mail);
		     <!--$('#p_language1 option[value=' + language + ']').attr('selected', true);-->
		     
			 $("#p_language11").append($('<option>', { 
		     value: language,
		     text : language 
		     }));
			  $("#Street_add1").val(streetadd);
			 $("#p_owner_province1").val(province);
			$("#p_owner_city1").val(city);
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
								if (!$("#checkbox_value_2").is(":checked")) 
									{
										var fname = $('#p_owner_fst_name').val();
										var lname=$('#p_owner_lst_name').val();
										alert('I, '+fname+' '+lname+' confirm that all information is accurate');
										$('#checkbox_value_2').parent().find('label').addClass('warning');
										$('#checkbox_value_2').focus();
										return false;
									}
									else
									{
										$("#citywrong-step").hide();
										$('#checkbox_value_2').parent().find('label').removeClass('warning');
										
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
          alert(response);
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
