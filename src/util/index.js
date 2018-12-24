import Vue from 'vue'

Vue.prototype.$getLocation = function getLocation() {
  setTimeout(() => {
    var that = this
    let mapObj = new AMap.Map('App');
    mapObj.plugin('AMap.Geolocation', function () {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
      AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });

    function onComplete(obj) {
      // alert(JSON.stringify(obj));
      console.log(obj.addressComponent.citycode);
      console.log(obj);
      that.$store.state.city = obj.addressComponent.city
      that.$store.state.ad_code = obj.addressComponent.adcode
      localStorage.ad_code = obj.addressComponent.adcode.toString().slice(0, -2) + '00'
      localStorage.city = obj.addressComponent.city

      return obj
    }

    function onError(obj) {
      console.log(obj);
      return obj
    }

  })
}

Vue.prototype.$goTo = function goTo(path) {
    this.$router.push('./'+path)
}
