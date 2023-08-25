let playBtn = `Button_module_button__f5fb72bd
  shared_module_focusable__63d26f6d
  Button_module_customColor__f5fb72bd
  Button_module_md__f5fb72bd
  Button_module_icon__f5fb72bd
  Tooltip_module_tooltipContainer__21ae5b80
  exclude-global-button-styles
  PlayButton_module_playButton__c50ea884
  shared_module_focusable__63d26f6d`;

//   Play aria-label="Play"
//   Pause aria-label="Pause"
const newBtn = document.querySelector(
  '.PlayButton_module_playButton__c50ea884'
);
newBtn.setAttribute('aria-label', 'Pause');

const iconBtn = document.querySelector('.PlayButton_module_playIcon__c50ea884');
iconBtn.setAttribute('data-pause-icon', 'true');
iconBtn.setAttribute('data-play-icon', 'true');
iconBtn.removeAttribute('data-play-icon');

// :

// Obtendo a referência para o elemento

// const vimeoBtn = document.querySelector('#playerVimeo iframe #player')
// const vimeoBtn = document.getElementById('player')
function testing() {
  const vimeoBtn = document.querySelector(
    '.Tooltip_module_playTooltip__21ae5b80'
  );
  if (vimeoBtn) {
    console.log(vimeoBtn);
    vimeoBtn.click();
    console.log('Achou!');
  } else {
    console.log('Não achou!');
    setTimeout(testing, 500);
  }
}
testing();
// #########################
function updateAndShowTime() {
  // document.querySelector('.Tooltip_module_playTooltip__21ae5b80').click();
  var progressBar = document.querySelector(
    '.FocusTarget_module_focusTarget__02e194b8'
  );
  if (progressBar) {
    var timeText = progressBar.getAttribute('aria-valuetext');
    console.log('Texto do tempo:', timeText);
  } else {
    console.log('Três...');
    setTimeout(updateAndShowTime, 500);
  }
}

updateAndShowTime();

var interval = setInterval(updateAndShowTime, 1000);

// #############################
function checkElement() {
  const progressBar = document.querySelector(
    '.FocusTarget_module_focusTarget__02e194b8'
  );
  console.log('Um...');
  if (progressBar) {
    console.log('Dois...');
    var timeText = progressBar.getAttribute('aria-valuetext');
    console.log('Texto do tempo:', timeText);
  } else {
    console.log('Três...');
    setTimeout(checkElement, 100);
  }
}

checkElement();

/*
<div class="FocusTarget_module_focusTarget__02e194b8
shared_module_focusable__63d26f6d" role="slider"
aria-label="Barra de progresso"
aria-valuemin="0"
aria-valuemax="236.276"
aria-valuenow="11"
aria-valuetext="00:10 de 03:56"
tabindex="0"
data-progress-bar-focus-target="true">
</div>
*/
