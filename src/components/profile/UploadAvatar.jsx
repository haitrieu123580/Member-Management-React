import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
const UploadAvatar = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const {  token } = useSelector((state) => state.auth)
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    
        // Đọc và hiển thị trước ảnh
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(file);
      };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('profileImage', selectedFile);

        axios.post('http://localhost:3000/users/upload-avatar', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <div className='h-screen flex justify-center items-center'>
                <div className="bg-white p-8 rounded shadow-md w-96 h-fit">
                    <h2 className='text-black'>Upload Profile Image</h2>
                    <form action="">
                        <input type="file" name='profileImage' onChange={handleFileChange} accept="image/*" />
                        {previewImage && <img src={previewImage} alt="Preview" />}
                        <button className='text-black' onClick={handleUpload}>Upload</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default UploadAvatar
