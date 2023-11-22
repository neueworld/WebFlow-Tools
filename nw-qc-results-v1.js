document.addEventListener("DOMContentLoaded", function() {
  var design = document.getElementById("design");
  var designR = document.getElementById("designR");
  var development = document.getElementById("development");
  var designD = document.getElementById("designD");
  var designDev = document.getElementById("design-dev");
  var designDs = document.getElementById("designDs");
  var scratch = document.getElementById("site-from-scratch");
  var ss = document.getElementById("ss");
  var designSystem = document.getElementById("design-system");
  var ds = document.getElementById("ds");
  var uiUxDesign = document.getElementById("ui-ux-design");
  var ud = document.getElementById("ud");
  var seo = document.getElementById("seo");
  var se = document.getElementById("se");
  var improveGraphics = document.getElementById("improve-graphics");
  var ig = document.getElementById("ig");
  var blog = document.getElementById("blog");
  var bl = document.getElementById("bl");
  var branding = document.getElementById("branding");
  var br = document.getElementById("br");
  var improveUiUx = document.getElementById("improve-ui-ux");
  var iu = document.getElementById("iu");
  var lottie = document.getElementById("lottie-animations");
  var la = document.getElementById("la");
  var landing = document.getElementById("landing-page");
  var lp = document.getElementById("lp");
  var oth = document.getElementById("others");
  var o = document.getElementById("o");
  var complexityLow = document.getElementById("complexity-low");
  var cs1 = document.getElementById("cs1");
  var complexityMedium = document.getElementById("complexity-medium");
  var cs2 = document.getElementById("cs2");
  var complexityHigh = document.getElementById("complexity-high");
  var cs3 = document.getElementById("cs3");
  var pages3 = document.getElementById("pages-3");
  var up1 = document.getElementById("up1");
  var pages6 = document.getElementById("pages-6");
  var up2 = document.getElementById("up2");
  var pages8 = document.getElementById("pages-8");
  var up3 = document.getElementById("up3");
  var pages9 = document.getElementById("pages-9");
  var up4 = document.getElementById("up4");
  var interactionsLow = document.getElementById("interactions-low");
  var interactions1 = document.getElementById("interactions1");
  var interactionsMedium = document.getElementById("interactions-medium");
  var interactions2 = document.getElementById("interactions2");
  var interactionsHigh = document.getElementById("interactions-high");
  var interactions3 = document.getElementById("interactions3");
  var cmsLow = document.getElementById("cms-low");
  var cms1 = document.getElementById("cms1");
  var cmsMedium = document.getElementById("cms-medium");
  var cms2 = document.getElementById("cms2");
  var cmsHigh = document.getElementById("cms-high");
  var cms3 = document.getElementById("cms3");
  var animationsLow = document.getElementById("animations-low");
  var animations1 = document.getElementById("animations1");
  var animationsMedium = document.getElementById("animations-medium");
  var animations2 = document.getElementById("animations2");
  var animationsHigh = document.getElementById("animations-high");
  var animations3 = document.getElementById("animations3");
  var seoBasic = document.getElementById("seo-basic");
  var seo1 = document.getElementById("seo1");
  var seoAdvanced = document.getElementById("seo-advanced");
  var seo2 = document.getElementById("seo2");
  var seoExpert = document.getElementById("seo-expert");
  var seo3 = document.getElementById("seo3");
  var timelineAsap = document.getElementById("timeline-asap");
  var ko1 = document.getElementById("ko1");
  var oneMonth = document.getElementById("one-month");
  var ko2 = document.getElementById("ko2");
  var flexible = document.getElementById("flexible");
  var ko3 = document.getElementById("ko3");

  function updateDisplay(checkbox, targetElement) {
    if (checkbox.checked) {
      targetElement.style.display = "block";
    } else {
      targetElement.style.display = "none";
    }
  }

  function checkInitialState(checkbox, targetElement) {
    // Check if the checkbox is checked on page load
    if (checkbox.checked) {
      targetElement.style.display = "block";
    } else {
      targetElement.style.display = "none";
    }
  }
  design.checked = true;
  scratch.checked = true;
  complexityLow.checked = true;
  pages3.checked = true;
  interactionsLow.checked = true;
  cmsLow.checked = true;
  animationsLow.checked = true;
  seoBasic.checked = true;
  timelineAsap.checked = true;

  checkInitialState(design, designR);
  checkInitialState(development, designD);
  checkInitialState(designDev, designDs);  
  checkInitialState(scratch, ss);
  checkInitialState(designSystem, ds);
  checkInitialState(uiUxDesign, ud);
  checkInitialState(seo, se);
  checkInitialState(improveGraphics, ig);
  checkInitialState(blog, bl);
  checkInitialState(branding, br);
  checkInitialState(improveUiUx, iu);
  checkInitialState(lottie, la);
  checkInitialState(landing, lp);
  checkInitialState(oth, o);
  checkInitialState(complexityLow, cs1);
  checkInitialState(complexityMedium, cs2);
  checkInitialState(complexityHigh, cs3);
  checkInitialState(pages3, up1);
  checkInitialState(pages6, up2);
  checkInitialState(pages8, up3);
  checkInitialState(pages9, up4);
  checkInitialState(interactionsLow, interactions1);
  checkInitialState(interactionsMedium, interactions2);
  checkInitialState(interactionsHigh, interactions3);
  checkInitialState(cmsLow, cms1);
  checkInitialState(cmsMedium, cms2);
  checkInitialState(cmsHigh, cms3);
  checkInitialState(animationsLow, animations1);
  checkInitialState(animationsMedium, animations2);
  checkInitialState(animationsHigh, animations3);
  checkInitialState(seoBasic, seo1);
  checkInitialState(seoAdvanced, seo2);
  checkInitialState(seoExpert, seo3);
  checkInitialState(timelineAsap, ko1);
  checkInitialState(oneMonth, ko2);
  checkInitialState(flexible, ko3);

  design.addEventListener("change", function() {
    updateDisplay(design, designR);
  });

  development.addEventListener("change", function() {
      updateDisplay(development, designD);
  });

  designDev.addEventListener("change", function() {
      updateDisplay(designDev, designDs);
  });
  
  scratch.addEventListener("change", function() {
    updateDisplay(scratch, ss);
  });

  designSystem.addEventListener("change", function() {
    updateDisplay(designSystem, ds);
  });

  uiUxDesign.addEventListener("change", function() {
    updateDisplay(uiUxDesign, ud);
  });

  seo.addEventListener("change", function() {
    updateDisplay(seo, se);
  });

  improveGraphics.addEventListener("change", function() {
    updateDisplay(improveGraphics, ig);
  });

  blog.addEventListener("change", function() {
    updateDisplay(blog, bl);
  });

  branding.addEventListener("change", function() {
    updateDisplay(branding, br);
  });

  improveUiUx.addEventListener("change", function() {
    updateDisplay(improveUiUx, iu);
  });

  lottie.addEventListener("change", function() {
    updateDisplay(lottie, la);
  });

  landing.addEventListener("change", function() {
    updateDisplay(landing, lp);
  });

  oth.addEventListener("change", function() {
    updateDisplay(oth, o);
  });
  
  complexityLow.addEventListener("change", function() {
    updateDisplay(complexityLow, cs1);
  });

  complexityMedium.addEventListener("change", function() {
      updateDisplay(complexityMedium, cs2);
  });

  complexityHigh.addEventListener("change", function() {
      updateDisplay(complexityHigh, cs3);
  });

  pages3.addEventListener("change", function() {
      updateDisplay(pages3, up1);
  });

  pages6.addEventListener("change", function() {
      updateDisplay(pages6, up2);
  });

  pages8.addEventListener("change", function() {
      updateDisplay(pages8, up3);
  });

  pages9.addEventListener("change", function() {
      updateDisplay(pages9, up4);
  });

  interactionsLow.addEventListener("change", function() {
      updateDisplay(interactionsLow, interactions1);
  });

  interactionsMedium.addEventListener("change", function() {
      updateDisplay(interactionsMedium, interactions2);
  });

  interactionsHigh.addEventListener("change", function() {
      updateDisplay(interactionsHigh, interactions3);
  });

  cmsLow.addEventListener("change", function() {
      updateDisplay(cmsLow, cms1);
  });

  cmsMedium.addEventListener("change", function() {
      updateDisplay(cmsMedium, cms2);
  });

  cmsHigh.addEventListener("change", function() {
      updateDisplay(cmsHigh, cms3);
  });

  animationsLow.addEventListener("change", function() {
      updateDisplay(animationsLow, animations1);
  });

  animationsMedium.addEventListener("change", function() {
      updateDisplay(animationsMedium, animations2);
  });

  animationsHigh.addEventListener("change", function() {
      updateDisplay(animationsHigh, animations3);
  });

  seoBasic.addEventListener("change", function() {
      updateDisplay(seoBasic, seo1);
  });

  seoAdvanced.addEventListener("change", function() {
      updateDisplay(seoAdvanced, seo2);
  });

  seoExpert.addEventListener("change", function() {
      updateDisplay(seoExpert, seo3);
  });

  timelineAsap.addEventListener("change", function() {
      updateDisplay(timelineAsap, ko1);
  });

  oneMonth.addEventListener("change", function() {
      updateDisplay(oneMonth, ko2);
  });

  flexible.addEventListener("change", function() {
      updateDisplay(flexible, ko3);
  });
});
