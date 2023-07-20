function updatePreview() {
    const title = document.getElementById('title').value;
    const imageUrl = document.getElementById('image-url').value;
    const authorName = document.getElementById('author-name').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
  
    document.getElementById('preview-image').src = imageUrl;
    document.getElementById('preview-title').innerText = title;
    document.getElementById('preview-description').innerText = description;
    document.getElementById('preview-author').innerText = `Author: ${authorName}`;
  }
  
  // Update the preview on page load (in case of pre-filled values)
  updatePreview();
  