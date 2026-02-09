import React, { useState } from 'react';

const OptimizedImage = ({ 
  src, 
  webpSrc, 
  alt, 
  className = "", 
  loading = "lazy",
  fetchpriority = "auto",
  sizes,
  srcSet,
  webpSrcSet,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const webpSource = webpSrc;
  const handleLoad = () => setIsLoaded(true);

  const imgProps = {
    alt,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
    loading,
    fetchpriority,
    onLoad: handleLoad,
    onError: () => setHasError(true),
    style: { transition: 'opacity 0.3s ease-in-out' },
    ...(sizes && { sizes }),
    ...(srcSet && { srcSet }),
    ...props,
  };

  if (!webpSource) {
    return <img src={src} {...imgProps} />;
  }

  return (
    <picture>
      <source
        srcSet={webpSrcSet || webpSource}
        type="image/webp"
        {...(sizes && { sizes })}
      />
      <img src={src} {...imgProps} />
    </picture>
  );
};

export default OptimizedImage; 