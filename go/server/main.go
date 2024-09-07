package main

import (
	"log"
	"net/http"
)

// main function: entry point of the program
func main() {
	// Create a file server to serve files from the "./static/js/wasm/" directory
	fs := http.FileServer(http.Dir("../../static/js/wasm/"))

	// Handle requests to the root URL ("/")
	http.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS header to allow requests from any origin
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// Serve the requested file using the file server
		fs.ServeHTTP(w, r)
	}))

	// Log that the server is running
	log.Println("server running")

	// Start the HTTP server on port 8080
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		// Log the error and exit if the server fails to start
		log.Fatal(err)
	}
}
