import { useState } from 'react';
import { patchBase64Image, postData } from '../lib/axios';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const CreateAuctionForm = () => {
    const [title, setTitle] = useState('');
    const [imageBase64, setImageBase64] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size and type
            const maxFileSize = 2 * 1024 * 1024; // 2MB
            const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

            if (!validImageTypes.includes(file.type)) {
                setError('Please upload a valid image file (JPEG, PNG, GIF).');
                return;
            }

            if (file.size > maxFileSize) {
                setError('File size should not exceed 2MB.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result); // Base64 string
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await postData('/auction', { title: title });
            if (response?.status !== 201) return;
            const auction = response.data;

            const imageResponse = await patchBase64Image(`/auction/${auction.id}/picture`, imageBase64);
            if (imageResponse?.status === 200) {
                setIsLoading(false);
                navigate('/auctions');
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <div
            className="flex justify-center items-center h-full bg-gray-200 p-20"
        >
            <form onSubmit={handleSubmit} className="space-y-8 max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-extrabold leading-7 text-gray-900">Create Auction Item</h2>
                <p className="mt-1 text-sm text-gray-600">Provide the details of the auction. It will be displayed for 1 hour after Creation Time</p>

                <p className="mt-1 text-sm text-red-600">{error}</p>
                <div className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-900">Auction Title</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                className="block w-full rounded-md border-gray-800 outline-none shadow-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm p-2"
                                placeholder="Enter auction title"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-900">Picture</label>
                        <div style={{ backgroundImage: `url(${imageBase64})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-400 px-6 py-10 bg-gray-50">
                            <div className="text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                </svg>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600" >
                                    <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600">
                                        <span>Upload a file</span>
                                        <input onChange={handleImageChange} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="rounded-md bg-gray-400 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                        {isLoading && (
                            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                            </svg>
                        )}
                        Create Auction
                    </button>
                </div>
            </form>
            {isLoading && < Loader />}
        </div>
    );
};

export default CreateAuctionForm;
