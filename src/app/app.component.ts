import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'stampromo-store';

  ngOnInit(): void {
    var searchTrigger = $('a.search-active'),
      endTriggersearch = $('button.search-close'),
      container = $('.main-search-active');
    searchTrigger.on('click', function(e: any) {
      e.preventDefault();
      container.addClass('inside');
    });
    endTriggersearch.on('click', function() {
      container.removeClass('inside');
    });

    if ($('.setting-wrap').length) {
      var $body2 = $('body'),
        $parloDropdown2 = $('.setting-wrap'),
        $parloDropdownMenu2 = $parloDropdown2.find('.setting-content');
      $parloDropdown2.on('click', '.setting-active', function(e:any) {
        e.preventDefault();
        var $this = $('.setting-content');
        if (!$this.parent().hasClass('show')) {
          $this.siblings('.setting-content').addClass('show').slideDown().parent().addClass('show');
        } else {
          $this.siblings('.setting-content').removeClass('show').slideUp().parent().removeClass('show');
        }
      });
      /*Close When Click Outside*/
      $body2.on('click', function(e:any) {
        var $target = e.target;
        if (!$($target).is('.setting-wrap') && !$($target).parents().is('.setting-wrap') && $parloDropdown2.hasClass('show')) {
          $parloDropdown2.removeClass('show');
          $parloDropdownMenu2.removeClass('show').slideUp();
        }
      });
    }

  }

  openModal(id: string) {
    alert('hola')
    $(`#${id}`).modal('show')
  }
}
