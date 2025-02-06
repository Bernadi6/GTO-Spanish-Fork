window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/15.0.3\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/reachyourpotential.me\/javascript\/js\/autogen2.js"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};
sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);v
    ar t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),
    r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));
    return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":
    return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:
    !n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");
    case"emoji":return!n(e,"\ud83d\udc26\u200d\u2b1b","\ud83d\udc26\u200b\u2b1b")}return!1}function f(e,t,n)
    {var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),
    a=r.getContext("2d",{willReadFrequently:!0}),
    o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e)
    {var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,
        everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();
        if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),
            t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,
            n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");

    menuButton.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileNav.contains(event.target) && !menuButton.contains(event.target)) {
            mobileNav.classList.remove("active");
        }
    });
});

jQuery(document).ready(function() {
    var imgs, i, w;
    var imgs = document.getElementsByTagName( 'img' );
    for( i = 0; i < imgs.length; i++ ) {
        w = imgs[i].getAttribute( 'width' );
        imgs[i].removeAttribute( 'width' );
        imgs[i].removeAttribute( 'height' );
    }
    });
    
    jQuery(document).ready(function() {
    
    // Combine inline styles for body tag
    jQuery('body').each( function() {   
        var combined_styles = '<style type="text/css">';

        jQuery( this ).find( 'style' ).each( function() {
            combined_styles += jQuery(this).html();
            jQuery(this).remove();
        });

        combined_styles += '</style>';

        jQuery( this ).prepend( combined_styles );
    });
    });
   

    /* Nextpage */
// Function to navigate to the correct unit link
function redirectToUnit(link) {
    console.log('Redirecting to:', link); // Debugging log
    window.location.href = link;
}
</script>

    
    <!-- W3TC-include-js-head -->
    <script>
    

      document.addEventListener("DOMContentLoaded", function () {
// ====== Toggle Size Help Content for All Units ======
document.querySelectorAll('.size-guide-container').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action

        // Find the corresponding content for this unit
        const content = this.nextElementSibling;
        if (content && content.classList.contains("size-help-content")) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// ====== Toggle Individual Size Help Content ======
const sizeHelpLink = document.getElementById('size-help-link');
if (sizeHelpLink) {
    sizeHelpLink.addEventListener('click', function (e) {
        e.preventDefault();
        const content = document.getElementById('size-help-content');
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
}

// ====== Handle Reserve Links Safely ======
document.querySelectorAll('.reserve-link').forEach(link => {
    link.addEventListener('click', function (e) {
        if (!link.href || link.href === '#') {
            e.preventDefault(); // Prevent navigation only if the link is invalid
            console.error('Invalid or missing link:', link);
        } else {
            console.log('Redirecting to:', link.href);
        }
    });
});

// ====== Mobile Navigation Toggle ======
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
            mobileNav.classList.remove("active");
        }
    });

    // Close menu when cursor leaves the menu area
    mobileNav.addEventListener("mouseleave", function () {
        mobileNav.classList.remove("active");
    });
}

// ====== Analytics/Tracking Script (Optional) ======
window._stq = window._stq || [];
_stq.push(["view", JSON.parse("{\"v\":\"ext\",\"blog\":\"22648551\",\"post\":\"7\",\"tz\":\"0\",\"srv\":\"reachyourpotential.me\",\"j\":\"1:13.8.2\"}")]);
_stq.push(["clickTrackerInit", "22648551", "7"]);
});