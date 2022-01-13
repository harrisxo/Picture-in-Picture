const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream pass to video element then play it
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Errors
        console.log("Oh Noes! there's an EWWOR ->", error);
    }
}

button.addEventListener("click", async () => {
    // Disable the Button
    button.disabled = true;
    // Start PiP
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On Loading
selectMediaStream();