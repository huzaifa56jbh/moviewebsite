import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6 text-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p>&copy; 2024 Movie Site. All Rights Reserved.</p>
                    </div>
                    <div>
                        <p>Contact: info@moviesite.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
