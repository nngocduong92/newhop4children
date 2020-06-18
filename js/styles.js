

// // function Get_Cookie(name) {

// // 	var start = document.cookie.indexOf(name + "=");	
// // 	var len = start + name.length + 1;
// // 	if ((!start) &&
// // 		(name != document.cookie.substring(0, name.length))) {
// // 		return null;
// // 	}
// // 	if (start == -1)
// // 		return null;
// // 	var end = document.cookie.indexOf(";", len);
// // 	if (end == -1)
// // 		end = document.cookie.length;
// // 	return unescape(document.cookie.substring(len, end));
// // }
// // function Set_Cookie(name, value, exdays, path, domain, secure, url) {
// // 	var exdate = new Date();
// // 	exdate.setTime(exdate.getTime() + (exdays * 24 * 60 * 60 * 1000));
// // 	var exdate = new Date(exdate.valueOf());	

// // 	document.cookie = name + "=" + escape(value) +
// // 		((exdays) ? ";expires=" + exdate.toUTCString() : "") +
// // 		((path) ? ";path=" + path : "") +
// // 		((domain) ? ";domain=" + domain : "") +
// // 		((secure) ? ";secure" : "");
// // 	//Add_popup(url);

// // }
// // function Delete_Cookie(name, path, domain) {
// // 	if (Get_Cookie(name))
// // 		document.cookie = name + "=" +
// // 			((path) ? ";path=" + path : "") +
// // 			((domain) ? ";domain=" + domain : "") +
// // 			";expires=Mon, 11-November-2000 00:00:01 GMT";
// // }
// // function isLove(idproduct){
	
// // 	var data_love = {
// // 	islove:idproduct}
// // 	$.ajax({
// // 		type : 'POST',
// // 		url : baseDir + 'product.php',
// // 		async : false,
// // 		cache : false,
// // 		dataType : "text",
// // 		data : data_love ,
// // 		success : function (msg) {
			
// // 			if(msg>0){
// // 				$('.loves_'+idproduct).addClass('loved')
// // 			}else{
// // 				$('.loves_'+idproduct).removeClass('loved')
// // 			}
// // 		},
// // 		error : function (XMLHttpRequest, textStatus, errorThrown) {
// // 			removeHandleHTML();
// // 			alert("TECHNICAL ERROR: unable to confirm payment \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);
// // 		}
// // 	});
	
// // }


$(document).ready(function () {	 
// //
// 	/*lightbox.option({
//       'resizeDuration': 200,
//       'maxHeight': 550,
//       'wrapAround': true
//     });*/


	//$('.itemslide').carousel()
	$("#itemslides_page").owlCarousel({	
	  navigation : true, 
	  autoPlay: 6000,
	   margin:10,
	  slideSpeed : 1000,
	  paginationSpeed : 400,
	  pagination:false,
	  paginationNumbers: false,	  
		autoWidth:true,
		items:4
	});
	
	// $('.itemslide').carousel()
	$("#itemslidem").owlCarousel({	
	  navigation : true, 
	  autoPlay: 6000,
	  slideSpeed : 1000,
	  paginationSpeed : 400,
	  pagination:false,
	  paginationNumbers: false,	  
	  singleItem:4	
	});
	if(page_name =='news'){
		$('#sidebar').attr('style','min-height:'+$('.pagenews').height());
	}

	
// 	// $("#itemslide").owlCarousel({	
// 	//   navigation : true, 
// 	//   autoPlay: 5000,
// 	//   slideSpeed : 1000,
// 	//   paginationSpeed : 400,
// 	//   pagination:false,
// 	//   paginationNumbers: false,	  
// 	//   singleItem:true	
// 	// });
// 	// $("#itemslides").owlCarousel({	
// 	//   navigation : true, 
// 	//   autoPlay: 5000,
// 	//   slideSpeed : 1000,
// 	//   paginationSpeed : 400,
// 	//   pagination:false,
// 	//   paginationNumbers: false,	  
// 	//   singleItem:true	
// 	// });
// 	//slide index
// 	if(page_name=="index"){
// 		var tpj=jQuery;				
// 				tpj.noConflict();				
// 				var revapi1;
				
// 				// tpj(document).ready(function() {
								
// 				// if(tpj('#rev_slider_1_1').revolution == undefined)
// 				// 	revslider_showDoubleJqueryError('#rev_slider_1_1');
// 				// else
// 				//    revapi1 = tpj('#rev_slider_1_1').show().revolution(
// 				// 	{
// 				// 		dottedOverlay:"none",
// 				// 		delay:9000,
// 				// 		startwidth:960,
// 				// 		startheight:383,
// 				// 		hideThumbs:0,
						
// 				// 		thumbWidth:100,
// 				// 		thumbHeight:50,
// 				// 		thumbAmount:5,
						
// 				// 		navigationType:"bullet",
// 				// 		navigationArrows:"solo",
// 				// 		navigationStyle:"round",
						
// 				// 		touchenabled:"off",
// 				// 		onHoverStop:"on",
						
												
// 				// 		keyboardNavigation:"off",
						
// 				// 		navigationHAlign:"center",
// 				// 		navigationVAlign:"bottom",
// 				// 		navigationHOffset:0,
// 				// 		navigationVOffset:20,

// 				// 		soloArrowLeftHalign:"left",
// 				// 		soloArrowLeftValign:"center",
// 				// 		soloArrowLeftHOffset:20,
// 				// 		soloArrowLeftVOffset:0,

// 				// 		soloArrowRightHalign:"right",
// 				// 		soloArrowRightValign:"center",
// 				// 		soloArrowRightHOffset:20,
// 				// 		soloArrowRightVOffset:0,
								
// 				// 		shadow:3,
// 				// 		fullWidth:"off",
// 				// 		fullScreen:"off",

// 				// 		spinner:"spinner3",
						
// 				// 		stopLoop:"off",
// 				// 		stopAfterLoops:-1,
// 				// 		stopAtSlide:-1,

						
// 				// 		shuffle:"off",
						
												
												
												
												
												
// 				// 		hideThumbsOnMobile:"off",
// 				// 		hideNavDelayOnMobile:1500,						hideBulletsOnMobile:"on",
// 				// 		hideArrowsOnMobile:"on",
// 				// 		hideThumbsUnderResolution:0,
						
// 				// 		hideSliderAtLimit:0,
// 				// 		hideCaptionAtLimit:768,
// 				// 		hideAllCaptionAtLilmit:0,
// 				// 		startWithSlide:0,
// 				// 		//videoJsPath:"http://ffscvn.org/wp-content/plugins/revslider/rs-plugin/videojs/",
// 				// 		fullScreenOffsetContainer: ""	
// 				// 	});
				
// 				// });	//ready
		
// 	}
	
				
				
				
// 	//slide product
// 	var tpj=jQuery;				
// 				tpj.noConflict();				
// 				var revapi7;
				
// 				tpj(document).ready(function() {
								
// 				if(tpj('#rev_slider_7_1').revolution == undefined)
// 					revslider_showDoubleJqueryError('#rev_slider_7_1');
// 				else
// 				   revapi7 = tpj('#rev_slider_7_1').show().revolution(
// 					{
// 						dottedOverlay:"none",
// 						delay:9000,
// 						startwidth:670,
// 						startheight:250,
// 						hideThumbs:0,
						
// 						thumbWidth:100,
// 						thumbHeight:50,
// 						thumbAmount:4,
						
// 						navigationType:"bullet",
// 						navigationArrows:"solo",
// 						navigationStyle:"round",
						
// 						touchenabled:"off",
// 						onHoverStop:"on",
						
												
// 						keyboardNavigation:"off",
						
// 						navigationHAlign:"center",
// 						navigationVAlign:"bottom",
// 						navigationHOffset:0,
// 						navigationVOffset:20,

// 						soloArrowLeftHalign:"left",
// 						soloArrowLeftValign:"center",
// 						soloArrowLeftHOffset:20,
// 						soloArrowLeftVOffset:0,

// 						soloArrowRightHalign:"right",
// 						soloArrowRightValign:"center",
// 						soloArrowRightHOffset:20,
// 						soloArrowRightVOffset:0,
								
// 						shadow:3,
// 						fullWidth:"off",
// 						fullScreen:"off",

// 						spinner:"spinner3",
						
// 						stopLoop:"off",
// 						stopAfterLoops:-1,
// 						stopAtSlide:-1,

						
// 						shuffle:"off",
						
												
												
												
												
												
// 						hideThumbsOnMobile:"off",
// 						hideNavDelayOnMobile:1500,						hideBulletsOnMobile:"on",
// 						hideArrowsOnMobile:"on",
// 						hideThumbsUnderResolution:0,
						
// 						hideSliderAtLimit:0,
// 						hideCaptionAtLimit:768,
// 						hideAllCaptionAtLilmit:0,
// 						startWithSlide:0,
// 						videoJsPath:"http://ffscvn.org/wp-content/plugins/revslider/rs-plugin/videojs/",
// 						fullScreenOffsetContainer: ""	
// 					});
				
// 				});	//ready
// 	//slide

	
	
	

// /*

		         	
// 	$('.fancy-select').hover(function(){	
// 		$(this).addClass('fancy-select-active');
// 	   $(this).find('ul').stop(true, true).delay(100).fadeIn(500);
// 	}, function() {
// 		$(this).removeClass('fancy-select-active');
// 		$(this).find('ul').stop(true, true).delay(200).fadeOut(100);
// 	});
	 
// 	  $('[data-toggle=offcanvas]').click(function() {
// 			$('.row-offcanvas').toggleClass('active');
// 			$('.sidebar-offcanvas').toggleClass('active');
// 		}); 
// 	$('.offcanvas-head .btn-offcanvas').click(function() {
//     $('.row-offcanvas').removeClass('active');
//     $('.sidebar-offcanvas').removeClass('active');
//   });

		
//             $('ul.nav li.dropdown').hover(function() {
			
// 				$(this).find('.dropdown-menu').addClass('show');
// 			  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
// 			}, function() {
				
// 				$(this).find('.dropdown-menu').removeClass('show');
// 			  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
// 			});
			
// 			$('ul.products-grid  li.item').hover(function() {			
// 			  $(this).find('ul.social-links').stop(true, true).delay(100).fadeIn(400);
// 			}, function() {
				
// 			  $(this).find('ul.social-links').stop(true, true).delay(200).fadeOut(400);
// 			});
			
// 		//.level-0
// 			 $('.mmenu li').click(function() {
// 				$('.dropdown-menu').removeClass('show');
// 				if(!$(this).hasClass( "open" )){
// 					$('.dropdown').removeClass('open');
// 					$(this).toggleClass('open');
// 				}
// 				else
// 					$(this).removeClass('open');
				
				 
// 			 });
			 
			 
		
// //icl_lang = icl_vars.current_language;
// //icl_home = icl_vars.icl_home;


// */

			
	
// })
// function addLoadEvent(func) {
//   var oldonload = window.onload;
//   if (typeof window.onload != 'function') {
//     window.onload = func;
//   } else {
//     window.onload = function() {
//       if (oldonload) {
//         oldonload();
//       }
//       func();
//     }
//   }  
// }
// function icl_retry_mtr(a){
//     var id = a.getAttribute('id');
//     spl = id.split('_');
//     var loc = location.href.replace(/#(.*)$/,'').replace(/(&|\?)(retry_mtr)=([0-9]+)/g,'').replace(/&nonce=([0-9a-z]+)(&|$)/g,'');
//     if(-1 == loc.indexOf('?')){
//         url_glue='?';
//     }else{
//         url_glue='&';
//     }    
//     location.href=loc+url_glue+'retry_mtr='+spl[3]+'&nonce='+spl[4];
//     return false;
})

