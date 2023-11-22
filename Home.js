let civilisationMenu = document.getElementById("civilisation");
let characterMenu = document.getElementById("character");
let constructionMenu = document.getElementById("construction");

/**
 * Make appear one sidebar Menu div and disappear the other  
 * @param {String} id id of the div that will appear or disappear
 */
function showOrHideOnClick(id)
{
    civilisationMenu.style.display = "none";
    characterMenu.style.display = "none";
    constructionMenu.style.display = "none";

    if(id == "civilisation")
    {
        if(civilisationMenu.style.display == "none")
        {
            civilisationMenu.style.display = "flex";
            characterMenu.style.display = "none";
            constructionMenu.style.display = "none";
        }
        else
        {
            civilisationMenu.style.display = "none";
        }
    }
    else if(id == "character")
    {
        if(characterMenu.style.display == "none")
        {
            characterMenu.style.display = "flex";
            civilisationMenu.style.display = "none";
            constructionMenu.style.display = "none";
        }
        else
        {
            characterMenu.style.display = "none";
        }
    }
    else if(id == "construction")
    {
        if(constructionMenu.style.display == "none")
        {
            constructionMenu.style.display = "flex";
            civilisationMenu.style.display = "none";
            characterMenu.style.display = "none";
        }
        else
        {
            constructionMenu.style.display = "none";
        }
    }
}

