/*! jquery.ui.carousel.js © yamoo9.net, 2016 */
// --------------------------------------------------------------------------------------------
// TODO:
//
// 0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
// 1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
// 2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
// 3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
// 4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
// 5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
// 6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.
// 7. 객체 지향 자바스크립트 방식으로 코드를 변경한다. (e.g: new Carousel('#bs3-headphone') )
// --------------------------------------------------------------------------------------------

(function(global, $){
  'use strict';

  // 문서객체 참조
  var document = global.document;
  // 플러그인 모듈 내부 어디에서든 참조 가능하도록 초기 변수 설정
  var $widget;
  var $wrapper;
  var $panels;

  // 플러그인: 인스턴스 메소드
  var carousel = function() {
    $widget = this;
    // 컴포넌트 구현 초기화
    init();
    // 이벤트 연결
    bindEvents();
  };
  // 초기화 함수
  var init = function() {
    // 캐러셀 컴포넌트 객체 참조
    $wrapper = $widget.find('.ui-carousel-tabpanel-wrapper');
    $panels  = $wrapper.find('.ui-carousel-tabpanel');
    // 초기 실행
    settingWrapperSize();
    resizeCarouselHeight();
  };
  // 이벤트 연결 함수
  var bindEvents = function() {
    $(global).on('resize', resizeCarouselHeight);
  };
  // 래퍼 객체의 너비 설정 함수
  var settingWrapperSize = function() {
    // 컴포넌트 폭
    var panel_width = $widget.width();
    // 패널 폭 설정
    $panels.width( panel_width );
    // 래퍼 폭 설정
    var wrapper_width = panel_width * $panels.length;
    $wrapper.width(wrapper_width);
  };
  // 창 크기 조정에 따른 캐러셀 높이 조정 함수
  var resizeCarouselHeight = function () {
    $widget.height( $panels.height() );
  };

  // 플러그인으로 함수 연결
  if (!$.fn.carousel) {
    $.fn.carousel = carousel;
  }

})(this, this.jQuery);