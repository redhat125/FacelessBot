// to display and hide other page container
function togglePageWrapper(navMenuId){
    console.log("page nav clicked "+navMenuId);
    var navId = navMenuId.split("_")[0];
    $(".page-wrapper").hide();

    if(navId.includes("inner-project-id"))
        showProjectInner(navMenuId);

    $("#"+navId+"-container").show();
}

function showProjectInner(projectId){
    $("#project-name-id").text($("#"+projectId).text());
}

function toggleAlgoNav(algoId){
    if($("#right-algo-nav-id").hasClass("right-algo-content-hidden")){
        $("#right-algo-nav-id").removeClass("right-algo-content-hidden").addClass("right-algo-content-show");
    }
    else{
        $("#right-algo-nav-id").removeClass("right-algo-content-show").addClass("right-algo-content-hidden");
    }
}
