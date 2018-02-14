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
					    data_main:document.querySelector(".CodeMirror-selectedtext").innerHTML
				    },
                                }
                            })}), 'https://chat.botplatform.io');
   
		}, false); 
});
