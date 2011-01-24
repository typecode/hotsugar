/******************************************/
/******************************************/
/****  JS Document                     ****/
/****  by Andrew Mahon                 ****/
/****  amahon@gmail.com                ****/
/******************************************/
/******************************************/

(function(amahon) {
	amahon.jQ.fn.portfolioSite = function(options){
		var $ps, _o, _initialized
		
		
		$ps = this
		_o = jQuery.extend({
			content:""
		},options);
		_initialized = false
		
		function _initialize(){
			amahon.util.log("Initializing Portfolio Site",'info')
			_setup_events()
			if(window.location.hash){
				$ps.find("a[name='"+window.location.hash.substring(1,window.location.hash.length)+"']").click()
			} else {
				$ps.find("a[name='pageHome']").click()
			}
			_initialized = true
		}
		
		function _setup_events(){
			$ps.find("a").live("click",_siteLinkClickHandler)
		}
		
		function _siteLinkClickHandler(e){
			if(e.target.target == "_content"){
				e.preventDefault()
				if(amahon.jQ(_o.content).length > 0){
					amahon.jQ.get(e.target.href,{},function(d,ts,xhr){
						window.location.hash = e.target.name
						amahon.jQ(_o.content).html(d)
						amahon.jQ(document).trigger("CLE",{})
					})
				}
			}
		}
		
		_initialize()
		return $ps
	}
	
})(amahon);