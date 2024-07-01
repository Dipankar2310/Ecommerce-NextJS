/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname:"res.cloudinary.com", },
               {  
                protocol: 'https',
                hostname:"picsum.photos"},
                {
                    protocol: 'https',
                    hostname:"images.unsplash.com",},
                {
                 protocol: 'https',
                hostname: "plus.unsplash.com",},
        ]
    },
    
    
};

export default nextConfig;
