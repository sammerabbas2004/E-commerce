const ImageKit = require("imagekit");

const imageKitInstance = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file){

    const result = await imageKitInstance.upload({
        file: file.buffer,          // buffer
        fileName: file.originalname // correct
    });

    return result.url;
}

module.exports = {
    uploadFile
};