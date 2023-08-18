function scrollFunction(){
    if(document.documentElement.scrollTop>200){
        document.getElementById("navbar").classList.add("noTransparent");
    }else{
        document.getElementById("navbar").classList.remove("noTransparent");
    }
}
window.onscroll=function(){
    scrollFunction();
}

window.onload=function(){
    let website=new CountUp('website-count',0,250,0,2.5);
    let app=new CountUp('app-count',0,100,0,2.5);
    let user=new CountUp('user-count',0,10000,0,2.5);
    let video=new CountUp('video-count',0,30,0,2.5);
    website.start();
    app.start();
    user.start();
    video.start();
}