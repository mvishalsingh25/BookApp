import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 border-t border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    
                    {/* Branding */}
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-bold text-blue-400">BookStore</h2>
                        <p className="text-sm text-gray-400">Find your favorite books to read or download.</p>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                        <li><a href="/about" className="hover:text-blue-400 px-3 py-1">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-400 px-3 py-1">Contact</a></li>
                        <li><a href="/privacy" className="hover:text-blue-400 px-3 py-1">Privacy Policy</a></li>
                        <li><a href="/help" className="hover:text-blue-400 px-3 py-1">Help</a></li>
                    </ul>

                    {/* Copyright */}
                    <div className="text-sm text-gray-400">
                        <p>&copy; 2025 BookStore. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
