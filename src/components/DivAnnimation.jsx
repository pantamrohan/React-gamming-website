import React from 'react'

const DivAnnimation = () => {
  
    const [transformStyle, setTransformStyle] = useState("");
      const itemRef = useRef();
    
      const handleMouseMove = (e) => {
        if (!itemRef.current) return;
    
        const { left, top, width, height } =
          itemRef.current.getBoundingClientRect();
    
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;
    
        const tiltX = (relativeY - 0.5) *  11;
        const tiltY = (relativeX - 0.5) * -11;
    
        const newTransform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`;
    
        setTransformStyle(newTransform);
      };
    
      const handleMouseLeave = () => {
        setTransformStyle("");
      };
    
      return (
        <div
          className={className}
          ref={itemRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform: transformStyle }}
        >
          {children}
        </div>)
  
}

export default DivAnnimation