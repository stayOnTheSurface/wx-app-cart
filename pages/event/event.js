Page({
    data: {
        
    },
    onLoad: function(options) {
        //Do some initialize when page load.
        console.log(options);
        
        
    },
    onReady: function() {
        //Do some when page ready.
        
    },
    onShow: function() {
        //Do some when page show.
        
    },
    onHide: function() {
        //Do some when page hide.
        
    },
    onUnload: function() {
        //Do some when page unload.
        
    },
    onPullDownRefresh: function() {
        //Do some when page pull down.
        console.log("页面下拉");
    },
    onReachBottom(){
        console.log("页面到底");
    },
    onPageScroll(calculations){
        console.log("页面滚动事件",calculations);
        
    }
})