function generate_code() {
  var linkurl = document.getElementById("link").value;
  var imagelink = document.getElementById("imagelink").value;
  let line1 = document.getElementById("text1").value;
  var line2content;
  if (document.getElementById("rows2").checked) {
    line2content = "</br>" + document.getElementById("text2").value;
  } else {
    line2content = "";
  }
  let link = linkurl;
  let line2 = line2content;
  let image = imagelink;
  var ratio;
  var rows = $("input[name=rows]:checked").val();

  if (document.getElementById("ratioportrait").checked) {
    ratio = 'height = "55px"';
  } else if (document.getElementById("ratiolandscape").checked) {
    ratio = 'width = "55px"';
  } else {
    ratio = 'height = "55px" width = "55px"';
  }

  let imageratio = ratio;

  let banner_code = `{{subst:}}<div class="cnotice" id="{{{banner}}}">
  <a class="cnotice-full - banner - click external text" href="${link}">
    <div id = "cnotice-main" >
      <div class="cnotice-logo-container">
        <img src="${image}" alt = "Banner logo" ${imageratio}>
      </div>
      <div class="cnotice-message-container">
        <div class="cnotice-message">
          <p>${line1}${line2}</p>
        </div>
      </div>
    </div>
  </a>
  <div id="cnotice-toggle-box">
    <a href="#" title="{{int:centralnotice-shared-hide}}" onclick="mw.centralNotice.hideBanner();return false;">
      <img border="0" src="//upload.wikimedia.org/wikipedia/donate/a/ac/Close_oojs.png" alt="{{int:centralnotice-shared-hide}}" />
    </a>
  </div>
</div>`;

  if (link !== null) {
    document.getElementById("code").value = banner_code;
  }
$("#cnotice-message-p").html(line1+line2content); 
$(".cnotice").removeClass("hidden");
$("#cnotice-image").attr("src",image);
$("#cnotice-image").attr("src",image);
$(".cnotice-full-banner-click").attr("href",image);
}

function hideline2() {
  if (document.getElementById("rows2").checked) {
    $("#bannerline2").removeClass("hidden");
  } else {
    $("#bannerline2").addClass("hidden");
  }
}

function multilingual() {
  if (document.getElementById("multiyes").checked) {
    document.getElementById("text1").value = "{{{text1}}}";
    document.getElementById("text2").value = "{{{text2}}}";
  } else {
    document.getElementById("text1").value = "ONE LINE OF TEXT. IDEALLY BETWEEN 50-70 CHARACTERS";
    document.getElementById("text2").value = "ANOTHER LINE OF TEXT";
  }
}

function copyclipboard(){
  let textarea = document.getElementById("code");
  textarea.select();
  document.execCommand("copy");
}