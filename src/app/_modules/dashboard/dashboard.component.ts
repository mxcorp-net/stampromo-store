import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../../_components/carousel/carousel.component';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var header = $('.sticky-bar');
    var win = $(window);
    win.on('scroll', function() {
      var scroll = win.scrollTop();
      if (scroll < 200) {
        header.removeClass('stick');
      } else {
        header.addClass('stick');
      }
    });

    $('.slider-active-2').owlCarousel({
      loop: true,
      nav: true,
      autoplay: false,
      navText: ['<i class="sli sli-arrow-up"></i>', '<i class="sli sli-arrow-down"></i>'],
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      item: 1,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })


  }

}
