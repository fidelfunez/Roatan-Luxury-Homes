// Image optimization utility for admin uploads
export const optimizeImage = (file, options = {}) => {
  return new Promise((resolve, reject) => {
    const {
      maxWidth = 1920,
      maxHeight = 1080,
      quality = 0.8,
      maxFileSize = 1024 * 1024 // 1MB default
    } = options;

    // Check file size first
    if (file.size > maxFileSize * 2) { // Allow 2x the max size before warning
      console.warn(`Large image detected: ${(file.size / 1024 / 1024).toFixed(2)}MB. Optimizing...`);
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      let { width, height } = img;
      
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw and compress image
      ctx.drawImage(img, 0, 0, width, height);

      // Convert to blob with specified quality
      canvas.toBlob(
        (blob) => {
          if (blob) {
            // Convert blob to base64
            const reader = new FileReader();
            reader.onloadend = () => {
              const originalSize = file.size;
              const optimizedSize = blob.size;
              const compressionRatio = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
              
              
              resolve({
                dataUrl: reader.result,
                originalSize,
                optimizedSize,
                compressionRatio,
                dimensions: { width, height }
              });
            };
            reader.readAsDataURL(blob);
          } else {
            reject(new Error('Failed to optimize image'));
          }
        },
        'image/jpeg',
        quality
      );
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = URL.createObjectURL(file);
  });
};

// Optimize a data URL (e.g. existing base64 from DB) - returns optimized data URL
export const optimizeDataUrl = (dataUrl, options = {}) => {
  return new Promise((resolve, reject) => {
    if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:image')) {
      resolve(dataUrl);
      return;
    }
    const { maxWidth = 1200, maxHeight = 800, quality = 0.8 } = options;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      let { width, height } = img;
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          } else resolve(dataUrl);
        },
        'image/jpeg',
        quality
      );
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
};

// Batch optimize multiple images
export const optimizeImages = async (files, options = {}) => {
  const results = [];
  
  for (let i = 0; i < files.length; i++) {
    try {
      const result = await optimizeImage(files[i], options);
      results.push(result);
    } catch (error) {
      console.error(`Failed to optimize image ${i + 1}:`, error);
      // Fallback to original file
      const reader = new FileReader();
      reader.onloadend = () => {
        results.push({
          dataUrl: reader.result,
          originalSize: files[i].size,
          optimizedSize: files[i].size,
          compressionRatio: 0,
          dimensions: { width: 0, height: 0 }
        });
      };
      reader.readAsDataURL(files[i]);
    }
  }
  
  return results;
};

// Get file size in human readable format
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// Validate image file
export const validateImageFile = (file) => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Please upload a valid image file (JPEG, PNG, or WebP)' };
  }
  
  if (file.size > maxSize) {
    return { valid: false, error: `File size too large. Maximum size is ${formatFileSize(maxSize)}` };
  }
  
  return { valid: true };
}; 