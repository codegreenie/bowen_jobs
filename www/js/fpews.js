/********App Initialization *************/
var myApp = new Framework7({

    material : true,
    //materialRipple : true,
    materialRippleElements : '.ripple',
    modalTitle : 'FPE Work Study',
    swipePanel : 'both',
    fastClicks : false
  });

// Export selectors engine
var $$ = Dom7;



// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
/********App Initialization *************/



myApp.onPageInit('*', function(page){

	$$(".admin-logout-btn").on("click", function(){

			mainView.router.loadPage("index.html");
	});

});



myApp.onPageInit('startPage', function(page){

	$$('#select-user').on('click', function () {
			    var buttons = [
			        {
			            text: 'Account Type',
			            label: true
			        },
			        {
			            text: 'Student',
			            bold: true,
			            color : 'blue',
			            onClick : function(){mainView.router.loadPage('studentlogin.html')}
			        },
			        {
			            text: 'Staff',
			            bold : true,
			            color : 'blue',
			            onClick : function(){mainView.router.loadPage('stafflogin.html')}
			        },
			        {
			            text: 'Admin',
			            color: 'red',
			            bold : true,
			            onClick : function(){mainView.router.loadPage('adminlogin.html')}
			        },
			    ];
			    myApp.actions(buttons);
			});



}).trigger();


















myApp.onPageInit('adminlogin', function(page){


	$$("#admin-login-btn").on('click', function(e){

					$$('form.admin-login').trigger('submit');

	});


	$$('form.admin-login').on('form:beforesend', function (e) {
					  
					  myApp.showPreloader(' ');
	});


	$$('form.admin-login').on('form:error', function (e) {
					  
						myApp.hidePreloader();
						myApp.alert("Network Error, Try again later");

	});


	$$('form.admin-login').on('form:success', function (e) {
					 
		 var xhr = e.detail.xhr; // actual XHR object

		 var data = e.detail.data; // Ajax response from action file
		 var data = JSON.parse(data);
		 myApp.hidePreloader();

		 console.log(data.login_status);
		 if(data.login_status == "Invalid Login"){

		 	myApp.alert("Invalid Login");
		 }
		 else if(data.login_status == "Please Complete the form!"){

		 	myApp.alert("Please Complete the form!");

		 }
		 else{

		 	mainView.router.loadPage("admindashboard.html");
		 }

	});





});



















myApp.onPageInit('admindashboard', function(page){


	$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/pending_jobs_counter.php", function(data){

			$$("#pending-jobs-count").html(data);
	}, function(){

		myApp.alert("Network Error, Try again.");

	});



	$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/students_profile_counter.php", function(data){

			$$("#students-profile-count").html(data);
	}, function(){

		myApp.alert("Network Error, Try again.");

	});


	$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/staffs_profile_counter.php", function(data){

			$$("#staffs-profile-count").html(data);
	}, function(){

		myApp.alert("Network Error, Try again.");

	});




});





myApp.onPageInit('addjob', function(page){


		var stfId = window.localStorage.getItem("Staff_SN");
		$$("#stf-id").val(stfId);

		$$("#add-job-btn").on('click', function(e){

					$$('form.add-new-job').trigger('submit');

	});


	$$('form.add-new-job').on('form:beforesend', function (e) {
					  
					  myApp.showPreloader(' ');
	});


	$$('form.add-new-job').on('form:error', function (e) {
					  
						myApp.hidePreloader();
						myApp.alert("Network Error, Try again later");

	});


	$$('form.add-new-job').on('form:success', function (e) {
					 
		 var xhr = e.detail.xhr; // actual XHR object

		 var data = e.detail.data; // Ajax response from action file
		 
		 myApp.hidePreloader();

		 console.log(data);
		
		 	mainView.router.loadPage("staffdashboard.html");
		 
	});




});






var suspendStudent, deleteStudent, activateStudent;
myApp.onPageInit('allstudents', function(page){

			

			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/load_all_students.php", function(data){

						$$(".load-all-students").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});



			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/load_all_suspended_students.php", function(data){

						$$(".load-all-suspended-students").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


			suspendStudent = function(studentID){

				$$.post("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/suspend_student.php", {"student_id" : studentID}, function(data){

						mainView.router.reloadPage("allstudents.html");

				}, function(){

					myApp.alert("Network Error, Try again.");

				});

			}



			activateStudent = function(studentID){

				$$.post("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/activate_student.php", {"student_id" : studentID}, function(data){

						mainView.router.reloadPage("allstudents.html#tab2");

				}, function(){

					myApp.alert("Network Error, Try again.");

				});

			}





			deleteStudent = function(studentID){

				$$.post("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/delete_student.php", {"student_id" : studentID}, function(data){

						mainView.router.reloadPage("allstudents.html");

				}, function(){

					myApp.alert("Network Error, Try again.");

				});

			}


});








var suspendStaff, deleteStaff, activateStaff;
myApp.onPageInit('allstaffs', function(page){

			

			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/load_all_staffs.php", function(data){

						$$(".load-all-staffs").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/load_all_suspended_staffs.php", function(data){

						$$(".load-all-suspended-staffs").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


			suspendStaff = function(staffSN){

				$$.post("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/suspend_staff.php", {"staff_sn" : staffSN}, function(data){

						mainView.router.reloadPage("allstaffs.html");

				}, function(){

					myApp.alert("Network Error, Try again.");

				});

			}




			activateStaff = function(staffSN){

				$$.post("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/activate_staff.php", {"staff_sn" : staffSN}, function(data){

						mainView.router.reloadPage("allstaffs.html#tab2");

				}, function(){

					myApp.alert("Network Error, Try again.");

				});

			}




			deleteStaff = function(staffSN){

				$$.post("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/delete_staff.php", {"staff_sn" : staffSN}, function(data){

						mainView.router.reloadPage("allstaffs.html");

				}, function(){

					myApp.alert("Network Error, Try again.");

				});

			}


});





var deleteJob, approveJob;

myApp.onPageInit('pendingjobs', function(page){

			approveJob = function(jobSN){

				$$.post("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/admin_job_approver.php", {'job_identity' : jobSN}, function(data){

					if(data == "Approved!"){

						mainView.router.reloadPage("pendingjobs.html");
					}
					else{

						myApp.alert("Approval error occured. Try later");
					}


				}, function(){

					myApp.alert("Network Error, Try again.");

				});
			}


			deleteJob = function(jobSN){


				myApp.alert("Wayoooo!");
			}




			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/load_pending_jobs.php", function(data){

						$$(".load-pending-jobs").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


			

});




myApp.onPageInit('addstudent', function(page){


	$$("#add-new-student-btn").on('click', function(e){

			$$('form.add-new-student').trigger('submit');

	});


	$$('form.add-new-student').on('form:beforesend', function (e) {
					  
					  myApp.showPreloader(' ');
	});


	$$('form.add-new-student').on('form:error', function (e) {
					  
						myApp.hidePreloader();
						myApp.alert("Network Error, Try again later");

	});


	$$('form.add-new-student').on('form:success', function (e) {
					 
		 var xhr = e.detail.xhr; // actual XHR object

		 var data = e.detail.data; // Ajax response from action file
		 
		 myApp.hidePreloader();
		 if(data == "Done"){

		 	mainView.router.loadPage("allstudents.html");
		 }

		 else{

		 	myApp.alert(data);
		 }

		 console.log(data);
		 

	});


});










myApp.onPageInit('addstaff', function(page){


	$$("#add-new-staff-btn").on('click', function(e){

			$$('form.add-new-staff').trigger('submit');

	});


	$$('form.add-new-staff').on('form:beforesend', function (e) {
					  
					  myApp.showPreloader(' ');
	});


	$$('form.add-new-staff').on('form:error', function (e) {
					  
						myApp.hidePreloader();
						myApp.alert("Network Error, Try again later");

	});


	$$('form.add-new-staff').on('form:success', function (e) {
					 
		 var xhr = e.detail.xhr; // actual XHR object

		 var data = e.detail.data; // Ajax response from action file
		 
		 myApp.hidePreloader();
		 if(data == "Done"){

		 	mainView.router.loadPage("allstaffs.html");
		 }

		 else{

		 	myApp.alert(data);
		 }

		 console.log(data);
		 

	});


});







myApp.onPageInit('stafflogin', function(page){


	$$("#staff-login-btn").on('click', function(e){

					$$('form.staff-login').trigger('submit');

	});


	$$('form.staff-login').on('form:beforesend', function (e) {
					  
					  myApp.showPreloader(' ');
	});


	$$('form.staff-login').on('form:error', function (e) {
					  
						myApp.hidePreloader();
						myApp.alert("Network Error, Try again later");

	});


	$$('form.staff-login').on('form:success', function (e) {
					 
		 var xhr = e.detail.xhr; // actual XHR object

		 var datas = e.detail.data; // Ajax response from action file
		 var datas2 = JSON.parse(datas);
		 myApp.hidePreloader();

		 console.log(datas2.login_status);
		 if(datas2.login_status == "Invalid Login"){

		 	myApp.alert("Invalid Login");
		 }
		 else if(datas2.login_status == "Please Complete the form!"){

		 	myApp.alert("Please Complete the form!");

		 }
		 else{

		 	window.localStorage.setItem("Staff_SN", datas2.staff_sn);
		 	mainView.router.loadPage("staffdashboard.html");
		 }

	});





});














var loadJobApplications;
myApp.onPageInit('staffdashboard', function(page){

			
var staffSN = window.localStorage.getItem("Staff_SN");

			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/staff_jobs_puller.php", {'staff_sn' : staffSN},function(data){

						$$(".load-staff-active-jobs").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});



			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/staff_pending_jobs_puller.php", {'staff_sn' : staffSN},function(data){

						$$(".load-staff-pending-jobs").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


			loadJobApplications = function(jobSN){


				$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/job_applicants_puller.php", {'job_sn' : jobSN},function(data){

						window.localStorage.setItem("applicantsData", data);
						mainView.router.loadPage("staffapplicants.html");
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


			}

});





myApp.onPageInit('staffapplicants', function(page){


	var ApplicantsData = window.localStorage.getItem("applicantsData");
	$$("#staff-job-applicants-loader").html(ApplicantsData);



});







myApp.onPageInit('studentdashboard', function(page){

			
var staffSN = window.localStorage.getItem("Staff_SN");

			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/student_job_puller.php", function(data){

						$$(".load-student-jobs").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


});









myApp.onPageInit('studentlogin', function(page){


	$$("#student-login-btn").on('click', function(e){

					$$('form.student-login').trigger('submit');

	});


	$$('form.student-login').on('form:beforesend', function (e) {
					  
					  myApp.showPreloader(' ');
	});


	$$('form.student-login').on('form:error', function (e) {
					  
						myApp.hidePreloader();
						myApp.alert("Network Error, Try again later");

	});


	$$('form.student-login').on('form:success', function (e) {
					 
		 var xhr = e.detail.xhr; // actual XHR object

		 var datas = e.detail.data; // Ajax response from action file
		 var datas2 = JSON.parse(datas);
		 myApp.hidePreloader();

		 console.log(datas2.login_status);
		 if(datas2.login_status == "Invalid Login"){

		 	myApp.alert("Invalid Login");
		 }
		 else if(datas2.login_status == "Please Complete the form!"){

		 	myApp.alert("Please Complete the form!");

		 }
		 else{

		 	window.localStorage.setItem("student_SN", datas2.student_sn);
		 	mainView.router.loadPage("studentdashboard.html");
		 }

	});





});

