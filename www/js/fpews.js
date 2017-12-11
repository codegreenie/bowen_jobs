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
			            color : 'blue'
			        },
			        {
			            text: 'Staff',
			            bold : true,
			            color : 'blue'
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


	$$('form.ajax-submit').on('form:success', function (e) {
					 
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








myApp.onPageInit('allstudents', function(page){

			

			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/load_all_students.php", function(data){

						$$(".load-all-students").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


});





myApp.onPageInit('allstaffs', function(page){

			

			$$.get("http://tmlng.com/Mobile_app_repo/php_hub/_Fpe_Work_Study/load_all_staffs.php", function(data){

						$$(".load-all-staffs").html(data);
				}, function(){

					myApp.alert("Network Error, Try again.");

				});


});