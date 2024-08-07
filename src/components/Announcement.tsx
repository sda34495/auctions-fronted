import React from 'react';

interface AnnouncementBannerProps {
    message: string;
}

const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({ message }) => {
    return (
        <div className="bg-blue-950 text-white py-3 px-4 text-center">
            {message}
        </div>
    );
};

export default AnnouncementBanner;
