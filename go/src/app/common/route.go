package common

import (
	"net/http"
	"github.com/gowww/router"
	"app/categories"
	"github.com/rs/cors"
	"app/products"
	"app/auth"
)

func HandleRoute() {
	rt := router.New()
	// Routes consist of a path and a handler function.
	rt.Handle("POST", "/login", http.HandlerFunc(auth.Login))
	rt.Handle("POST", "/createUser", http.HandlerFunc(auth.CreateUser))
	rt.Handle("POST", "/categories/add", http.HandlerFunc(categories.AddCategory))
	rt.Handle("GET", "/categories", http.HandlerFunc(categories.GetCategories))
	rt.Handle("POST", "/categories/update", http.HandlerFunc(categories.UpdateCategory))
	rt.Handle("POST", "/categories/delete", http.HandlerFunc(categories.DeleteCategory))
	rt.Handle("POST", "/products/add", http.HandlerFunc(products.AddProduct))
	rt.Handle("GET", "/products", http.HandlerFunc(products.GetProducts))
	rt.Handle("POST", "/products/update", http.HandlerFunc(products.UpdateProduct))
	rt.Handle("POST", "/products/delete", http.HandlerFunc(products.DeleteProduct))
	rt.Handle("GET", "/productsByCategory", http.HandlerFunc(products.GetProductsByCategory))
	rt.Handle("GET", "/productsBySearchString", http.HandlerFunc(products.GetProductsBySearchString))
	// rt.Handle("DELETE", "/products", http.HandlerFunc(products.eleteProduct))
	handler := cors.Default().Handler(rt)
	// Bind to a port and pass our router in
	// http.ListenAndServe(":8080", rt)
	http.ListenAndServe(":8080", handler)
}
