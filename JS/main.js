function togglebtn(){
    var toggler=document.getElementById("toggler");
    console.log("toggling");
toggler.classList.toggle("switch-on");
light_on();
}
function light_on(){
    var light=document.getElementById("light");
    light.classList.toggle("light-on");
}
function light_off(){
    var light=document.getElementById("light");
    light.classList.toggle("light-off");
}
const counters = document.querySelectorAll('.counter');
const speed = 50; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
