document.getElementById("downloadButton").addEventListener("click", function(event) {
    // Verhindere den Standardverhalten des Links
    event.preventDefault();
    // Füge eine Klasse hinzu, um den Button zu deaktivieren
    this.classList.add("disabled");
    // Ändere den Text des Buttons
    this.innerText = "Bewerbung wird heruntergeladen...";
    // Starte einen Timer, um die Deaktivierung rückgängig zu machen
    setTimeout(() => {
        this.classList.remove("disabled");
        this.innerText = "Bewerbung herunterladen";
    }, 3000); // Ändere die Zeit in Millisekunden, wie lange der Button deaktiviert bleibt (hier 3 Sekunden)
});
