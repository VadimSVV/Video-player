$(document).ready(function() {
    $('video-player').each(function(index, videoPlayer) {

        //Выбор всех параметров
        let videoElement = $(videoPlayer).find('video');
        let elePlayPauseBtn = $(videoPlayer).find('toggle-play-pause');
        let eleStartTime = $(videoPlayer).find('.start-time');
        let eleEndTime = $(videoPlayer).find('.end-time');
        let eleVideoSeekBar = $(videoPlayer).find(.'video-seekBar');
        let eleVideoProgress = $(eleVideoSeekBar).find('.progress');
        let eleToggleVolume = $(videoPlayer).find('.toggle-volume');
        let eleVolumeSeekBar = $(videoPlayer).find('.volume-seekBar');
        let eleVolumeProgress = $(eleVolumeSeekBar).find('.progress');

        //Другие переменные
        let totalDurationInSecond = 0;
        let currentTime = 0;
        let currentDuration = null;
        let totalDuration = null;
        let seekPercentage = 0;
        let volumeValue = 1;
        let volumePercentage = 100;

        //Показывает или скрывает элементы управления
        $(videoPlayer).hover(
            () => $(videoPlayer).removeClass('hide-controls'),
            () => {
                if(!videoElement['0'].paused) {
                    $(videoPlayer).addClass('hide-controls');
                }
            }
        );

        //Обновление
        const updateSeekBar = () => {
            seekPercentage = helper_getPercentage(currentTime, totalDurationInSeconds);

            $(eleVideoProgress).css({width: `${seekPercentage}%`});
        };

        const updateVolumeBar = () => {
            $(eleVolumeProgress).css({width: `${volumePercentage}%`});
        };

        const updateTotalDuration = () => {
            $(eleEndTime).html(
                `${totalDuration.hours}:${totalDuration.minutes}:${totalDuration.seconds}`
            );
        };
        
        const updateCurrentTime = () => {
            $(eleStartTime).html(
                `${currentDuration.hours}:${currentDuration.minutes}:${currentDuration.seconds}`
            );
        };

        //Обновление каждой функции
        
    })