//Develop a Polymorphic Function to handle up to 4 different tasks....

function pushData(theUrl, theForm2Serialize, statusMonitor, successMsg, successTransfer, failurMsg, curlButton){
                        
               $.ajax({

                        type : "POST",
                        cache : true,
                        url : theUrl,
                        crossDomain : true,
                        data : $("#" + theForm2Serialize).serialize(),
                        dataType : "html",
                        success : function(themResponse){
                            
                            if(themResponse == "Successful"){                          
                                $("#" + statusMonitor).html(successMsg);
                                window.location = successTransfer;
                            }
                            
                        else{
                                $("#" + statusMonitor).html(themResponse);
                        }
                        
                        //Remove disability on btn anyways
                        $("#" + curlButton) .removeAttr("disabled");
                         
                    },
                           
                   error : function(jQXHR, error, status){

                    console.log("Error happened bro! Reason: Page " + status + " " + error);
                    $("#" + statusMonitor).html(failurMsg);
                            //Remove disability on btn anyways
                            $("#" + curlButton) .removeAttr("disabled");
                    }

                    }); //End of Ajax


 }// End of Polymorphic function
 
 
 


        
                    
                    $("#students_reg_form").on("submit", function(){
                        
                        $("#reg_bg_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                        $("#students_reg_form button") .attr("disabled", "disabled");
                        
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/reg_processor.php", "students_reg_form", "reg_bg_process_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "apply_otp.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls..", "students_reg_form button");
                        
                    });


        
                     
					 
					 $("#otp_pin_form").on("submit", function(){
                        
                         
                        $("#reg_bg_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#otp_pin_form button") .attr("disabled", "disabled");
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/otp_update.php", "otp_pin_form", "reg_bg_process_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "students_dashboard.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...", "otp_pin_form button");
                        
                    });
					
					
					
					
		$("#staffs_reg_form").on("submit", function(){
                        
                         
                        $("#reg_bg_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#staffs_reg_form button") .attr("disabled", "disabled");
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/staffs_reg_processor.php", "staffs_reg_form", "reg_bg_process_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "staff_apply_otp.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...", "staffs_reg_form button");
                        
                    });




		 $("#staff_otp_pin_form").on("submit", function(){
                        
                         
                    $("#reg_bg_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#staff_otp_pin_form button") .attr("disabled", "disabled");
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/staff_otp_update.php", "staff_otp_pin_form", "reg_bg_process_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "staffs_dashboard.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...", "staff_otp_pin_form button");
                        
                    });

                 
    
	
	 $("#new_job_form").on("submit", function(){
                        
                         
                    $("#reg_bg_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#new_job_form button") .attr("disabled", "disabled");
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/job_post.php", "new_job_form", "reg_bg_process_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "ma_jobs.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...", "new_job_form button");
                        
                    });
					
					
		 
$("#add_student_form").on("submit", function(){
                    
                         
                    $("#reg_bg_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#add_student_form button") .attr("disabled", "disabled");
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/add_student.php", "add_student_form", "reg_bg_process_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "admin_dashboard.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...", "add_student_form button");
                        
                    });

$("#add_staff_form").on("submit", function(){
                    
                         
                    $("#reg_bg_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#add_staff_form button") .attr("disabled", "disabled");
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/add_staff.php", "add_staff_form", "reg_bg_process_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "admin_dashboard.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...", "add_staff_form button");
                        
                    });


		
		$("#students_update_form").on("click", function(){
			
			alert("hahahaha");
		});
					
					
		      
              function indirectUpdate(){           
                    $("#profile_update_status").html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#students_update_form button") .attr("disabled", "disabled");
                        pushData("http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/students_profile_updater.php", "students_update_form", "profile_update_status", "<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...", "students_dashboard.html", "<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...", "students_update_form button");
			  }
					
					
					
	 $("#user_login_form").on("submit", function(){
                        
                    
                    $("#login_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#user_login_form button").attr("disabled", "disabled");
                $.ajax({

                        type : "POST",
                        cache : true,
                        url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/initiate_login.php",
                        crossDomain : true,
                        data : $("#user_login_form").serialize(),
                        dataType : "html",
                        success : function(themResponse){
							
							$("#login_process_status").html("<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...");
							
								if(themResponse == "Successful Student"){
								
									window.location = "students_dashboard.html";
									$("#user_login_form button").removeAttr("disabled");
							}
							
							else if(themResponse == "Successful Staff"){
								
								window.location = "staffs_dashboard.html";
								$("#user_login_form button").removeAttr("disabled");
							}
							
							else{
									
								$("#login_process_status").html(themResponse);	
								$("#user_login_form button").removeAttr("disabled");
								
								
							}
							
							
						},
						
						error : function(jQXHR, error, status){
							
							console.log(error + " " + status);
							$("#login_process_status").html("<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...");
							$("#user_login_form button").removeAttr("disabled");
							
						}
			 
			 }); //End of Ajax
                        
                    
					
		});
		
		
		function carryMe(numberReceived){
			
            $.ajax({
			url :        "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/cookie_setter.php",
			dataType : "html",
			type : "POST",
			cache : true,
            data : {"cookie2set" : numberReceived},
			crossDomain : true,
			success : function(replyFrmServer){
                
                if(replyFrmServer == "Successful"){
                    window.location = "job_details.html";
                }
                
                else{
                    
                    alert(replyFrmServer);
                }
                
            },
                
            error : function(jQXHR, errror, status){
                
                console.log(error + " " + status);
                
            }
        
            
			
		});
			
            
            
		}




        
        function adminCarryMe(numberReceived){
			
            $.ajax({
			url :        "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/cookie_setter.php",
			dataType : "html",
			type : "POST",
			cache : true,
            data : {"cookie2set" : numberReceived},
			crossDomain : true,
			success : function(replyFrmServer){
                
                if(replyFrmServer == "Successful"){
                    window.location = "admin_job_details.html";
                }
                
                else{
                    
                    alert(replyFrmServer);
                }
                
            },
                
            error : function(jQXHR, errror, status){
                
                console.log(error + " " + status);
                
            }
        
            
			
		});
			
            
            
		}









        function carryMeStudent(numberReceived){
			
            $.ajax({
			url :        "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/cookie_setter.php",
			dataType : "html",
			type : "POST",
			cache : true,
            data : {"cookie2set" : numberReceived},
			crossDomain : true,
			success : function(replyFrmServer){
                
                if(replyFrmServer == "Successful"){
                    window.location = "students_job_details.html";
                }
                
                else{
                    
                    alert(replyFrmServer);
                }
                
            },
                
            error : function(jQXHR, errror, status){
                
                console.log(error + " " + status);
                
            }
        
            
			
		});
			
            
            
		}
		
		
		function jobDeleter(){
			
		
		$("#job_details_loader").html("Please wait...");
		$.ajax({
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/job_deleter.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				if(replyFrmServer == 'deleted!'){
					
					
					window.location = 'ma_jobs.html';
				}
				
				else{
					
					$("#job_details_loader").html(replyFrmServer);	
						
				}
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
			
		
		}
					
					
				function adminJobDeleter(){
			
		
		$("#job_details_loader").html("Please wait...");
		$.ajax({
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/job_deleter.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				if(replyFrmServer == 'deleted!'){
					
					alert("job deleted!");
					window.location = 'admin_dashboard.html';
				}
				
				else{
					
					alert(replyFrmServer);	
						
				}
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
			
		
		}
			
	function jobApprover(theBtn, theForm){
			
		
		$("#" + theBtn).text("Approving...");
		$.ajax({
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/job_approver.php",
			dataType : "html",
			type : "POST",
			cache : true,
			crossDomain : true,
			data : $("#" + theForm).serialize(),
			success : function(replyFrmServer){
				if(replyFrmServer == 'Approved!'){
					
					$("#" + theBtn).text("Approved!");
					$("#" + theBtn).attr("disabled","disabled");
				}
				
				else{
					
					alert(replyFrmServer);	
						
				}
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
			
		
		}
		


            function adminJobApprover(theForm){
			
		
		
		$.ajax({
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/admin_job_approver.php",
			dataType : "html",
			type : "POST",
			cache : true,
			crossDomain : true,
			data : $("#" + theForm).serialize(),
			success : function(replyFrmServer){
				if(replyFrmServer == 'Approved!'){
					
					alert("Job Approved");
                    window.location = "admin_dashboard.html";
				}
				
				else{
					
					alert(replyFrmServer);	
						
				}
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
			
		
		}
		
		
		
		
		function jobApplicator(theBtn, theForm){
			
			
			
			
			$("#" + theBtn).val("Approving...");
			$.ajax({
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/students_job_applicator.php",
			dataType : "html",
			type : "POST",
			cache : true,
			crossDomain : true,
			data : $("#" + theForm).serialize(),
			success : function(replyFrmServer){
				if(replyFrmServer == 'Applied!'){
					
					alert("Successfully applied!");
					$("#" + theBtn).attr("disabled","disabled");
					window.location = 'students_dashboard.html';
				}
				
				else{
					
					alert("Unable to apply or double application detected!");
					$("#" + theBtn).attr("disabled","disabled");
						
				}
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
			
			
		}
				

    

     $("#admin_login_form").on("submit", function(){
                        
                    
                    $("#login_process_status").css({"visibility" : "visible"}).html("<span class='glyphicon glyphicon-time'></span>&nbsp;Please wait...");
                         $("#admin_login_form button").attr("disabled", "disabled");
                $.ajax({

                        type : "POST",
                        cache : true,
                        url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/initiate_admin_login.php",
                        crossDomain : true,
                        data : $("#admin_login_form").serialize(),
                        dataType : "html",
                        success : function(themResponse){
							
							$("#login_process_status").html("<span class='glyphicon glyphicon-time'></span>&nbsp;One moment please...");
							
								if(themResponse == "Successful Admin"){
								
									window.location = "admin_dashboard.html";
									$("#admin_login_form button").removeAttr("disabled");
							}
							
							
							
							else{
									
								$("#login_process_status").html(themResponse);	
								$("#admin_login_form button").removeAttr("disabled");
								
								
							}
							
							
						},
						
						error : function(jQXHR, error, status){
							
							console.log(error + " " + status);
							$("#login_process_status").html("<i class='fa fa-times'></i>&nbsp;An error occured! Try again pls...");
							$("#admin_login_form button").removeAttr("disabled");
							
						}
			 
			 }); //End of Ajax
                        
                    
					
		});
		


       		
					
					
