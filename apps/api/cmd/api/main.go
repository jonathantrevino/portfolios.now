package main

import (
	"log"
	"net/http"
	"time"

	"github.com/jonathantrevino/portfolios.now/apps/api/internal/httpx"
	"github.com/jonathantrevino/portfolios.now/apps/api/internal/submit"
)

func main() {

	router := http.NewServeMux()
	router.HandleFunc("GET /health", func(w http.ResponseWriter, r *http.Request) {
		httpx.WriteJSON(w, 200, map[string]string{"status": "ok"})
	})

	// register extra routes
	submit.RegisterRoutes(router)

	// set up server
	s := &http.Server{
		Addr:         ":8080",
		Handler:      router,
		WriteTimeout: 5 * time.Second,
		ReadTimeout:  5 * time.Second,
	}

	log.Println("listening to :8080")
	log.Fatal(s.ListenAndServe())
}
