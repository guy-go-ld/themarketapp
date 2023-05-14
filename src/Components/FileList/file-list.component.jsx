import React, { useState, useEffect } from 'react';

export default function FileList({business_id}){
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const checkFolder = async () => {
            const folderPath = "../../databases/businessPhotos/1";

            try {
                const response = await fetch(folderPath);
                if (response.ok) {
                    const fileNames = await response.json();
                    setFiles(fileNames);
                } else {
                    console.log('Folder does not exist');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        checkFolder();
    }, []);

    return (
        <div>
            <h1>File List</h1>
            {files.length > 0 ? (
                <ul>
                    {files.map((fileName, index) => (
                        <li key={index}>{fileName}</li>
                    ))}
                </ul>
            ) : (
                <p>No files found.</p>
            )}
        </div>
    );
};

