function calculate_median(arr) {


	var b=new Array();
 var c=new Array();
 for(var i=0;i<arr.length/2;i++){
 	b[i]=arr[2*i+1];
}
 c=b.sort(function(a,b){
	return a-b
});



var len=Math.ceil(c.length/2)+1;
(function()
{
	if(len%2==0)
	return (c[len/2]+c[len/2-1])/2;
else
	return c[len/2-1];
}
)
();
  }

  //请勿改动函数名


module.exports = calculate_median;
