import { Component,OnInit } from '@angular/core';
declare var $;
import {BlockchainServiceService} from './blockchain-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  user={
    username:'',
    orgName:''
}
message:any;

constructor(private phpService: BlockchainServiceService) { }

ngOnInit(){

}
  // ngOnInit() {
  //   $(window, document, undefined).ready(function() {

  //     $('input').blur(function() {
  //       var $this = $(this);
  //       if ($this.val())
  //         $this.addClass('used');
  //       else
  //         $this.removeClass('used');
  //     });
    
  //     var $ripples = $('.ripples');
    
  //     $ripples.on('click.Ripples', function(e) {
    
  //       var $this = $(this);
  //       var $offset = $this.parent().offset();
  //       var $circle = $this.find('.ripplesCircle');
    
  //       var x = e.pageX - $offset.left;
  //       var y = e.pageY - $offset.top;
    
  //       $circle.css({
  //         top: y + 'px',
  //         left: x + 'px'
  //       });
    
  //       $this.addClass('is-active');
    
  //     });
    
  //     $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  //       $(this).removeClass('is-active');
  //     });
    
  //   });
  // }
  onRegister(){   
    this.phpService      
    .onRegister(this.user);
  } 
  
}

