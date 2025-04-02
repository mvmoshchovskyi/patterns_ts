const fileInput = document.querySelector("input");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", () => {
	const file = fileInput.files[0];
	if (!file) return;

	const reader = new FileReader();
	reader.readAsDataURL(file);

	reader.onload = (e) => {
		const img = new Image();
		img.src = e.target.result;


		img.onload = () => {
			const canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;

			const ctx = canvas.getContext("2d");
			ctx.filter = 'blur(1px)';
			ctx.filter = 'saturate(0)';
			ctx.font = '60px serif';
			ctx.fillText('Best img', 30, 90);
			ctx.drawImage(img, 0, 0);
			preview.appendChild(canvas);

			canvas.toBlob((blob) => {
				if (!blob) return;

				const formData = new FormData();
				formData.append("img", blob, "img.png");

				fetch("https://httpbin.org/post", {
					method: "POST",
					body: formData,
				})
					.then((res) => res.json())
					.then((data) => console.log(data))
					.catch((error) => console.error("Upload error:", error));
			}, "image/png");
		};
	};
});
