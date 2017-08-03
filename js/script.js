
const keys = {
	streeView : {
		API_KEY : "AIzaSyCA5GyiPvbe6fDXjr_nTudNNRILDnByVCA",
		url 	: function(){
			return `https://maps.googleapis.com/maps/api/streetview?size=1366x768&key=${this.API_KEY}`;
		}
	}
}