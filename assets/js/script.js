function convertPlaceholdersInSection(placeholderSelector, section){
    $(placeholderSelector, section).each((index, item) => {
        let newCard = $(".card-selector").clone(true);
        let itemTitle = $(".placeholder-card-title", item);
        let itemContents = $(".placeholder-card-contents", item);
        let itemImageSrc = $(item).attr("data-image-src");

        $(".card-title", newCard).replaceWith(itemTitle);
        $(".card-contents", newCard).replaceWith(itemContents);
        newCard.attr("data-image-src", itemImageSrc);
        newCard.removeClass("card-selector");

        newCard.appendTo(section);
    });
}

$(function(){
    convertPlaceholdersInSection(".placeholder-card-selector", "#extracurriculars-showcase-section");
    convertPlaceholdersInSection(".placeholder-card-selector", "#experience-showcase-section");
});