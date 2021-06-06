
package main

import (
	"fmt"
	"log"
	"net/http"

	"backend/router"
)

func main() {
	r := router.Router()
	// fs := http.FileServer(http.Dir("build"))
	// http.Handle("/", fs)
	fmt.Println("Starting server on the port 8009...")

	log.Fatal(http.ListenAndServe(":8009", r))
}