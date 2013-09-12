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
            $('#first-step .prev').remove();
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
									      
											$('#p_city').parent().addClass('warning');
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

									if($('#Ticket_no').val().length==8 || $('#Ticket_no').val().match(/^[A-Z][A-Z][0-9]+$/i) || $('#Ticket_no').val().match(/^[0-9]+$/i))
								{
			
									$('#Ticket_no').parent().removeClass('warning');/*alert('Enter Your Ticket Number');*/
			
								}
								else
									{
										$('#Ticket_no').parent().addClass('warning');
										$('#Ticket_no').focus();
										return false;
											
										
									}
							}
							else if(whichStep == 'fourth-step-license')
							{
								
								if($('#license_no').val().length>=5)
								{
									$('#license_no').parent().removeClass('warning');
										
								}
								else 
								{
									$('#license_no').parent().addClass('warning');
										
										$('#license_no').focus();
										return false;
									
								}
							}
							else if(whichStep == 'fourth-step-para')
							{
								
								
								var form=register;
								if ( ( form.p_radio_value_3.checked == false ) && ( form.p_radio_value_4.checked == false ))
								
								{
									
										$('#p_radio_value_4').parent().parent().find('label').addClass('warning');
										$('#p_radio_value_3').parent().parent().find('label').addClass('warning');
										return false;
								}
								
	
									if ($('#p_radio_value_4').is(':checked'))
									{
								
										if($('#p_company_name').val()=='')
										{
											$('#p_company_name').parent().addClass('warning');
											$('#p_company_name').focus();
												return false;	
										}
										else 
										{
											$('#p_company_name').parent().removeClass('warning');
												
										}
									}
									else
									{
									$('#p_radio_value_4').parent().parent().find('label').removeClass('warning');
									$('#p_radio_value_3').parent().parent().find('label').removeClass('warning');
									}
							}
							
							
							else if( whichStep == 'fifth-step' )
							{
								if($('#p_owner_fst_name').val()=='')
									{
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
								if($('#Unit_no').val()=='')
								{
									/*alert('Enter Unit Number');*/
									$('#Unit_no').parent().addClass('warning');
									$('#Unit_no').focus();
									return false;
								}
								else
								{
									$('#Unit_no').parent().removeClass('warning');
									
								}
								if($('#Street_no').val()=='')
								{
									/*alert('Enter Street Number');*/
									$('#Street_no').parent().addClass('warning');
									$('#Street_no').focus();
									return false;
								}
								else
								{
									$('#Street_no').parent().removeClass('warning');
									
								}
								if($('#Street_name').val()=='')
								{
									/*alert('Enter Street Name');*/
									$('#Street_name').parent().addClass('warning');
									$('#Street_name').focus();
									return false;
								}
								else
								{
									$('#Street_name').parent().removeClass('warning');
									
								}
								var sel2 = document.getElementById('p_owner_province');
								 var sv2 = sel2.options[sel2.selectedIndex].value;
								  if(sv2 == '')
									{
											/*alert('Select Province');*/
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
											/*alert('Select City');*/
											$('#p_owner_city').parent().addClass('warning');
											$('#p_owner_city').focus();
											return false;
										
									}
									else
									{
										$('#p_owner_city').parent().removeClass('warning');
										
									}
								
								
								if($('#Zip_code').val()=='')
								{
									/*alert('Enter Zipcode');*/
									$('#Zip_code').parent().addClass('warning');
									$('#Zip_code').focus();
									return false;
									
								}
								else if($('#Zip_code').val().length>=6)
									{
									$('#Zip_code').parent().removeClass('warning');	
										
									}
									else
									{
										$('#Zip_code').parent().addClass('warning');
									$('#Zip_code').focus();
									return false;
									}
							}
								else if( whichStep == 'email-step' )
							{
								
									if($('#p_owner_email').val()=="")
									{
										/*alert("Enter your Email.");*/
										$('#p_owner_email').parent().addClass('warning');
										$('#p_owner_email').focus();
										return false;
									}
									
									else 
									{
										if(!emailInvalid($('#p_owner_email').val()))
										{
											/*alert("Please Enter Valid Email Address");*/
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
								if($('#p_owner_phno').val()==''  || $('#p_owner_phno').val().length<10 || isNaN ($('#p_owner_phno').val() ))
								{
									/*alert('Enter Your Contact Number');*/
									$('#p_owner_phno').parent().addClass('warning');
									$('#p_owner_phno').focus();
									return false;
								}
								
								else
									{
										$('#p_owner_phno').parent().removeClass('warning');
										
									}
									var notice_no = $('#Ticket_no').val();
			var license_no = $('#license_no').val();
			var date_of = $('#pDateTime').val();					
			var fname = $('#p_owner_fst_name').val();
			var cname = $('#p_company_name').val();
			var lname=$('#p_owner_lst_name').val();
			var mail=$('#p_owner_email').val();
			var language = $('#p_language').val();		
            var unitno = $('#Unit_no').val(); 
			var streetno=$('#Street_no').val() ;
			var streetname=$('#Street_name').val();
			var city=$('#p_owner_city').val();
			var province=$('#p_owner_province option:selected').text(); 
		    var zipcode=$('#Zip_code').val();
			var phn=$('#p_owner_phno').val();
			
			
			
//show the confirmation notice values 			 
			 $("#p_owner_fst_name1").html(fname);
			 $("#p_owner_lst_name1").html(lname);
			 $("#p_owner_email_one").html(mail);
		     <!--$('#p_language1 option[value=' + language + ']').attr('selected', true);-->
		     $("#p_language1").html(language);
			 $("#Unit_no1").html(unitno);
			 $("#Street_no1").html(streetno);
			 $("#Street_name1").html(streetname);
			 $("#p_owner_province1").html(province);
			 <!--$('#p_owner_province1 option[value=' + province + ']').attr('selected', true);-->
			 <!--$("#p_owner_province1").selectmenu('refresh');-->
			 <!--$('#p_owner_city1 option[value=' + city + ']').attr('selected', true);-->
			 $("#p_owner_city1").html(city);
			<!-- $("#p_owner_city1").selectmenu('refresh');-->
			 $("#Zip_code1").html(zipcode);
			 $("#p_owner_phno1").html(phn);
			 $("#p_fname").html(fname);
			  $("#cm_name").html(cname);
			  if(cname=="") {
				  $('#comp_hide').hide();
			  }
			  
			 $("#p_lname").html(lname);
			 $("#date_of_infraction").html(date_of);
			 $("#notice_no").html(notice_no);
			 $("#license_no_of_ticket").html(license_no);
			 		
								
							}
							
							
							if( whichStep == 'nine-step' )
							{
								if (!$("#checkbox_value_2").is(":checked")) 
									{
										/*alert('Please Check The Checkbox for further proceed');*/
										$('#checkbox_value_2').parent().addClass('warning');
										$('#checkbox_value_2').focus();
										return false;
									}
									else
									{
										$('#checkbox_value_2').parent().removeClass('warning');
										
									}	
							}
							
							else if( whichStep == 'ten-step' )
							{		
							   
							}

 
                $(this).parent().parent().hide().next().trigger('create').show();
            });
            $('a.prev').click(function(){
                $(this).parent().parent().hide().prev().trigger('create').show();
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