
import { WaveformDrawer } from './waveformDrawer.js';

window.onload = init;

let canvas, waveformDrawer;
let decodedBuffer;
let audioContext = new AudioContext();

async function init() {
    canvas = document.querySelector("#myCanvas");

    decodedBuffer = await loadSample("./assets/Funky-Guitar.mp3");

    waveformDrawer = new WaveformDrawer();

    waveformDrawer.init(decodedBuffer, canvas, "green");

    waveformDrawer.drawWave();

}

async function loadSample(url){
    console.log('done');
    return new Promise(function(resolve, reject){
        fetch(url).then((response) => {
            return response.arrayBuffer();
        }).then((buffer) => {
            audioContext.decodeAudioData(buffer, (decodedAudioData) =>{
                resolve(decodedAudioData);
            });
        });
    });
}


