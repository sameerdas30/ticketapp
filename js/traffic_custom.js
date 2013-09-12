//step wise validation starts
  var prevLink = '<a class="prev back_bt" href="#"  data-corners="true" id="default"  data-wrapperels="span"   data-theme="b" >Back</a>';
        var nextLink = '<a class="next next_bt" href="#"  data-corners="true" id="default" data-wrapperels="span" data-theme="b" >Next</a>';
        var navHTML = '<div class="prev-next">' +
                         nextLink +
                         prevLink +
                      '</div>';
					  
					  $(function(){
            // init
            $('#register1 > div')
                .hide()
                .append(navHTML).trigger('create');
            $('#t-first-step .prev').remove();
            $('#t-ten-step .next').remove();
 
            // show first step
            $('#t-first-step').show();
			//$('option:selected', 'select#PUT').removeAttr('selected').next('option').attr('selected', 'selected');
			
 
            $('a.next').click(function(){
function datediff(ds1,ds2) {
 console.log(ds1);
 console.log(ds2);
 var oneday = 86400000;
 return (ds2-ds1) / oneday;
}	
			
                var whichStep = $(this).parent().parent().attr('id');

							if( whichStep == 't-first-step' )
							{
								
								// validate first-step
								if (!$("#t_checkbox_value_0").is(":checked")) {
									/*alert('Please Check The Checkbox for further proceed');
									alert($("#t_checkbox_value_0").val());*/
									$(this).parent().parent().parent().find('label').addClass('warning');
	
									$('#t_checkbox_value_0').focus();
									return false;
									}
							
								else
									{
										$(this).parent().parent().parent().find('label').removeClass('warning');
										
									}
					
					
							}
						   
							else if( whichStep == 't-second-step' )
							{
									 
								 var tsel = document.getElementById('t_city');
								 var tsv = tsel.options[tsel.selectedIndex].value;
								  if(tsv == '')
									{ 
									        /*alert('Select City');*/
											$('#t_city').parent().addClass('warning');
											$('#t_city').focus();											
											return false;
										
									}
									else
									{
											$('#t_city').parent().removeClass('warning');
										
									}	
					
							}
							else if( whichStep == 't-third-step' )
							{
								
								 if($('#DateTime').val()=='')
									{   
									
									    /*alert('Select Date');*/
										$('#DateTime').parent().addClass('warning');
										$('#DateTime').parent().focus();
										return false;
									}
								else
									{
											$('#DateTime').parent().removeClass('warning');
										
									}
							}
							
							else if( whichStep == 't-fourth-step' )
							{
								
								if($('#t_ticket_no').val().length==8)
								{
									if($('#t_ticket_no').val().match(/^[A-Z][A-Z][0-9]+$/i) || $('#t_ticket_no').val().match(/^[0-9]+$/i))
									{
									$('#t_ticket_no').parent().removeClass('warning');/*alert('Enter Your Ticket Number');*/
									}
										
								}
								else
									{
										$('#t_ticket_no').parent().addClass('warning');
										$('#t_ticket_no').focus();
										return false;
											
										
									}
							}
							else if(whichStep == 't-fourth-step-license')
							{
								if($('#t_license_no').val().length>=5)
								{
									$('#t_license_no').parent().removeClass('warning');
										
								}
								else 
								{
									$('#t_license_no').parent().addClass('warning');
										
										$('#t_license_no').focus();
										return false;
									
								}
								
							}
							
							else if(whichStep == 't-fourth-step-para')
							{
								var form=register1;
								if ( ( form.t_radio_value_3.checked == false ) && ( form.t_radio_value_4.checked == false ))
								
								{
									
										$('#t_radio_value_4').parent().parent().find('label').addClass('warning');
										$('#t_radio_value_3').parent().parent().find('label').addClass('warning');
										return false;
								}
								

								if ($('#t_radio_value_4').is(':checked'))
								{
									
									
								if($('#t_company_name').val()=='')
								{
									$('#t_company_name').parent().addClass('warning');
									$('#t_company_name').focus();
										return false;	
								}
								else 
								{
									$('#t_company_name').parent().removeClass('warning');
										
								}
								}
								else
                                {
	                            $('#t_radio_value_4').parent().parent().find('label').removeClass('warning');
	                            $('#t_radio_value_3').parent().parent().find('label').removeClass('warning');
                                }
								
		 
							}
					
							else if( whichStep == 't-fifth-step' )
							{
								if($('#t_owner_fst_name').val()=='')
									{
									/*alert('Enter Your First Name');*/
										$('#t_owner_fst_name').parent().addClass('warning');
										$('#t_owner_fst_name').focus();
										return false;
									}
									else
									{
											$('#t_owner_fst_name').parent().removeClass('warning');
										
									}
									
									if($('#t_owner_lst_name').val()=='')
									{
										/*alert('Enter Your Last Name');*/
										$('#t_owner_lst_name').parent().addClass('warning');
										$('#t_owner_lst_name').focus();
										return false;
									}
									else
									{
											$('#t_owner_lst_name').parent().removeClass('warning');
										
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
					
					
							else if( whichStep == 't-six-step' )
							{
								if($('#t_Unit_no').val()=='')
								{
									/*alert('Enter Unit Number');*/
									$('#t_Unit_no').parent().addClass('warning');
									$('#t_Unit_no').focus();
									return false;
								}
								else
								{
									$('#t_Unit_no').parent().removeClass('warning');
									
								}
								if($('#t_Street_no').val()=='')
								{
									/*alert('Enter Street Number');*/
									$('#t_Street_no').parent().addClass('warning');
									$('#t_Street_no').focus();
									return false;
								}
								else
								{
									$('#t_Street_no').parent().removeClass('warning');
									
								}
								if($('#t_Street_name').val()=='')
								{
									$('#t_Street_name').parent().addClass('warning');
									$('#t_Street_name').focus();
									return false;
								}
								else
								{
									$('#t_Street_name').parent().removeClass('warning');
									
								}
								var tsel2 = document.getElementById('t_owner_province');
								 var tsv2 = tsel2.options[tsel2.selectedIndex].value;
								  if(tsv2 == '')
									{
											/*alert('Select Province');*/
											$('#t_owner_province').parent().addClass('warning');
											$('#t_owner_province').focus();
											return false;
										
									}
									else
									{
										$('#t_owner_province').parent().removeClass('warning');
										
									}
								var tsel1 = document.getElementById('t_owner_city');
								 var tsv1 = tsel1.options[tsel1.selectedIndex].value;
								  if(tsv1 == '')
									{
											/*alert('Select City');*/
											$('#t_owner_city').parent().addClass('warning');
											$('#t_owner_city').focus();
											return false;
										
									}
									else
									{
										$('#t_owner_city').parent().removeClass('warning');
										
									}
								
								if($('#t_Zip_code').val()=='')
								{
									/*alert('Enter Zipcode');*/
									$('#t_Zip_code').parent().addClass('warning');
									$('#t_Zip_code').focus();
									return false;
									
								}
								else if($('#t_Zip_code').val().length>=6)
									{
									$('#t_Zip_code').parent().removeClass('warning');	
										
									}
									else
									{
										$('#t_Zip_code').parent().addClass('warning');
									$('#t_Zip_code').focus();
									return false;
									}
							}
							
							else if( whichStep == 't-email-step' )
							{
								
									if($('#t_owner_email').val()=="")
									{
										/*alert("Enter your Email.");*/
										$('#t_owner_email').parent().addClass('warning');
										$('#t_owner_email').focus();
										return false;
									}
									
									else 
									{
										if(!emailInvalid($('#t_owner_email').val()))
										{
											/*alert("Please Enter Valid Email Address");*/
											$('#t_owner_email').parent().addClass('warning');
											$('#t_owner_email').focus();
											return false;
										}
										else
										{
											$('#t_owner_email').parent().removeClass('warning');
											
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
							
							else if( whichStep == 't-seven-step' )
							{
								if($('#t_owner_phno').val()=='' || $('#t_owner_phno').val().length<10 || isNaN ($('#t_owner_phno').val() ))
								{
									/*alert('Enter Your Contact Number');*/
									$('#t_owner_phno').parent().addClass('warning');
									$('#t_owner_phno').focus();
									return false;
								}
								
								else
									{
										$('#t_owner_phno').parent().removeClass('warning');
										
									}		
								
							
							
	//summary								
			var notice_no = $('#t_ticket_no').val();
			var license_no = $('#t_license_no').val();
			var date_of = $('#DateTime').val();							
			var fname = $('#t_owner_fst_name').val();
			var lname=$('#t_owner_lst_name').val();
			var tcname = $('#t_company_name').val();
			var mail=$('#t_owner_email').val();
			var language = $('#t_language').val();			
            var unitno = $('#t_Unit_no').val(); 
			var streetno=$('#t_Street_no').val() ;
			var streetname=$('#t_Street_name').val();
			var city=$('#t_owner_city').val();
			var province=$('#t_owner_province option:selected').text(); 
		    var zipcode=$('#t_Zip_code').val();
			var phn=$('#t_owner_phno').val();
			
//show the confirmation notice values 
						 
			 $("#t_owner_fst_name1").html(fname);
			 $("#t_owner_lst_name1").html(lname);
			 $('.content_inner_div show_comp').append('<div class="profile_left_div1"><h4>Company Name </h4></div><div class="profile_right_div1"><h4><div id="t_show_company"></div></h4></div>');
		     $("#t_owner_email1").html(mail);
			<!-- $('#t_language1 option[value=' + language + ']').attr('selected', true);-->
			 $("#t_language1").html(language);
			 $("#t_Unit_no1").html(unitno);
			 $("#t_Street_no1").html(streetno);
			 $("#t_Street_name1").html(streetname);
			 <!--$('#t_owner_province1 [value=' + province + ']').attr('selected', true);-->
			 $("#t_owner_province1").html(province);
			<!-- $('#t_owner_city1 option[value=' + city + ']').attr('selected', true);-->
			 $("#t_owner_city1").html(city);
			 $("#t_Zip_code1").html(zipcode);
			 $("#t_fname").html(fname);
			 $("#t_lname").html(lname);
			 $("#p_fname").html(fname);
			  $("#tcm_name").html(tcname);
			  if(tcname=="") {
				$('#tcomp_hide').hide();
			  }
			 $("#t_owner_phno1").html(phn);
			 $("#t_date_of_infraction").html(date_of);
			 $("#t_notice_no").html(notice_no);
			 $("#t_license_no_of_ticket").html(license_no);					
							}
							
							if( whichStep == 't-nine-step' )
							{
								if (!$("#t_checkbox_value_2").is(":checked")) {
									/*alert('Please Check The Checkbox for further proceed');*/
										$('#t_checkbox_value_2').parent().addClass('warning');
										$('#t_checkbox_value_2').focus();
										return false;
									}
									else
									{
										$('#t_checkbox_value_2').parent().removeClass('warning');
										
									}	
							}
							else if( whichStep == 't-ten-step' )
							{		
							   
							}

 
                $(this).parent().parent().hide().next().trigger('create').show();
            });
 
            $('a.prev').click(function(){
                $(this).parent().parent().hide().prev().trigger('create').show();
            });
        });
		
		
		
		// fro date and time

        $(function(){
    var nowd = new Date();
		var mt= nowd.getMonth();
		var yr= nowd.getFullYear();
    $('#DateTime').mobiscroll().date({
        theme: 'ios',
        display: 'bubble',
        mode: 'scroller',
        dateFormat: 'yy-mm-dd',
        minDate: new Date(yr, mt - 1, 1),
        maxDate: new Date,
        width: 50
    });// TrafficDateTime Mobiscroll
});		
 
 

//Mobiscroll Script End
   
	