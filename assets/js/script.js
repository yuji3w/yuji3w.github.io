function convertPlaceholdersInSection(placeholderSelector, sectionSelector){
    $(placeholderSelector, sectionSelector).each((_, item) => {

        const itemTitle = $(".placeholder-card-title", item);
        const itemContents = $(".placeholder-card-contents", item);
        const itemImageSrc = $(item).attr("data-image-src");


        let newCard = `
            <div class="card-height parallax-window mt-2 mb-4 py-5 border border-2 border-deepblue d-flex justify-content-center align-items-end"
            data-parallax="scroll" data-image-src= ${ itemImageSrc } data-position-y="-200px" data-speed="0.8"
            ios-fix="true" android-fix="true">
                <div class="col-auto card showcase-card p-5 mb-2 py-2 m-5 w-90 h-50 text-white bg-deepblue-faded overflow-auto">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${ itemTitle.html() }
                        </h5>
                        <p class="card-contents">
                            ${ itemContents.html() }
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        $(sectionSelector).append(newCard);
        item.remove();
    });
}

function applySimpleParallax(selector){
    var images = document.querySelectorAll(selector);
    console.log(images);
    new simpleParallax(images);
}

$(function(){
    convertPlaceholdersInSection(".placeholder-card-selector", "#extracurriculars-showcase-section");
    convertPlaceholdersInSection(".placeholder-card-selector", "#experience-showcase-section");
    //applySimpleParallax(".card-selector");
});