function upDate(previewPic){
    console.log("upDate");
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getRootNode("image").style.backgroundImage="url('" + previewPic.src + "')";
}

    function unDo(){
    console.log("unDo")
        document.getElementById("amage").style.backgroundImage = "url('')";
        document.getElementById("image").innerHTML = "pase el ratn por encima de imagen para mostrala"
    }