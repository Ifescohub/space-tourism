
const  tabList = document.querySelector("[role='tablist']");
const tabs = document.querySelectorAll("[role='tabs']");


//Formatting Keyboard Switch between tabs
tabList.addEventListener("keydown", switchTab);

//Formatting Tabs content change with clicks
tabs.forEach((tab) => {
    tab.addEventListener("click", changeContent);
});


let tabFocus = 0;
// function to switch tabs using keyboard
function switchTab(e){
    const leftKey = 37;
    const rightKey = 39;

    if (e.keyCode === leftKey || e.keyCode === rightKey){
        tabs[tabFocus].setAttribute("tabindex", -1);
       
        if (e.keyCode === rightKey){
            tabFocus++;
            if (tabFocus > tabs.length-1){
                tabFocus = 0;
            }
        }

        if (e.keyCode === leftKey){
            tabFocus--;
            if (tabFocus < 0){
                tabFocus = tabs.length-1;
            }
        }
    }
    
    tabs[tabFocus].focus();
}


//Finction to change content by mouse click
function changeContent(e){
    const targetTab = e.target;     //clicked tab
    const targetArticle = targetTab.getAttribute("aria-controls");  //Clicked tab's article
    const targetImages = targetTab.getAttribute("data-image");  //Clicked tab's image

    const tabContainer = targetTab.parentNode;
    const sectionContainer = tabContainer.parentNode;
    const mainContainer = sectionContainer.parentNode;

    //switching the focus on a tab by mouse click
    mainContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);      

    targetTab.setAttribute("aria-selected", true);


    // Formatting Article switch
    hideContent(mainContainer, '[role="tab-article"]'); //hide all articles
    showContent(mainContainer, [`#${targetArticle}`])   //show the targeted article

    
    //Formatting Image switch
    hideContent(mainContainer, '[role="tab-image"]');   //hide all images
    showContent(mainContainer, [`#${targetImages}`]);   //show the targeted Images
}



//Hiding all contents
function hideContent(container, content){
    container
        .querySelectorAll(content)
        .forEach((object) => object.setAttribute("hidden", true));
}

//Showing  clicked contents
function showContent(container, content){
    container
        .querySelector(content)
        .removeAttribute("hidden");
}




