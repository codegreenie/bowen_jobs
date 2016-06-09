document.addEventListener("deviceready", maDeviceReady, false);



function maDeviceReady(){

    
    
    function changeDP(){
    navigator.camera.getPicture(succex, failz, {quality : 50, destinationType : Camera.DestinationType.DATA_URL });
    
    
        function succex(imageData){
        
                $("#tmp_image").attr("src", "data:img/jpeg:base64" + imageData);
        }
    
    
        function failz(message){ 
            
            console.log("DP Change failed!!!" + message);
        }
        
        
}
        
    
    
}