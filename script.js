//your JS code here. If required.
const checkBox = document.querySelectorAll(".toggle");

checkBox.forEach((check) =>{
	check.addEventListener('change', () => {
		const checkedBoxes = [...checkBox].filter((cd)=>cd.checked);

		if(checkedBoxes.length > 2){
			checkedBoxes[1].checked = false;
		}
	});
});