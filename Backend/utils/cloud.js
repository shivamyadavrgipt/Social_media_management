// import { v2 as cloudinary } from 'cloudinary';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_KEY_SECRET
// });

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'wanderlust_dev',
//     allowed_formats: ["png", "jpg", "jpeg"]
//   }
// });

// export { cloudinary, storage };
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const { v2: cloudinaryV2 } = cloudinary;

cloudinaryV2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_KEY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryV2,
  params: {
    folder: "wanderlust_dev",
    allowed_formats: ["png", "jpg", "jpeg"],
  },
});

export { cloudinaryV2 as cloudinary, storage };
