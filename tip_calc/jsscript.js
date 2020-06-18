function calc()
{
    amt = document.getElementById("amt").value;
    ppl = document.getElementById("people").value;
    quality = document.getElementById("service").value;
    document.getElementById("amteach").textContent=(amt*quality)/ppl;
    document.getElementById("tipdisplay").style.display="block";
   
}
document.getElementById("tipdisplay").style.display="none";
document.querySelector("button").onclick = function() { calc()};
