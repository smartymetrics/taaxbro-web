import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'default', 
  className = '', 
  icon: Icon, 
  iconPosition = 'right',
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'large' ? 'btn-lg' : size === 'small' ? 'btn-sm' : '';
  
  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={20} className={variant === 'link' ? 'arrow' : ''} />}
    </button>
  );
};

export default Button;
