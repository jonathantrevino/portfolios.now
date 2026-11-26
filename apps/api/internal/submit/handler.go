package submit

import (
	"net/http"

	"github.com/jonathantrevino/portfolios.now/apps/api/internal/httpx"
)

func RegisterRoutes(mux *http.ServeMux) {
	mux.HandleFunc("POST /submit/verify", handleVerify)
}

// verify url is a valid link and website, avoid captcha screens
func handleVerify(w http.ResponseWriter, r *http.Request) {
	httpx.WriteJSON(w, http.StatusOK, map[string]string{"status": "ok"})
}
