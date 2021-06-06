package router

import (
	"backend/middleware"

	"github.com/gorilla/mux"
)

// Router is exported and used in main.go
func Router() *mux.Router {

	router := mux.NewRouter()

	router.HandleFunc("/api/signin", middleware.GetSign).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/todo", middleware.GetTodo).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/login", middleware.GetLog).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/del", middleware.GetDel).Methods("DELETE", "OPTIONS")
	 router.HandleFunc("/api/print", middleware.GetPrint).Methods("GET", "OPTIONS")
	// router.HandleFunc("/api/deleteAllTask", middleware.DeleteAllTask).Methods("DELETE", "OPTIONS")
	return router
}