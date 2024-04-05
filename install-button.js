document.addEventListener('DOMContentLoaded', () => {
    // Check if the browser supports the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the default browser install prompt
        e.preventDefault();

        // Show your custom installation button
        const installButton = document.getElementById('install-button');
        if (installButton) {
            installButton.style.display = 'block';

            // Store the event for later use
            let deferredPrompt = e;

            // Handle the custom installation button click
            installButton.addEventListener('click', () => {
                // Show the browser's install prompt
                deferredPrompt.prompt();

                // Wait for the user's choice
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                    // Clear the deferred prompt
                    deferredPrompt = null;
                });
            });
        }
    });
});
