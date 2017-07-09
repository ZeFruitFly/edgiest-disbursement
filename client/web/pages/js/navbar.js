document.getElementById("NavMe").onmousedown = function () {
    console.log("User moused down on ME");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="ME";
    } else {
        NavFrame.style.display = 'block';
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavStuff").onmousedown = function () {
    console.log("User moused down on STUFF");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="STUFF";
    } else {
        NavFrame.style.display = 'block';
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavGames").onmousedown = function () {
    console.log("User moused down on GAMES");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="GAMES";
    } else {
        NavFrame.style.display = 'block';
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavRooms").onmousedown = function () {
    console.log("User moused down on ROOMS");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="ROOMS";
    } else {
        NavFrame.style.display = 'block';
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavGroups").onmousedown = function () {
    console.log("User moused down on GROUPS");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="GROUPS";
    } else {
        NavFrame.style.display = 'block';
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavShop").onmousedown = function () {
    console.log("User moused down on SHOP");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="SHOP";
    } else {
        NavFrame.style.display = 'block';
    }
    return true; // Not needed, as long as you don't return false
};
document.getElementById("NavLevel").onmousedown = function () {
    console.log("User moused down on ME-PASSPORT");
	var NavFrame = document.getElementById("NavFrame");
	if (NavFrame.style.display === 'block') {
        //Set URL here.
		document.getElementById("NavFrameTitle").innerHTML="ME-PASSPORT";
    } else {
        NavFrame.style.display = 'block';
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
