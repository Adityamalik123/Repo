$(document).ready(function(){    
	var el = document.getElementById("work");
	iframe = document.getElementById('ymIframeId');
	el.addEventListener("click", function(){
		iframe.contentWindow.postMessage(JSON.stringify({event_code:'ym-client-event', data: JSON.stringify({
                                event: {
                                    code: "products",
                                    data: {
					    title:"dd",
					    agenda:"tt",
					    data_main:$(".CodeMirror-code span")[0].innerHTML
				    },
                                }
                            })
	
								}), 'https://chat.botplatform.io');
   
		}, false); 
});
