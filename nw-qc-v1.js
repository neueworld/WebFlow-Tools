//input
  var design = document.getElementById("design");
  var development = document.getElementById("development");
  var designDev = document.getElementById("design-dev");
  var fromScratch = document.getElementById("site-from-scratch");
  var designSystem = document.getElementById("design-system");
  var uiux = document.getElementById("ui-ux-design");
  var seo = document.getElementById("seo");
  var improveGraphics = document.getElementById("improve-graphics");
  var blog = document.getElementById("blog");
  var branding = document.getElementById("branding");
  var improveUiUx = document.getElementById("improve-ui-ux");
  var lottie = document.getElementById("lottie-animations");
  var landingPage = document.getElementById("landing-page");
  var others = document.getElementById("others");
  var complexLow = document.getElementById("complexity-low");
  var complexMedium = document.getElementById("complexity-medium");
  var complexHigh = document.getElementById("complexity-high");
  var pagesThree = document.getElementById("pages-3");
  var pagesSix = document.getElementById("pages-6");
  var pagesEight = document.getElementById("pages-8");
  var pagesNine = document.getElementById("pages-9");
  var interactionsLow = document.getElementById("interactions-low");
  var interactionsMedium = document.getElementById("interactions-medium");
  var interactionsHigh = document.getElementById("interactions-high");
  var cmsLow = document.getElementById("cms-low");
  var cmsMedium = document.getElementById("cms-medium");
  var cmsHigh = document.getElementById("cms-high");
  var animationsLow = document.getElementById("animations-low");
  var animationsMedium = document.getElementById("animations-medium");
  var animationsHigh = document.getElementById("animations-high");
  var seoBasic = document.getElementById("seo-basic");
  var seoAdvanced = document.getElementById("seo-advanced");
  var seoExpert = document.getElementById("seo-expert");
  var timelineTwoMonths = document.getElementById("timeline-2");
  var timelineFourMonths = document.getElementById("timeline-4");
  var timelineFlexible = document.getElementById("timeline-flexible");
  var timelineAsap = document.getElementById("timeline-asap");
  var timelineOneMonth = document.getElementById("one-month");
  var timelineFlex = document.getElementById("flexible"); 
  var totalBudget;
  var time;
 // Calculation
 function calculateChange() {
  totalCost = 0;
  timeline = '0';
    
  if (design.checked) {
      totalCost += 5000;
    }
  if (development.checked) {
      totalCost += 5000;
    }
  if (designDev.checked) {
      totalCost += 8000;
    }
  if (fromScratch.checked) {
      if (design.checked || development.checked) {
        	totalCost += 6000;
      		}
      if (designDev.checked) {
        	totalCost += 10000;
      		}
      if (!design.checked && !development.checked && !designDev.checked) {
        	totalCost += 6000;
      		}
    }
  if (designSystem.checked) {
  		totalCost += 4000;
    }
  if (uiux.checked) {
  		totalCost += 10000;
    }
	if (seo.checked) {
  		totalCost += 1000;
    }
  if (improveGraphics.checked) {
  		totalCost += 3000;
    }
	if (blog.checked) {
  		if (designDev.checked) {
        totalCost += 4000;
      }
      else {
        totalCost += 2000;
      }
    }
  if (branding.checked) {
  		totalCost += 4000;
    }
	if (improveUiUx.checked) {
  		totalCost += 5000;
    }
  if (lottie.checked) {
  		totalCost += 2000;
    }
	if (landingPage.checked) {
    if (designDev.checked) {
        totalCost += 6000;
      }
      else {
        totalCost += 3000;
      }
    }
  if (others.checked) {
  		totalCost += 500;
    }
	if (complexLow.checked) {
  		if (design.checked || development.checked) {
        totalCost += 700;
      }
      if (designDev.checked) {
        totalCost += 1300;
      }
      if (!design.checked && !development.checked && !designDev.checked) {
        totalCost += 700;
      }
    }
  if (complexMedium.checked) {
  		if (design.checked || development.checked) {
        totalCost += 1500;
      }
      if (designDev.checked) {
        totalCost += 2500;
      }
      if (!design.checked && !development.checked && !designDev.checked) {
        totalCost += 1500;
      }
    }
	if (complexHigh.checked) {
  		if (design.checked || development.checked) {
        totalCost += 2500;
      }
      if (designDev.checked) {
        totalCost += 4000;
      }
      if (!design.checked && !development.checked && !designDev.checked) {
        totalCost += 2500;
      }
    }  
  if (pagesThree.checked) {
  		if (designDev.checked) {
        totalCost += 4800;
      }
      else {
        totalCost += 2400;
      }
    }
	if (pagesSix.checked) {
  		if (designDev.checked) {
        totalCost += 9600;
      }
      else {
        totalCost += 4800;
      }
    }
  if (pagesEight.checked) {
  		if (designDev.checked) {
        totalCost += 12800;
      }
      else {
        totalCost += 6400;
      }
    }
  if (pagesNine.checked) {
  		if (designDev.checked) {
        totalCost += 17000;
      }
      else {
        totalCost += 8500;
      }
    }
  if (interactionsLow.checked) {
  		totalCost += 800;
    }
  if (interactionsMedium.checked) {
  		totalCost += 1000;
    }
  if (interactionsHigh.checked) {
  		totalCost += 1500;
    }
  if (cmsLow.checked) {
  		totalCost += 800;
    }
  if (cmsMedium.checked) {
  		totalCost += 1000;
    }
  if (cmsHigh.checked) {
  		totalCost += 1500;
    }
	if (animationsLow.checked) {
  		totalCost += 800;
    }
  if (animationsMedium.checked) {
  		totalCost += 1000;
    }
	if (animationsHigh.checked) {
  		totalCost += 1500;
    }
	if (seoBasic.checked) {
  		totalCost += 1000;
    }
  if (seoAdvanced.checked) {
  		totalCost += 2000;
    }
	if (seoExpert.checked) {
  		totalCost += 3000;
    }
  if (timelineTwoMonths.checked) {
  		totalCost += 2000;
      timeline = '2 months';
    }
	if (timelineFourMonths.checked) {
  		totalCost += 1000;
      timeline = '4 months';
    }
  if (timelineFlexible.checked) {
      timeline = 'Flexible';
    }
  if (timelineAsap.checked) {
  		totalCost += 2000;
    }
	if (timelineOneMonth.checked) {
  		totalCost += 1000;
    }
  if (timelineFlex.checked) {
      totalCost += 0;
    }
  
  totalBudget = totalCost;
  time = timeline;
  console.log("Total: " + totalCost);
  console.log("Timeline: " + timeline);
  
  // Assuming you have a reference to your text element
  var textElement = document.getElementById("totalBudget");
  var timeline = document.getElementById("time");

  textElement.setAttribute("total-cost", totalBudget);
  timeline.setAttribute("timeline", time);
  
  textElement.textContent = "$" + totalBudget;
  timeline.textContent = time;  
  }

	design.onchange = function () {
  		calculateChange();
  };
  development.onchange = function () {
  		calculateChange();
  };
  designDev.onchange = function () {
  		calculateChange();
  };
  fromScratch.onchange = function () {
  		calculateChange();
  };
  designSystem.onchange = function () {
  		calculateChange();
  };
  uiux.onchange = function () {
  		calculateChange();
  };
  seo.onchange = function () {
  		calculateChange();
  };
  improveGraphics.onchange = function () {
  		calculateChange();
  };
  blog.onchange = function () {
  		calculateChange();
  };
  branding.onchange = function () {
  		calculateChange();
  };
  improveUiUx.onchange = function () {
  		calculateChange();
  };
  lottie.onchange = function () {
  		calculateChange();
  };
  landingPage.onchange = function () {
  		calculateChange();
  };
  others.onchange = function () {
  		calculateChange();
  };
  complexLow.onchange = function () {
  		calculateChange();
  };
  complexMedium.onchange = function () {
  		calculateChange();
  };
  complexHigh.onchange = function () {
  		calculateChange();
  };
  pagesThree.onchange = function () {
  		calculateChange();
  };
  pagesSix.onchange = function () {
  		calculateChange();
  };
  pagesEight.onchange = function () {
  		calculateChange();
  };
  pagesNine.onchange = function () {
  		calculateChange();
  };
  interactionsLow.onchange = function () {
  		calculateChange();
  };
  interactionsMedium.onchange = function () {
  		calculateChange();
  };
  interactionsHigh.onchange = function () {
  		calculateChange();
  };
  cmsLow.onchange = function () {
  		calculateChange();
  };
  cmsMedium.onchange = function () {
  		calculateChange();
  };
  cmsHigh.onchange = function () {
  		calculateChange();
  };
  animationsLow.onchange = function () {
  		calculateChange();
  };
  animationsMedium.onchange = function () {
  		calculateChange();
  };
  animationsHigh.onchange = function () {
  		calculateChange();
  };
  seoBasic.onchange = function () {
  		calculateChange();
  };
  seoAdvanced.onchange = function () {
  		calculateChange();
  };
  seoExpert.onchange = function () {
  		calculateChange();
  };
	timelineTwoMonths.onchange = function () {
  		calculateChange();
  };
  timelineFourMonths.onchange = function () {
  		calculateChange();
  };
  timelineFlexible.onchange = function () {
  		calculateChange();
  };
  timelineAsap.onchange = function () {
  		calculateChange();
  };
  timelineOneMonth.onchange = function () {
  		calculateChange();
  };
  timelineFlex.onchange = function () {
  		calculateChange(); 
  };

// Function to check checkboxes on page load
function checkInitialCheckboxes() {
  design.checked = true;
  fromScratch.checked = true;
  complexLow.checked = true;
  pagesThree.checked = true;
  interactionsLow.checked = true; 
  cmsLow.checked = true; 
  animationsLow.checked = true; 
  seoBasic.checked = true; 
  timelineTwoMonths.checked = true; 
  timelineAsap.checked = true; 

  // Trigger the calculateChange function to update the total on page load
  calculateChange();
}

// Check the checkboxes on page load
window.onload = function () {
checkInitialCheckboxes();
};
