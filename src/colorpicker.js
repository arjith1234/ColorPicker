import React, { useState } from 'react';
import './colorpicker.css';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#1fd655'); // Set default background color

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
    setBackgroundColor(color); // Set background color based on the selected color
  };

  return (
    <div className="color-picker-container" style={{ backgroundColor: backgroundColor }}>
      <div className="color-picker-box">
        <div className="colors-row">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelection(color)}
            ></div>
          ))}
        </div>
        <button onClick={toggleColorList}>
          {selectedColor ? `Selected Color: ${selectedColor}` : 'Pick a color'}
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
