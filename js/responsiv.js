nbrStepNext = 0;
nbrStepPrevious = 0;
$(function (){  
   if($(window).width() >= 500){ 
   $('.next').click(function (){
        switch (nbrStepNext){
            case 0:
                $('.slider_item_right_1').animate({
                    top: '150px',
                    left: '995px',
                    height: '300px',
                    width: '300px',
                    zIndex: '1000'    
                }, 300);
    
                $('.slider_item_right_2').animate({
                    top: '100px',
                    left: '850px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2000'    
                }, 300);
    
                $('.slider_item_left_1').animate({
                    top: '150px',
                    left: '0',
                    height: '300px',
                    width: '300px',
                    zIndex: '1000'    
                }, 300);
    
                $('.slider_item_left_2').animate({
                    top: '100px',
                    left: '150px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2000'    
                }, 300);
    
                $('.slider_item_0').animate({
                    top: '50px',
                    left: '300px',
                    height: '500px',
                    width: '700px',
                    zIndex: '3000'    
                }, 300);
                break;
            case 1:
                $('.slider_item_left_2').css('z-index','3001');
                $('.slider_item_0').css('z-index','2001');
                $('.slider_item_left_1').css('z-index','2001');
                $('.slider_item_right_1').css('z-index','1001');
                $('.slider_item_right_2').css('z-index','1001');
                $('.slider_item_left_2').animate({
                    top: '50px',
                    left: '300px',
                    height: '500px',
                    width: '700px'
                }, 300);
                
                $('.slider_item_0').animate({
                    top: '100px',
                    left: '850px',
                    height: '400px',
                    width: '300px'
                }, 300);
                
                $('.slider_item_left_1').animate({
                    top: '100px',
                    left: '150px',
                    height: '400px',
                    width: '300px'
                }, 300);
    
                $('.slider_item_right_1').animate({
                    top: '150px',
                    left: '0',
                    height: '300px',
                    width: '300px'
                }, 300);
    
                $('.slider_item_right_2').animate({
                    top: '150px',
                    left: '995px',
                    height: '300px',
                    width: '300px',
                }, 300);
                break;
                
           case 2: 
               
               $('.slider_item_left_1').animate({
                    top: '50px',
                    left: '300px',
                    height: '500px',
                    width: '700px',
                    zIndex: '3002'
                }, 300);
                
                $('.slider_item_left_2').animate({
                    top: '100px',
                    left: '850px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2001'
                }, 300);
                
                $('.slider_item_right_1').animate({
                    top: '100px',
                    left: '150px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2001'
                }, 300);
    
                $('.slider_item_right_2').animate({
                    top: '150px',
                    left: '0',
                    height: '300px',
                    width: '300px',
                    zIndex: '1001'
                }, 300);
    
                $('.slider_item_0').animate({
                    top: '150px',
                    left: '995px',
                    height: '300px',
                    width: '300px',
                    zIndex: '1001'
                }, 300);
                break;
                
            case 3: 
                $('.slider_item_right_1').animate({
                    top: '50px',
                    left: '300px',
                    height: '500px',
                    width: '700px',
                    zIndex: '3002'
                }, 300);
                
                $('.slider_item_left_1').animate({
                    top: '100px',
                    left: '850px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2002'
                }, 300);
    
                $('.slider_item_right_2').animate({
                    top: '100px',
                    left: '150px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2000'
                }, 300);
    
                $('.slider_item_left_2').animate({
                    top: '150px',
                    left: '995px',
                    height: '300px',
                    width: '300px',
                    zIndex: '1002'
                }, 300);
    
                $('.slider_item_0').animate({
                    top: '150px',
                    left: '0',
                    height: '300px',
                    width: '300px',
                    zIndex: '1001'
                }, 300);
                break;
                
            case 4:
                
                $('.slider_item_right_2').animate({
                    top: '50px',
                    left: '300px',
                    height: '500px',
                    width: '700px',
                    zIndex: '3000'
                }, 300);
                
                $('.slider_item_right_1').animate({
                    top: '100px',
                    left:'850px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2002'
                }, 300);
                
                $('.slider_item_0').animate({
                    top: '100px',
                    left: '150px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2000'
                }, 300);
                
                $('.slider_item_left_1').animate({
                    top: '150px',
                    left: '995px',
                    height: '300px',
                    width: '300px',
                    zIndex: '1003'
                }, 300);
    
                $('.slider_item_left_2').animate({
                    top: '150px',
                    left: '0',
                    height: '300px',
                    width: '300px',
                    zindex: '1000'    
                }, 300);
    
                break;
            case 5 : 
                nbrStepNext = 0;
                $('.slider_item_0').animate({
                    top: '50px',
                    left: '300px',
                    height: '500px',
                    width: '700px',
                    zIndex: '3000'    
                }, 300);
                
                $('.slider_item_left_2').animate({
                    top: '100px',
                    left: '150px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2000'    
                }, 300);
                
                $('.slider_item_right_2').animate({
                    top: '100px',
                    left: '850px',
                    height: '400px',
                    width: '300px',
                    zIndex: '2000'    
                }, 300);
                
                $('.slider_item_right_1').animate({
                    top: '150px',
                    left: '995px',
                    height: '300px',
                    width: '300px',
                    zIndex: '1000'    
                }, 300);
    
                $('.slider_item_left_1').animate({
                    top: '150px',
                    left: '0',
                    height: '300px',
                    width: '300px',
                    zIndex: '1000'    
                }, 300);
    
                break;
        }
        nbrStepNext = nbrStepNext + 1;
    });
    nbrStepPrevious  = 0;
    $('.previous').click(function (){
            switch (nbrStepPrevious){
                case 0:
                        $('.slider_item_right_1').animate({
                        top: '150px',
                        left: '995px',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'                 
                    }, 300);
                    
                    $('.slider_item_right_2').animate({
                        top: '100px',
                        left: '850px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'        
                    }, 300);
                    
                    $('.slider_item_left_1').animate({
                        top: '150px',
                        left: '0',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'
                    }, 300);
                    
                    $('.slider_item_left_2').animate({
                        top: '100px',
                        left: '150px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'              
                    }, 300);
                    
                    $('.slider_item_0').animate({
                        top: '50px',
                        left: '300px',
                        height: '500px',
                        width: '700px',
                        zIndex: '3001'                   
                    }, 300);
                    break;
                case 1:
                    $('.slider_item_right_1').animate({
                        top: '100px',
                        left: '850px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'   
                    }, 300);
                    
                    $('.slider_item_right_2').animate({
                        top: '50px',
                        left: '300px',
                        height: '500px',
                        width: '700px',
                        zIndex: '3000'  
                    }, 300);
                    
                    $('.slider_item_left_1').animate({
                        top: '150px',
                        left: '995px',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'  
                    }, 300);
                    
                    $('.slider_item_left_2').animate({
                        top: '150px',
                        left: '0',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'  
                    }, 300);
                    
                    $('.slider_item_0').animate({
                        top: '100px',
                        left: '150px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'    
                    }, 300);
                    break;
                    
                case 2:
                    $('.slider_item_right_1').animate({
                        top: '50px',
                        left: '300px',
                        height: '500px',
                        width: '700px',
                        zIndex: '3001'      
                    }, 300);
                    
                    $('.slider_item_right_2').animate({
                        top: '100px',
                        left: '150px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'      
                    }, 300);
                    
                    $('.slider_item_left_1').animate({
                        top: '100px',
                        left: '850px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'     
                    }, 300);
                    
                    $('.slider_item_left_2').animate({
                        top: '150px',
                        left: '995px',
                        height: '300px',
                        width: '300px',
                        zIndex: '1000'      
                    }, 300);
                    
                    $('.slider_item_0').animate({
                        top: '150px',
                        left: '0',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'        
                    }, 300);
                    break;
                    
                case 3:
                    $('.slider_item_right_1').animate({
                        top: '100px',
                        left: '150px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001',         
                    }, 300);
                    
                    $('.slider_item_right_2').animate({
                        top: '150px',
                        left: '0',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'        
                    }, 300);
                    
                    $('.slider_item_left_1').animate({
                        top: '50px',
                        left: '300px',
                        height: '500px',
                        width: '700px',
                        zIndex: '3001'        
                    }, 300);
                    
                    $('.slider_item_left_2').animate({
                        top: '100px',
                        left: '850px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'      
                    }, 300);
                    
                    $('.slider_item_0').animate({
                        top: '150px',
                        left: '995px',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'            
                    }, 300);
                    break;
                    
                case 4:
                    $('.slider_item_right_1').animate({
                        top: '150px',
                        left: '0',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'             
                    }, 300);
                    
                    $('.slider_item_right_2').animate({
                        top: '150px',
                        left: '995px',
                        height: '300px',
                        width: '300px',
                        zIndex: '1000'    
                    }, 300);
                    
                    $('.slider_item_left_1').animate({
                        top: '100px',
                        left: '150px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'                 
                    }, 300);
                    
                    $('.slider_item_left_2').animate({
                        top: '50px',
                        left: '300px',
                        height: '500px',
                        width: '700px',
                        zIndex: '3001'          
                    }, 300);
                    
                    $('.slider_item_0').animate({
                        top: '100px',
                        left: '850px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'                
                    }, 300);
                    break;
                case 5:
                    nbrStepPrevious = 0;
                    $('.slider_item_right_1').animate({
                        top: '150px',
                        left: '995px',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'                 
                    }, 300);
                    
                    $('.slider_item_right_2').animate({
                        top: '100px',
                        left: '850px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'        
                    }, 300);
                    
                    $('.slider_item_left_1').animate({
                        top: '150px',
                        left: '0',
                        height: '300px',
                        width: '300px',
                        zIndex: '1001'
                    }, 300);
                    
                    $('.slider_item_left_2').animate({
                        top: '100px',
                        left: '150px',
                        height: '400px',
                        width: '300px',
                        zIndex: '2001'              
                    }, 300);
                    
                    $('.slider_item_0').animate({
                        top: '50px',
                        left: '300px',
                        height: '500px',
                        width: '700px',
                        zIndex: '3001'                   
                    }, 300);
                    break;
            }
        nbrStepPrevious = nbrStepPrevious + 1;
    });
   }
   if($(window).width() <= 500){
       nbrStepNextMobile = 1;
       $('.slider_navigation').click(function (){
          if(nbrStepNextMobile > 3){
              nbrStepNextMobile = 0;
          }
          $('.slider_item:visible').hide();
          $('.slider_item').eq(nbrStepNextMobile).fadeIn(1500);
          nbrStepNextMobile = nbrStepNextMobile + 1;
       });
   }
});