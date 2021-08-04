import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import './PhotoManager.scss';

function fileToDataUrl(file) {
  console.log('render');
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    
    fileReader.addEventListener('load', evt => {
      resolve(evt.currentTarget.result);
    });
    
    fileReader.addEventListener('error', evt => {
      reject(new Error(evt.currentTarget.error));
    });
    
    fileReader.readAsDataURL(file);
  });
}

export function PhotoManager() {
  const [urls, setUrls] = useState([]);
  
  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    
    setUrls(prev => ([...prev, ...urls]));
  };
  
  const deleteItem = (item) => {
    setUrls(urls.filter(url => url !== item));
  };
  
  return (
    <div className="photo-manager">
      <input type="file" multiple onInput={handleSelect} />
      <div className="photo-manager__click-area">Click to select</div>
      <div className="photo-manager__preview-block">
        {urls.map(item => (
          <div className="photo-manager__preview-block-item" key={item}>
            <img src={item} alt="item" />
            <div className="delete-btn" onClick={() => deleteItem(item)}>
              <FaTimes />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
