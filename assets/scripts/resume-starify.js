const starHeight = 12;
const maxStars = 5;

$(document).ready(function () {
    $(".skillbox ul li.p-skill").each(function (idx, elem) {
        // do not handle list entries already starred
        if ($(elem).attr("class").indexOf("starred") >= 0) {
            return;
        }

        // elements in the html are decorated with a data attribute
        // showing the number of stars (which should be less than/equal to
        // the value of the const maxStars) that rates the competence.
        // the difference between the rating and the max is filled with empty
        // stars.
        let starCount = elem.dataset.competenceStars;
        if (starCount > maxStars) {
            starCount = maxStars;
        }

        let emptyStars = maxStars - starCount;
        if (emptyStars < 0) {
            emptyStars = 0;
        }

        // build a container where the stars will live, this is a little
        // div that will follow the description of the skill inline (placed
        // using flexbox)
        let starContainer = document.createElement("div");
        $(starContainer).addClass("star-container");

        // Plain ol' DOM manipulation to add the stars themselves, and to
        // graft them into the skill list.
        for (let i = 0; i < starCount; i++) {
            let filledStarNode = document.createElement("img");
            filledStarNode.setAttribute("src", "/assets/star-filled.svg");
            filledStarNode.setAttribute("height", starHeight.toString());
            starContainer.appendChild(filledStarNode);
        }

        for (let i = 0; i < emptyStars; i++) {
            let emptyStarNode = document.createElement("img");
            emptyStarNode.setAttribute("src", "/assets/star.svg");
            emptyStarNode.setAttribute("height", starHeight.toString());
            starContainer.appendChild(emptyStarNode);
        }

        elem.append(starContainer);

        // decorate list entries handled with this routine so they are not
        // revisited if skills are dynamically added (this runs at document.ready
        // only, so this wouldn't be needed unless in a different event handler)
        $(elem).addClass("starred");
    });
});
