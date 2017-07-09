document.getElementById("NavMe").onmousedown = function () {
    console.log("User moused down on ME");
	var NavFrame = document.getElementById("NavFrame");
	var PageFrame = document.getElementById("PageFrame_MAIN");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="ME";
		document.getElementById("PageFrame_MAIN").src = "/content/me";
    } else {
        NavFrame.style.display = 'block';
		document.getElementById("NavFrameTitle").innerHTML="ME";
		document.getElementById("PageFrame_MAIN").src = "/content/me";
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavStuff").onmousedown = function () {
    console.log("User moused down on STUFF");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="STUFF";
		document.getElementById("PageFrame_MAIN").src = "/content/stuff";
    } else {
        NavFrame.style.display = 'block';
		document.getElementById("NavFrameTitle").innerHTML="STUFF";
		document.getElementById("PageFrame_MAIN").src = "/content/stuff";
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavGames").onmousedown = function () {
    console.log("User moused down on GAMES");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="GAMES";
		document.getElementById("PageFrame_MAIN").src = "/content/games";
    } else {
        NavFrame.style.display = 'block';
		document.getElementById("NavFrameTitle").innerHTML="GAMES";
		document.getElementById("PageFrame_MAIN").src = "/content/games";
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavRooms").onmousedown = function () {
    console.log("User moused down on ROOMS");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="ROOMS";
		document.getElementById("PageFrame_MAIN").src = "/content/rooms";
    } else {
        NavFrame.style.display = 'block';
		document.getElementById("NavFrameTitle").innerHTML="ROOMS";
		document.getElementById("PageFrame_MAIN").src = "/content/rooms";
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavGroups").onmousedown = function () {
    console.log("User moused down on GROUPS");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="GROUPS";
		document.getElementById("PageFrame_MAIN").src = "/content/groups";
    } else {
        NavFrame.style.display = 'block';
		document.getElementById("NavFrameTitle").innerHTML="GROUPS";
		document.getElementById("PageFrame_MAIN").src = "/content/groups";
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavShop").onmousedown = function () {
    console.log("User moused down on SHOP");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="SHOP";
		document.getElementById("PageFrame_MAIN").src = "/content/shop";
    } else {
        NavFrame.style.display = 'block';
		document.getElementById("NavFrameTitle").innerHTML="SHOP";
		document.getElementById("PageFrame_MAIN").src = "/content/shop";
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavLevel").onmousedown = function () {
    console.log("User moused down on ME-PASSPORT");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="ME-PASSPORT";
		document.getElementById("PageFrame_MAIN").src = "/content/me-passport";
    } else {
        NavFrame.style.display = 'block';
		document.getElementById("NavFrameTitle").innerHTML="ME-PASSPORT";
		document.getElementById("PageFrame_MAIN").src = "/content/me-passport";
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("UiClose").onmousedown = function () {
    var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'none') {
        NavFrame.style.display = 'block';
    } else {
        NavFrame.style.display = 'none';
    }
    return true; // Not needed, as long as you don't return false
};
