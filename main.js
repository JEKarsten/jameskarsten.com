var header = '<header>\
<div id="head">\
    <a href="index.html"><span id="name-first">James</span><span id="name-last">Karsten</span></a>\
</div>\
<div id="navigation">\
    <div class="dropdown">\
        <a href="photography.html" class="nav-level-1">Photography</a>\
        <div class="nav-level-2">\
            <a href="portrait">Portrait</a>\
            <a href="nature.html">Nature & Urban</a>\
            <a href="film.html">B&W Film</a>\
        </div>\
    </div>\
    <a href="/about" class="nav-level-1">About</a>\
    <a href="contact" class="nav-level-1">Contact</a>\
</div>\
</header>';

var footer = '<footer> \
<div id="copyright">\
    Copyright &copy; 2020 James Karsten. All rights reserved.\
</div>\
</footer>';



document.getElementById("headerInclude").innerHTML=header
document.getElementById("footerInclude").innerHTML=footer