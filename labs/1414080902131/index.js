$(function()
{
	$("#specialmeau1").click(function(){
		alert($('input[name="specialmeau"]:checked').var());
	})
	$("#specialmeau2").click(function(){
		alert($('input[name="specialmeau"]:checked').var());
	})
	$("#specialmeau3").click(function(){
		alert($('input[name="specialmeau"]:checked').var());
	})
	$("#num").change(function(){
	alert($("#num").val());
})
$("#address1").click(function(){
	alert($("#address1").val());
})
$("#telephone1").click(function(){
	alert($("#telephone1").val());
})
$("#payment1").click(function(){
	alert($('input[name="payment"]:checked').val());
})
$("#payment2").click(function(){
	alert($('input[name="payment"]:checked').val());
})
$("#payment3").click(function(){
	alert($('input[name="payment"]:checked').val());
})
$("#paymentPassword").click(function(){
	alert($("#paymentPassword").val());
})
$("#Emalibox").click(function(){
	alert($("#Emailbox").val());
})
$("#liuyan").click(function(){
	alert($("#liuyan").val());
})
$("#denfity").click(function(){
	var str="";
	$('input[name="right"]:checked').each(function(){
		str+=$(this).val();
	});
	alert(str);
})
$(function(){
	$("#target").submit(function(event){
		alert("Handler for.submit()called.");
		event.preventDefault();})
	})
		$.ajax({
			url:"success.json"
		}).done(function(data){
			if(console&&console.log){
				console.dir(data)
				alert(data.msg);
			}
		})
			
})