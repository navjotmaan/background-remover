const imageInput = document.getElementById("imageInput");
const removeBtn = document.getElementById("removeBtn");
const resultImage = document.getElementById("resultImage");
const downloadLink = document.getElementById("downloadLink");
const uploadContainer = document.querySelector(".uploadFile");
const uploadText = document.getElementById("uploadText");

let currentBlobUrl = null;

imageInput.addEventListener('change', () => {
  if (imageInput.files && imageInput.files[0]) {
    uploadContainer.classList.add('has-file');

    uploadText.textContent = imageInput.files[0].name;

    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('resultImage').src = e.target.result;
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    uploadContainer.classList.remove('has-file');
  }
});

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

    const response = await fetch("https://nvmaan-background-remover.hf.space/remove-bg", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Failed to remove background");

    const blob = await response.blob();

    if (currentBlobUrl) {
      URL.revokeObjectURL(currentBlobUrl);
    }

    currentBlobUrl = URL.createObjectURL(blob);

    resultImage.src = currentBlobUrl;
    downloadLink.href = currentBlobUrl;
    downloadLink.style.display = "inline";

    imageInput.value = "";
    uploadText.textContent = "Choose an image"; 
    uploadContainer.classList.remove('has-file');

  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    removeBtn.disabled = false;
    removeBtn.textContent = "Remove Background";
  }
});



