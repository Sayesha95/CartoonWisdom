function displayCartoonWisdom() {
    const cartoonSelect = document.getElementById("cartoonSelect");
    const selectedCartoon = cartoonSelect.value;
    const quoteOutput = document.getElementById("quoteOutput");
    const videoContainer = document.getElementById("videoContainer");

    // Clear previous content
    quoteOutput.innerHTML = "";
    videoContainer.innerHTML = "";

    if (selectedCartoon === "") {
        return; // Do nothing if the default option is selected
    }

   
    const wisdomData = {
        doraemon: {
            quote: "Wisdom and true love are always the supreme",
            videoURL: "https://www.youtube.com/embed/WaCXXMCeWNQ?autoplay=1&mute=1&controls=1&start=0&end=8&loop=1&playlist=WaCXXMCeWNQ"
        },
        shinchan: {
            quote: "You are always valuable dear! Keep doing the positive work and don't let your worth down..",
            videoURL: "https://www.youtube.com/embed/FZpbkXxpb7E?autoplay=1&mute=1&controls=1&start=0&end=8&loop=1&playlist=FZpbkXxpb7E"
        },
        chhotabheem: {
            quote: "Focus on doing the karmas, you will the sweet fruit at the right time",
            videoURL: "https://www.youtube.com/embed/DSY7sK5Fw6Y?autoplay=1&mute=1&controls=1&start=0&end=8&loop=1&playlist=DSY7sK5Fw6Y"
        },
        motupatlu: {
            quote: "Life is important! Don't let others distort you becuase of your physical appearances or any failure...You are special than you think",
            videoURL: "https://www.youtube.com/embed/52djpBMiyO0?autoplay=1&mute=1&controls=1&start=0&end=8&loop=1&playlist=52djpBMiyO0"
        },
        bandbudh: {
            quote: "Bandbudh Aur Budbak teach: Life is better when you embrace the chaos together.Create the joyful memories..",
            videoURL: "https://www.youtube.com/embed/IanRy9KfngY?autoplay=1&mute=1&controls=1&start=0&end=8&loop=1&playlist=IanRy9KfngY"
        },
        pokemon: {
            quote: "Pokémon mantra: You gotta catch 'em all! (Don't give up on your goals.)",
            videoURL: "https://www.youtube.com/embed/ketcenNWTig?autoplay=1&mute=1&controls=1&start=0&end=8&loop=1&playlist=ketcenNWTig"
        }
    };

    const data = wisdomData[selectedCartoon];

    // 1. Display the Quote
    quoteOutput.innerHTML = `"${data.quote}" - **${cartoonSelect.options[cartoonSelect.selectedIndex].text}**`;

    
    const iframeHTML = `
        <iframe
            src="${data.videoURL}"
            allow="autoplay; encrypted-media"
            allowfullscreen
        ></iframe>
    `;

    videoContainer.innerHTML = iframeHTML;
}