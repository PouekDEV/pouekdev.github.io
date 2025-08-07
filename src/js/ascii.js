// @ts-nocheck
const grayRamp = " .:-=+*#%@";
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

function getFontRatio(){
    const pre = document.createElement('pre');
    pre.style.display = 'inline';
    pre.textContent = ' ';
    document.body.appendChild(pre);
    const { width, height } = pre.getBoundingClientRect();
    document.body.removeChild(pre);
    return height / width;
};

function clampDimensions(width, height, maxWidth, maxHeight){
    const rectifiedWidth = Math.floor((getFontRatio() - 0.5) * width);
    if(height > maxHeight){
        const reducedWidth = Math.floor(rectifiedWidth * maxHeight / height);
        return [reducedWidth, maxHeight];
    }
    if(width > maxWidth){
        const reducedHeight = Math.floor(height * maxWidth / rectifiedWidth);
        return [maxWidth, reducedHeight];
    }
    return [rectifiedWidth, height];
};

function toGrayScale(r, g, b){
    return 0.21 * r + 0.72 * g + 0.07 * b;
}

function getCharacterForGrayScale(grayScale){
    return grayRamp[Math.ceil((grayRamp.length - 1) * grayScale / 255)];
}

function convertToGrayScales(context, width, height){
    const imageData = context.getImageData(0, 0, width, height);
    const grayScales = [];
    for(let i = 0; i < imageData.data.length; i += 4){
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const grayScale = toGrayScale(r, g, b);
        imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;
        grayScales.push(grayScale);
    }
    context.putImageData(imageData, 0, 0);
    return grayScales;
};

function drawAscii(grayScales, width){
    const ascii = grayScales.reduce((asciiImage, grayScale, index) => {
        let nextChars = getCharacterForGrayScale(grayScale);
        if((index + 1) % width === 0){
            nextChars += '\n';
        }
        return asciiImage + nextChars;
    }, '');
    return ascii;
};

async function fetchBlob(url){
    const response = await fetch(url);
    return response.blob();
}

async function returnAscii(imageURL, width, height){
    const imageBlob = await fetchBlob(imageURL);
    const image = new Image();
    return new Promise((resolve) => {
        image.onload = () => {
            const [imageWidth, imageHeight] = clampDimensions(image.width, image.height, width, height);
            canvas.width = imageWidth;
            canvas.height = imageHeight;
            context.drawImage(image, 0, 0, imageWidth, imageHeight);
            const grayScales = convertToGrayScales(context, imageWidth, imageHeight);
            const characters = drawAscii(grayScales, imageWidth);
            resolve(characters);
        };
        image.src = URL.createObjectURL(imageBlob);
    });
}