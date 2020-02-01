'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 15;
var FONT_GAP = 25;
var NUMBER_GAP = 40;
var BAR_WIDTH = 40;
var BAR_GAP = 90;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomValue = function (min, max) {
  return Math.random() * (max - min) + min;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud.fillStyle = 'red';
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '15px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.textBaseline = 'hanging';
    ctx.fillText(names[i], CLOUD_X + GAP * 2 + (BAR_GAP * i), CLOUD_HEIGHT - GAP);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + getRandomValue(0, 100) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP * 2 + (BAR_GAP * i), CLOUD_HEIGHT - FONT_GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP * 2 + (BAR_GAP * i), CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime - NUMBER_GAP);
  }
};
