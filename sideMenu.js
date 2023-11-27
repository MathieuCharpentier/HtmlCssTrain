const sidebarMenus = document.getElementsByClassName("sidebar-menu");

for (const menu of sidebarMenus) 
{
    menu.style.display = "none";
}

/**
 * Make appear one sidebar Menu div and disappear the other  
 * @param {String} id id of the div that will appear or disappear
 */
function showOrHideOnClick(id)
{
    let menuToChange = document.getElementById(id)
    if(menuToChange.style.display == "none")
    {
        for (const menu of sidebarMenus) 
        {
            menu.style.display = "none";
        }
        menuToChange.style.display = "flex";
    }
    else
    {
        for (const menu of sidebarMenus) 
        {
            menu.style.display = "none";
        }
    }
}
