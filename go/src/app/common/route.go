package common

import (
	"net/http"
	"github.com/gowww/router"
	"app/categories"
)

func HandleRoute() {
	rt := router.New()
	// Routes consist of a path and a handler function.
	rt.Handle("POST", "/categories/add", http.HandlerFunc(categories.AddCategory))
	rt.Handle("GET", "/categories", http.HandlerFunc(categories.GetCategories))

	// Bind to a port and pass our router in
	http.ListenAndServe(":8080", rt)
}
