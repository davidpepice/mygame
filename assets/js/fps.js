$(document).ready(function(){

    $("body").append('<div id="fpsbg" style="position:absolute; top:50px; left:8px; background-color:rgba(0,0,0,0.3); color:#ffffff;  padding:5px;border-radius:5px;">FPS: <span id="fps"></span></div>');


const fps = {
    sampleSize : 60,
    value : 0,
    _sample_ : [],
    _index_ : 0,
    _lastTick_: false,
    tick : function(){
        // if is first tick, just set tick timestamp and return
        if( !this._lastTick_ ){
            this._lastTick_ = performance.now();
            return 0;
        }
        // calculate necessary values to obtain current tick FPS
        let now = performance.now();
        let delta = (now - this._lastTick_)/1000;
        let fps = 1/delta;
        // add to fps samples, current tick fps value
        this._sample_[ this._index_ ] = Math.round(fps);

        // iterate samples to obtain the average
        let average = 0;
        for(i=0; i<this._sample_.length; i++) average += this._sample_[ i ];

        average = Math.round( average / this._sample_.length);

        // set new FPS
        this.value = average;
        
        // store current timestamp
        this._lastTick_ = now;
        // increase sample index counter, and reset it
        // to 0 if exceded maximum sampleSize limit
        this._index_++;
        if( this._index_ === this.sampleSize) this._index_ = 0;
        return this.value;
    }
}

function loop(){
    let fpsValue = fps.tick();
    window.fps.innerHTML = fpsValue;
    requestAnimationFrame( loop );
    if (fpsValue <= 10) {
        window.fps.style.color = "red";
    } 
    else if (fpsValue <= 20) {
        window.fps.style.color = "red";
    }
    else if (fpsValue <= 30) {
        window.fps.style.color = "yellow";
    }
   else if (fpsValue <= 40) {
        window.fps.style.color = "blue";
    }
    else if (fpsValue >= 50) {
        window.fps.style.color = "green";
    }
}

// set FPS calulation based in the last 120 loop cicles
fps.sampleSize = 120;
// start loop
loop();


});