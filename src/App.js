import logo from './logo.svg';
import './App.css';
import React, { Component, lazy } from 'react';

class App extends Component   {

  constructor(props){
    super(props)

    this.handleNewColumnAdded = this.handleNewColumnAdded.bind(this)
    this.addPartToCount = this.addPartToCount.bind(this)
    this.renderComputedTotals = this.renderComputedTotals.bind(this)
    
    
    this.state = {
      headers : [],
      newState : "",
      partsList: [{"Quantity":317,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4121715.jpg","PartID":4121715},{"Quantity":166,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4514553.jpg","PartID":4514553},{"Quantity":103,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4206482.jpg","PartID":4206482},{"Quantity":72,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211815.jpg","PartID":4211815},{"Quantity":62,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4142865.jpg","PartID":4142865},{"Quantity":49,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107742.jpg","PartID":4107742},{"Quantity":40,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4173668.jpg","PartID":4173668},{"Quantity":38,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/370526.jpg","PartID":370526},{"Quantity":29,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4512363.jpg","PartID":4512363},{"Quantity":27,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4142823.jpg","PartID":4142823},{"Quantity":27,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4239601.jpg","PartID":4239601},{"Quantity":26,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4173970.jpg","PartID":4173970},{"Quantity":24,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107828.jpg","PartID":4107828},{"Quantity":24,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4495935.jpg","PartID":4495935},{"Quantity":24,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211639.jpg","PartID":4211639},{"Quantity":24,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4515184.jpg","PartID":4515184},{"Quantity":22,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107085.jpg","PartID":4107085},{"Quantity":21,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4640536.jpg","PartID":4640536},{"Quantity":19,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4645732.jpg","PartID":4645732},{"Quantity":19,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4603472.jpg","PartID":4603472},{"Quantity":18,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4140806.jpg","PartID":4140806},{"Quantity":18,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4227155.jpg","PartID":4227155},{"Quantity":16,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4542573.jpg","PartID":4542573},{"Quantity":16,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4186834.jpg","PartID":4186834},{"Quantity":16,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211573.jpg","PartID":4211573},{"Quantity":16,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211889.jpg","PartID":4211889},{"Quantity":16,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4512360.jpg","PartID":4512360},{"Quantity":15,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107081.jpg","PartID":4107081},{"Quantity":15,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4120017.jpg","PartID":4120017},{"Quantity":15,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4522933.jpg","PartID":4522933},{"Quantity":14,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6083620.jpg","PartID":6083620},{"Quantity":13,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107783.jpg","PartID":4107783},{"Quantity":13,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4143005.jpg","PartID":4143005},{"Quantity":13,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211050.jpg","PartID":4211050},{"Quantity":13,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211805.jpg","PartID":4211805},{"Quantity":12,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4140430.jpg","PartID":4140430},{"Quantity":12,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4142135.jpg","PartID":4142135},{"Quantity":12,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4610371.jpg","PartID":4610371},{"Quantity":12,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4143154.jpg","PartID":4143154},{"Quantity":12,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211651.jpg","PartID":4211651},{"Quantity":12,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4621555.jpg","PartID":4621555},{"Quantity":11,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4514554.jpg","PartID":4514554},{"Quantity":11,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4560175.jpg","PartID":4560175},{"Quantity":11,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6031821.jpg","PartID":6031821},{"Quantity":10,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4251969.jpg","PartID":4251969},{"Quantity":9,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/3200026.jpg","PartID":3200026},{"Quantity":9,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/370726.jpg","PartID":370726},{"Quantity":9,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107767.jpg","PartID":4107767},{"Quantity":9,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4565452.jpg","PartID":4565452},{"Quantity":9,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211622.jpg","PartID":4211622},{"Quantity":9,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4535768.jpg","PartID":4535768},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4142236.jpg","PartID":4142236},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4142822.jpg","PartID":4142822},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4125254.jpg","PartID":4125254},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6037750.jpg","PartID":6037750},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6143015.jpg","PartID":6143015},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4538007.jpg","PartID":4538007},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4552348.jpg","PartID":4552348},{"Quantity":8,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4167842.jpg","PartID":4167842},{"Quantity":7,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4184169.jpg","PartID":4184169},{"Quantity":7,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4619310.jpg","PartID":4619310},{"Quantity":7,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211714.jpg","PartID":4211714},{"Quantity":7,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4525904.jpg","PartID":4525904},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/241226.jpg","PartID":241226},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/403226.jpg","PartID":403226},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4112282.jpg","PartID":4112282},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4552347.jpg","PartID":4552347},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4118782.jpg","PartID":4118782},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4504371.jpg","PartID":4504371},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4538144.jpg","PartID":4538144},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4141743.jpg","PartID":4141743},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4495933.jpg","PartID":4495933},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4237267.jpg","PartID":4237267},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6010862.jpg","PartID":6010862},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211655.jpg","PartID":4211655},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211741.jpg","PartID":4211741},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4278756.jpg","PartID":4278756},{"Quantity":6,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4244369.jpg","PartID":4244369},{"Quantity":5,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/416226.jpg","PartID":416226},{"Quantity":5,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4121610.jpg","PartID":4121610},{"Quantity":5,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4128598.jpg","PartID":4128598},{"Quantity":5,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4142132.jpg","PartID":4142132},{"Quantity":5,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4513174.jpg","PartID":4513174},{"Quantity":5,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211880.jpg","PartID":4211880},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/302126.jpg","PartID":302126},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/379526.jpg","PartID":379526},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/614326.jpg","PartID":614326},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/370626.jpg","PartID":370626},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4112287.jpg","PartID":4112287},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4121667.jpg","PartID":4121667},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4128593.jpg","PartID":4128593},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4198367.jpg","PartID":4198367},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4610381.jpg","PartID":4610381},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4182884.jpg","PartID":4182884},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4506043.jpg","PartID":4506043},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4141270.jpg","PartID":4141270},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4542575.jpg","PartID":4542575},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4112203.jpg","PartID":4112203},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4153707.jpg","PartID":4153707},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4526983.jpg","PartID":4526983},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6083113.jpg","PartID":6083113},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4210851.jpg","PartID":4210851},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4210857.jpg","PartID":4210857},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4237158.jpg","PartID":4237158},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4499858.jpg","PartID":4499858},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4610378.jpg","PartID":4610378},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6012451.jpg","PartID":6012451},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4225033.jpg","PartID":4225033},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4234251.jpg","PartID":4234251},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4503416.jpg","PartID":4503416},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4539880.jpg","PartID":4539880},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4610377.jpg","PartID":4610377},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6000018.jpg","PartID":6000018},{"Quantity":4,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6045310.jpg","PartID":6045310},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/428226.jpg","PartID":428226},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4560182.jpg","PartID":4560182},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107082.jpg","PartID":4107082},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4177431.jpg","PartID":4177431},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631291.jpg","PartID":4631291},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4629802.jpg","PartID":4629802},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4508553.jpg","PartID":4508553},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4610374.jpg","PartID":4610374},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6007058.jpg","PartID":6007058},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6045988.jpg","PartID":6045988},{"Quantity":3,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4268659.jpg","PartID":4268659},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/243126.jpg","PartID":243126},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/281726.jpg","PartID":281726},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/302026.jpg","PartID":302026},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/302326.jpg","PartID":302326},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/306926.jpg","PartID":306926},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/366626.jpg","PartID":366626},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/447726.jpg","PartID":447726},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4515373.jpg","PartID":4515373},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6037746.jpg","PartID":6037746},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6117973.jpg","PartID":6117973},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4140327.jpg","PartID":4140327},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4143466.jpg","PartID":4143466},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4177444.jpg","PartID":4177444},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4563044.jpg","PartID":4563044},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4629921.jpg","PartID":4629921},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4207456.jpg","PartID":4207456},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4666579.jpg","PartID":4666579},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6084724.jpg","PartID":6084724},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4142134.jpg","PartID":4142134},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4158923.jpg","PartID":4158923},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4509376.jpg","PartID":4509376},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4648927.jpg","PartID":4648927},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4160593.jpg","PartID":4160593},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4177932.jpg","PartID":4177932},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4580022.jpg","PartID":4580022},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107824.jpg","PartID":4107824},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod4outline.192x192/4128553.jpg","PartID":4128553},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4174834.jpg","PartID":4174834},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4270473.jpg","PartID":4270473},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4278957.jpg","PartID":4278957},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4645733.jpg","PartID":4645733},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4203493.jpg","PartID":4203493},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4205293.jpg","PartID":4205293},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4210753.jpg","PartID":4210753},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4514558.jpg","PartID":4514558},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4525184.jpg","PartID":4525184},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4610380.jpg","PartID":4610380},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211398.jpg","PartID":4211398},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211508.jpg","PartID":4211508},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211510.jpg","PartID":4211510},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211609.jpg","PartID":4211609},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211610.jpg","PartID":4211610},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211625.jpg","PartID":4211625},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4495930.jpg","PartID":4495930},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4610379.jpg","PartID":4610379},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6009019.jpg","PartID":6009019},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/3005740.jpg","PartID":3005740},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4278412.jpg","PartID":4278412},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4222960.jpg","PartID":4222960},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4280341.jpg","PartID":4280341},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/3005741.jpg","PartID":3005741},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/611644.jpg","PartID":611644},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4278415.jpg","PartID":4278415},{"Quantity":2,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6198486.jpg","PartID":6198486},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/244526.jpg","PartID":244526},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/389426.jpg","PartID":389426},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/389526.jpg","PartID":389526},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/663626.jpg","PartID":663626},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4297719.jpg","PartID":4297719},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4514845.jpg","PartID":4514845},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/373726.jpg","PartID":373726},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4125213.jpg","PartID":4125213},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4562009.jpg","PartID":4562009},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4624645.jpg","PartID":4624645},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631297.jpg","PartID":4631297},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631298.jpg","PartID":4631298},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631300.jpg","PartID":4631300},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6093977.jpg","PartID":6093977},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod4photo.192x192/4529098.jpg","PartID":4529098},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod4photo.192x192/4567210.jpg","PartID":4567210},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631290.jpg","PartID":4631290},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631404.jpg","PartID":4631404},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod4photo.192x192/4648997.jpg","PartID":4648997},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4542142.jpg","PartID":4542142},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4580014.jpg","PartID":4580014},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6135079.jpg","PartID":6135079},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6135080.jpg","PartID":6135080},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6285294.jpg","PartID":6285294},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6285295.jpg","PartID":6285295},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4234429.jpg","PartID":4234429},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4254606.jpg","PartID":4254606},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod4outline.192x192/74981.jpg","PartID":74981},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4107066.jpg","PartID":4107066},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211053.jpg","PartID":4211053},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4212529.jpg","PartID":4212529},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4239891.jpg","PartID":4239891},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211023.jpg","PartID":4211023},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4522937.jpg","PartID":4522937},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4542576.jpg","PartID":4542576},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6012286.jpg","PartID":6012286},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6066097.jpg","PartID":6066097},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4211375.jpg","PartID":4211375},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4540797.jpg","PartID":4540797},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631293.jpg","PartID":4631293},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4631295.jpg","PartID":4631295},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod4photo.192x192/4631296.jpg","PartID":4631296},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/4652842.jpg","PartID":4652842},{"Quantity":1,"ImageURL":"https://www.lego.com/cdn/product-assets/element.img.lod5photo.192x192/6257768.jpg","PartID":6257768}]
      
      
      
    }
  }

  handleNewColumnAdded(){
    let partsList = this.state.partsList;
    partsList.forEach(element => {
      if(element.hasOwnProperty("frequency")){
        element.frequency.push(0)
        element.actualTotal.push(0)
      }
      else{
        element.frequency =  [0]
        element.actualTotal = [0]
      }
      
    });
    let myHeader = this.state.headers
      myHeader.push("title")
    this.setState({
      partsList: partsList,
      headers: myHeader
    })
  }

  renderFrequencies = (props)=> { 
    if(props.legoPart.hasOwnProperty("frequency")){
      let combinedArray = props.legoPart.frequency.map(function (value, index){
        return [value, props.legoPart.actualTotal[index]]
     });
    return combinedArray.map((x,index) => <React.Fragment><td className='small-column' key={index}>
      {x[0]}  <button className='btn btn-secondary' value={`${props.propKey}:${index}:1:frequency`} onClick={ this.addPartToCount}> 1</button> 
      <button className='btn btn-secondary' value={`${props.propKey}:${index}:2:frequency`} onClick={ this.addPartToCount}> 2</button>
      |
      {x[1]}  <button className='btn btn-primary' value={`${props.propKey}:${index}:1:actualTotal`} onClick={ this.addPartToCount}> 1</button> 
      <button className='btn btn-primary' value={`${props.propKey}:${index}:2:actualTotal`} onClick={ this.addPartToCount}> 2</button>
      </td>
      
     
      </React.Fragment>)}
  }



  renderComputedTotals({legoPart}){
    if(legoPart.hasOwnProperty("frequency")){
      let totalRequiredFrequency = legoPart.frequency.reduce((partialSum, a) => partialSum + a, 0)
      let totalActualFrequency = legoPart.actualTotal.reduce((partialSum, a) => partialSum + a, 0)
      let tableColour = (() =>  this.findColour(totalRequiredFrequency,totalActualFrequency))() 
      return <React.Fragment>
<td className={tableColour  + ' small-column '}>{totalRequiredFrequency} </td> 
<td className={tableColour + ' small-column'}>{totalActualFrequency} </td> 
        </React.Fragment>
    }
    else{
      return <React.Fragment><td className='small-column'>0</td> <td className='small-column'>0</td></React.Fragment>
    }
  }

  findColour = (numberToGet, currentTotal) => {
    if(numberToGet == currentTotal){
      return "table-success"
    }
    else{
      return "table-danger"
    }
  }

  setNewState = (event) => {
    const object = JSON.parse(event.target.value)
    this.setState({
      partsList: object.partsList,
      headers: object.headers
    })
  }

  addPartToCount(event){
    const target = event.target;

    const partIndex = target.value.split(":")[0]
    const frequencyIndex = target.value.split(":")[1]
    const name = target.name;
    
    const partsList = this.state.partsList

    if(target.value.split(":")[3] == "frequency"){
    const currentValue = partsList[partIndex].frequency[frequencyIndex]
    partsList[partIndex].frequency[frequencyIndex] = currentValue + parseInt( target.value.split(":")[2])}
    else{
      const currentValue = partsList[partIndex].actualTotal[frequencyIndex]
    partsList[partIndex].actualTotal[frequencyIndex] = currentValue + parseInt( target.value.split(":")[2])}
    

    this.setState({
      partsList : partsList
    });
  }
   
  renameHeader(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let headers = this.state.headers
    headers[parseInt(value)] = 

    this.setState({
      [name]: value
    });
  }
    
    render(){
      const partsList = this.state.partsList;
    return(<div class="table-responsive text-nowrap no-gutters">
      <button className='btn btn-primary' onClick={() => {navigator.clipboard.writeText(JSON.stringify(this.state, null, 2))}}>Copy state</button>
      <input type='text' value={this.state.newState} onChange={ this.setNewState}></input>
      <table className='table '>
        <thead>
          <tr>
          <td>Part ID</td>
            <td  >Part</td>
            <td >Total Count</td>
            <td>Σ should be</td>
            <td>Σ actual</td>
            {this.state.headers.map((item, key)=> <td >({key}) # in book|Actual</td>)}
            
            <td ><button className='btn btn-primary' onClick={this.handleNewColumnAdded}>Add section</button></td>
         </tr>
        </thead>
        <tbody>
      {partsList.map((item,key) => 
      <tr key={key}>

        <td className='small-column'>{item.PartID} </td>
       <td className='small-column'><img src={item.ImageURL} className="BrickImage"></img></td> 
       <td className='small-column'> {item.Quantity} </td>
       <this.renderComputedTotals legoPart={item}  />
       <this.renderFrequencies legoPart={item} propKey={key} className='small-column'/>
       
      </tr>)}
      </tbody>
      </table>
      
    </div>
    
  );
}


}

export default App;
