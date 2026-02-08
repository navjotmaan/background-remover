const imageInput = document.getElementById("imageInput");
const removeBtn = document.getElementById("removeBtn");
const resultImage = document.getElementById("resultImage");
const downloadLink = document.getElementById("downloadLink");

removeBtn.addEventListener("click", async () => {
  const file = imageInput.files[0];

  if (!file) {
    alert("Please select an image first!");
    return;
  }

  removeBtn.disabled = true;
  removeBtn.textContent = "Processing...";

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://background-remover-07u5.onrender.com/remove-bg", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to remove background");

    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    resultImage.src = imageUrl;
    downloadLink.href = imageUrl;
    downloadLink.style.display = "inline";
  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    removeBtn.disabled = false;
    removeBtn.textContent = "Remove Background";
  }
});



