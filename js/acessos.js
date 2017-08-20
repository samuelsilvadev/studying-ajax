
const keys = {
	streeView : {
		API_KEY : "AIzaSyCA5GyiPvbe6fDXjr_nTudNNRILDnByVCA",
		url 	: function(adress, city){
			return `https://maps.googleapis.com/maps/api/streetview?size=1366x768&location=${adress}${city}&heading=151.78&pitch=-0.76&key=${this.API_KEY}`;
		}
	}
}