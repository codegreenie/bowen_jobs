$(document).ready(function(){ //Document Ready


	
	//$.support.cors = true;
	//$.mobile.allowCrossDomainPages = true;	
    
    
    $.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/pull_username.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".staff-profile span").html(replyFrmServer);
                
				 
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
    
    
    
        $.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/students_pull_username.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				
                $(".student-profile span").html(replyFrmServer);
				 
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
    
    
    
    
    
		
		
		//For Student

		
	
		
		$("#students_job_loader").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/available_jobs.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".students_active_jobs").append(replyFrmServer);
                 $("#students_job_loader").html("&nbsp;");
				 
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
    
    
    
    
        $("#students_job_loader").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/admin_available_jobs.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".admin_jobs_list").append(replyFrmServer);
                 $("#students_job_loader").html("&nbsp;");
				 
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
    
	
	
	
	
	$("#profile_update_status").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/pull_students_profile.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$("#load_profile").append(replyFrmServer);
                 $("#profile_update_status").html("&nbsp;");
				 
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
    
		
		
		
		
		
    
    
    
    $("#job_loader_1").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/ma_jobs_puller.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".active_jobs").append(replyFrmServer);
                 $("#job_loader_1").html("&nbsp;");
				 
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
    
    
    
    
    
    $("#job_loader_2").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/pending_jobs_puller.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".pending_jobs").append(replyFrmServer);
                 $("#job_loader_2").html("&nbsp;");
				 
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});
		
		
		
		$("#job_details_loader").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/job_details_puller.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".current_job_details").append(replyFrmServer);
                $("#job_details_loader").html("&nbsp;");
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
			
		});
		
		
		
		
		$("#students_job_details_loader").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/students_job_details_puller.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".students_current_job_details").append(replyFrmServer);
                $("#students_job_details_loader").html("&nbsp;");
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
			
		});
		

    
    $("#admin_job_details_loader").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/admin_job_details_loader.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".admin_current_job_details").append(replyFrmServer);
                $("#admin_job_details_loader").html("&nbsp;");
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
			
		});
		
		
		
		
		
		
		
		$("#job_applicants_loader").html("loading...");
		$.ajax({
			
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/job_applicants_puller.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				console.log("File has been found!");
				$(".the_job_applicants").append(replyFrmServer);
                $("#job_applicants_loader").html("&nbsp;");
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
			
		});
		
    
    
    
			/*$.ajax({
			url : "http://localhost/Mobile_app_repo/php_hub/_Fpe_Work_Study/dp_puller.php",
			dataType : "html",
			type : "GET",
			cache : true,
			crossDomain : true,
			success : function(replyFrmServer){
				
                 $(".student-profile > div").prepend(replyFrmServer);
			},
			
			error : function(jQXHR, error, status){
				console.log("couldn\"t find file " + error + status);
			}
		});*/
			
			
		
		
	
}); //End of Document Ready


