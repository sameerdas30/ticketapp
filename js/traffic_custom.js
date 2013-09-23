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
            /*$('#t-first-step .prev').remove();*/
           <!-- $('#t-ten-step .next').remove();-->
 
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
								alert('Please Accept To Proceed')	
									$(this).parent().parent().parent().find('label').addClass('warning');
									$('#t_checkbox_value_0').focus()
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
									        alert('Select City');
											$('#t_city').parent().addClass('warning');
											/*$('#t_city').parent().css('height','32px');
											$('#t_city').parent().css('margin-top','0px');*/
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
								if($('#t_ticket_no').val().match(/^[A-Z][A-Z][0-9]{6}$/i) || $('#t_ticket_no').val().match(/^[0-9]{8}$/i))
								{
			
									$('#t_ticket_no').parent().removeClass('warning');/*alert('Enter Your Ticket Number');*/
			
								}
								else
									{
										alert('Enter Valid Ticket No');
										$('#t_ticket_no').parent().addClass('warning');
										$('#t_ticket_no').focus();
										return false;
											
										
									}
							}
							else if(whichStep == 't-fourth-step-license')
							{
								/*if($('#t_license_no').val().match(/^(?=.*?[a-z])(?=.*?\d)(?=.*?[- ])/i) || $('#t_license_no').val().match(/^[0-9]{8}$/i) )*/
									 if(!$('#t_license_no').val()=='')
		                            {
									$('#t_license_no').parent().removeClass('warning');
										
								    }
								else 
								{
									alert('Enter Valid Plate License No');
									$('#t_license_no').parent().addClass('warning');
										
										$('#t_license_no').focus();
										return false;
									
								}
								}
							
							else if(whichStep == 't-fourth-step-para')
							{
								if($('#t_checkbox_value_3').prop('checked') == true || $('#t_checkbox_value_4').prop('checked') == true)
								{
									
								}
								 else
								 {
									 alert('Please Check Vehicle Type');
									 console.log($('#t_checkbox_value_3').is(':checked'));
										$('#t_checkbox_value_4').parent().parent().find('label').addClass('warning');
										$('#t_checkbox_value_3').parent().parent().find('label').addClass('warning');
										return false;
								 }
								

								if ($('#t_checkbox_value_4').is(':checked'))
								{
									
									
								if($('#t_company_name').val()=='')
								{
									alert('Enter Company Name');
									$('#t_company_name').parent().addClass('warning');
									$('#t_company_name').focus();
										return false;	
								}
								else 
								{
									$('#t_company_name').parent().removeClass('warning');
										
								}
								}
								
							}
					
							else if( whichStep == 't-fifth-step' )
							{
								if($('#t_owner_fst_name').val()=='')
									{
									alert('Enter Your First Name');
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
										alert('Enter Your Last Name');
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
								
								if($('#t_Street_add').val()=='')
								{
									alert('Enter Street Address');
									$('#t_Street_add').parent().addClass('warning');
									$('#t_Street_add').focus();
									return false;
								}
								else
								{
									$('#t_Street_add').parent().removeClass('warning');
									
								}
								
								var tsel2 = document.getElementById('t_owner_province');
								 var tsv2 = tsel2.options[tsel2.selectedIndex].value;
								  if(tsv2 == '')
									{
											alert('Select Province');
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
											alert('Select City');
											$('#t_owner_city').parent().addClass('warning');
											$('#t_owner_city').focus();
											return false;
										
									}
									else
									{
										$('#t_owner_city').parent().removeClass('warning');
										
									}
								/*if($('#t_Zip_code').val().match(/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/) || $('#t_Zip_code').val().match(/^([abceghjklmnprstvxy]\d[abceghjklmnprstvwxyz])\ {0,1}(\d[abceghjklmnprstvwxyz]\d)$/) )
									{
									$('#t_Zip_code').parent().removeClass('warning');	
										
									}
									else
									{
										alert('Enter Valid Zipcode');
										$('#t_Zip_code').parent().addClass('warning');
									$('#t_Zip_code').focus();
									return false;
								
									}*/
									if($('#t_Zip_code').val()=='')
									{
								    alert('Enter Zipcode');
									$('#t_Zip_code').parent().addClass('warning');
								    $('#t_Zip_code').focus();
								    return false;
										
									}
									else
									{
										$('#t_Zip_code').parent().removeClass('warning');	
										
									}
							}
							
							else if( whichStep == 't-email-step' )
							{
								
									if($('#t_owner_email').val()=="")
									{
										alert("Enter Your Email");
										$('#t_owner_email').parent().addClass('warning');
										$('#t_owner_email').focus();
										return false;
									}
									
									else 
									{
										if(!emailInvalid($('#t_owner_email').val()))
										{
											alert("Please Enter Valid Email Address");
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
								if($('#t_owner_phno').val()=='')
								{
									alert('Enter Your Contact Number');
									$('#t_owner_phno').parent().addClass('warning');
									$('#t_owner_phno').focus();
									return false;
								}
								else if(!$("#t_owner_phno").val().match(/^\(\d{3}\) \d{3}\-\d{4}( x\d{1,6})?$/))
								{
									
									alert('Enter Valid Contact Number');
									$('#t_owner_phno').parent().addClass('warning');
									$('#t_owner_phno').focus();
									return false;
								}
								else
									{
										$('#t_owner_phno').parent().removeClass('warning');
										
									}
							}
							else if( whichStep == 't-nine-step' )
							{
							if (!$("#t_checkbox_value_1").is(":checked")) 
								{
										
									alert('Please Check The Checkbox for further proceed');
									$('#t_checkbox_value_1').parent().find('label').addClass('warning');
									$('#t_checkbox_value_1').focus();
									return false;
								}
								else
								{
								    $('#t_checkbox_value_1').parent().find('label').removeClass('warning');
										
								}
								
							
							if ($('#t_checkbox_value_4').is(':checked'))
								{
	//summary	
	       	var tcname = $('#t_company_name').val();
			var notice_no = $('#t_ticket_no').val();
			var license_no = $('#t_license_no').val();
			var date_of = $('#DateTime').val();							
			var fname = $('#t_owner_fst_name').val();
			var lname=$('#t_owner_lst_name').val();
			var city1=$('#t_city').val();
			var mail=$('#t_owner_email').val();
			var language = $('#t_language').val();			
           var streetadd=$('#t_Street_add').val();
			var city=$('#t_owner_city option:selected').text(); 
			var province=$('#t_owner_province option:selected').text(); 
		    var zipcode=$('#t_Zip_code').val();
			var phn=$('#t_owner_phno').val();
			
//show the confirmation notice values 
						 
			 $("#t_owner_fst_name1").val(fname+" "+lname);
			/*$("#t_owner_lst_name1").val(lname);*/
			 $('.content_inner_div show_comp').append('<div class="profile_left_div1"><h4>Company Name </h4></div><div class="profile_right_div1"><h4><div id="t_show_company"></div></h4></div>');
		     $("#t_owner_email1").val(mail);
			<!-- $('#t_language1 option[value=' + language + ']').attr('selected', true);-->
			$("#t_language11").append($('<option>', { 
		     value: language,
		     text : language 
		     }));
			 $('#tcomp_hide').show();
			  $("#t_Street_add1").val(streetadd);
			 <!--$('#t_owner_province1 [value=' + province + ']').attr('selected', true);-->
			 $("#t_owner_province1").val(province);
			 $("#t_company_name").val(tcname);
			<!-- $('#t_owner_city1 option[value=' + city + ']').attr('selected', true);-->
			 $("#t_owner_city1").val(city);
		     
			  $("#city11").append($('<option>', { 
		     value: city1,
		     text : city1 
			 }));
			 $("#t_Zip_code1").val(zipcode);
			 $("#t_fname").html(fname);
			 $("#t_lname").html(lname);
			  $("#tcm_name").val(tcname);
			 $("#t_owner_phno1").val(phn);
			 $("#t_date_of_infraction").val(date_of);
			 $("#t_notice_no").val(notice_no);
			 $("#t_license_no_of_ticket").val(license_no);					
							} else if ($('#t_checkbox_value_3').is(':checked')) { 
	//summary	
	       							
			var notice_no = $('#t_ticket_no').val();
			var license_no = $('#t_license_no').val();
			var city1=$('#t_city').val();
			var date_of = $('#DateTime').val();							
			var fname = $('#t_owner_fst_name').val();
			var lname=$('#t_owner_lst_name').val();
			var mail=$('#t_owner_email').val();
			var language = $('#t_language').val();			
            var streetadd=$('#t_Street_add').val();
			var city=$('#t_owner_city option:selected').text(); 
			var province=$('#t_owner_province option:selected').text(); 
		    var zipcode=$('#t_Zip_code').val();
			var phn=$('#t_owner_phno').val();
			
//show the confirmation notice values 
						 
			 $("#t_owner_fst_name1").val(fname+" "+lname);
			<!-- $("#t_owner_lst_name1").val(lname);-->
			 $('.content_inner_div show_comp').append('<div class="profile_left_div1"><h4>Company Name </h4></div><div class="profile_right_div1"><h4><div id="t_show_company"></div></h4></div>');
		     $("#t_owner_email1").val(mail);
			<!-- $('#t_language1 option[value=' + language + ']').attr('selected', true);-->
			 $("#t_language11").append($('<option>', { 
		     value: language,
		     text : language 
		     }));
			   $("#t_Street_add1").val(streetadd);
			 <!--$('#t_owner_province1 [value=' + province + ']').attr('selected', true);-->
			 $("#t_owner_province1").val(province);
			
			<!-- $('#t_owner_city1 option[value=' + city + ']').attr('selected', true);-->
			 $("#t_owner_city1").val(city);
			 $("#city11").append($('<option>', { 
		     value: city1,
		     text : city1 
			 }));
			 $("#t_Zip_code1").val(zipcode);
			 $("#t_fname").html(fname);
			 $('#tcomp_hide').hide();
			 $("#t_owner_phno1").val(phn);
			 $("#t_date_of_infraction").val(date_of);
			 $("#t_notice_no").val(notice_no);
			 $("#t_license_no_of_ticket").val(license_no);					
							 } }
							
							if( whichStep == 't-ten-step' )
							{
								if (!$("#t_checkbox_value_2").is(":checked")) {
									
										var fname = $('#t_owner_fst_name').val();
			                            var lname=$('#t_owner_lst_name').val();
									alert('I, '+fname+' '+lname+' confirm that all information is accurate');
										$('#t_checkbox_value_2').parent().find('label').addClass('warning');
										$('#t_checkbox_value_2').focus();
										return false;
									}
									else
									{
										$('#t_checkbox_value_2').parent().find('label').removeClass('warning');
													var str = $("form#register1").serialize();
	  fsubmit(decodeURIComponent(str));

	  function fsubmit(datastr) {
            $.ajax({
            type: "POST", 
			beforeSend: function() { $(".ui-loader").show(); }, //Show spinner
            complete: function() { $(".ui-loader").hide(); }, //Hide spinn 
			data: datastr,
			url: 'http://wordpress-guru.net/ticket/m/mprocessing.php',
			cache: false,
			success: function(response) {
            alert("Thanks for your patience you will be taken to our next step!");
			window.location.href ='social.html?id='+response+'&t_type=traffic';
        },
          error: function(response) {
         
        }
			});
	  }//Submit function end

										
									}	
							}
							if( whichStep != 't-ten-step' )
							{	
			$(this).parent().parent().hide().next().trigger('create').show();
							}
							
            });
 
            $('a.prev').click(function(){
                $(this).parent().parent().hide().prev().trigger('create').show();
            });
			$('#t-first-step a.prev').click(function(){
			   window.location.href ='home.html';
                
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
   
	