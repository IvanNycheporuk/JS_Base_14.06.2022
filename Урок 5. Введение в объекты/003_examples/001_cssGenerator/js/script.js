function onRangeChange(){
    // gets values from range inputs
    var tlc = document.getElementById('tlc').value; // tlc top left corner
    var trc = document.getElementById('trc').value;
    var blc = document.getElementById('blc').value;
    var brc = document.getElementById('brc').value;

    // gets text from spans
    var ttl = document.getElementById('ttl'); // ttl - text top left
    var ttr = document.getElementById('ttr');
    var tbl = document.getElementById('tbl');
    var tbr = document.getElementById('tbr');

    // sets values from range inouts to spans
    ttl.innerHTML = tlc;
    ttr.innerHTML = trc;
    tbl.innerHTML = blc;
    tbr.innerHTML = brc;

    // get block by id
    var block = document.getElementById('block');

    // sets pixels to corner

    block.style.borderRadius = trc + "px " + tlc + "px " + blc + "px " + brc + "px ";
}