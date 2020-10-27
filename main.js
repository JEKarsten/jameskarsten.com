var header = '<header>\
<div id="head">\
    <a href="index"><span id="name-first">James</span><span id="name-last">Karsten</span></a>\
</div>\
<div id="navigation">\
    <div class="dropdown">\
        <a href="/photography" class="nav-level-1">Photography</a>\
        <div class="nav-level-2">\
            <a href="/photography/composite">Composite</a>\
            <a href="/photography/portrait">Portrait</a>\
            <a href="/photography/nature-urban">Nature & Urban</a>\
            <a href="/photography/photofilm">Black & White Film</a>\
        </div>\
    </div>\
    <div class="dropdown">\
        <a href="/design" class="nav-level-1">Design</a>\
        <div class="nav-level-2">\
            <a href="/design/print">Print Media</a>\
            <a href="/design/logos">Logos</a>\
        </div>\
    </div>\
    <a href="/coding" class="nav-level-1">Coding</a>\
    <a href="/about" class="nav-level-1">About</a>\
</div>\
</header>';

var footer = '<footer> \
<div id="copyright">\
    Copyright &copy; 2020 James Karsten. All rights reserved.\
</div>\
</footer>';



document.getElementById("headerInclude").innerHTML=header
document.getElementById("footerInclude").innerHTML=footer