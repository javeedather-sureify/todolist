package middleware
import (
	"database/sql"
	"encoding/json"
    "fmt"
    "log"
	// "os"
	// "context"
    "net/http"
	_ "github.com/gorilla/mux"
	_ "github.com/go-sql-driver/mysql"

)

func init(){
	createDBInstance()
}




func createDBInstance(){

	
	// db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")
	fmt.Println("Go MySQL Tutorial")

    // Open up our database connection.
    // I've set up a database on my local machine using phpmyadmin.
    // The database is called testDb
	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")
    // if there is an error opening the connection, handle it
    if err != nil {
        panic(err.Error())
    }
    // defer the close till after the main function has finished
    // executing
    defer db.Close()
}

func GetSign(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*") 
	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")


	fmt.Println(r.FormValue("name"))
	 fmt.Println(r.FormValue("email"))
	fmt.Println(r.FormValue("password"))

	insert, err := db.Query("SELECT * from register where email=?",r.FormValue("email"))
	defer insert.Close()
	if err != nil {
		fmt.Fprintf(w,"Error")
		}




	var names []string

	// var Name string

	var Email string
	// var Password string
for insert.Next(){
	// var item string
	insert.Scan(&Email)
	// item,err:=fmt.Printf("Got: Todo: %v",Todo)
	// item1:=fmt.Sprintf(Name) 

	item2:=fmt.Sprintf(Email) 
	// item3:=fmt.Sprintf(Password) 
	// names=append(names,item1)

	names=append(names,item2)
	// names=append(names,item3)


}
if len(names) == 0 {
    // log.Fatal("No Results")


	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")


	insert, err := db.Query("INSERT INTO register VALUES (null,?,?,?)",r.FormValue("name"),r.FormValue("email"),r.FormValue("password"))
	defer insert.Close()
	if err != nil {
		fmt.Fprintf(w,"Error")
		}






	fmt.Println(len(names))
	fmt.Fprintf(w,"Success")
	



}else{
	fmt.Fprintf(w,"Failure")

}






}




func GetTodo(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*") 
	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")


	 fmt.Println(r.FormValue("email"))
	fmt.Println(r.FormValue("items"))

	insert, err := db.Query("INSERT INTO todo VALUES (null,?,?)",r.FormValue("email"),r.FormValue("items"))
	defer insert.Close()
	if err != nil {
	fmt.Fprintf(w,"Error")


    }
	
	fmt.Fprintf(w,"Success")

}


func GetLog(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*") 
	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")


	 fmt.Println(r.FormValue("email"))
	fmt.Println(r.FormValue("password"))

	

	insert, err := db.Query("SELECT * FROM register WHERE email=? and password=?",r.FormValue("email"),r.FormValue("password"))
	defer insert.Close()
	if err != nil {
	fmt.Fprintf(w,"Error")
    }


	var names []string

	var Email string
	var Password string
for insert.Next(){
	// var item string
	insert.Scan(&Email,&Password)
	// item,err:=fmt.Printf("Got: Todo: %v",Todo)
	item1:=fmt.Sprintf(Email) 
	item2:=fmt.Sprintf(Password) 
	names=append(names,item1)
	names=append(names,item2)

}
if len(names) == 0 {
    // log.Fatal("No Results")
	fmt.Println(len(names))

	fmt.Fprintf(w,"Failure")

}else{
	fmt.Fprintf(w,"Success")

}

	
	
	// fmt.Fprintf(w,"Success")

}






func GetDel(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*") 
	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")

	defer db.Close()

	 fmt.Println(r.FormValue("value"))

	del, err := db.Query("DELETE FROM todo WHERE Todo=?",r.FormValue("value"))
	defer del.Close()
	if err != nil {
	fmt.Fprintf(w,"Error")


    }
	
	fmt.Fprintf(w,"Success")

}




func GetPrint(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*") 
	db, err := sql.Open("mysql", "root:password@tcp(172.17.0.2:3306)/crudyutube")

	defer db.Close()


	 fmt.Println(r.FormValue("email"))

	rows, err := db.Query("SELECT Todo from todo where Email=?",r.FormValue("email"))


	if err != nil {
		log.Fatal(err)
	}
	
	var Todos []string

	var Todo string
for rows.Next(){
	// var item string
	rows.Scan(&Todo)
	// item,err:=fmt.Printf("Got: Todo: %v",Todo)
	item:=fmt.Sprintf(Todo) 
	Todos=append(Todos,item)
}
	// fmt.Println(Todos)
	// fmt.Fprintf(w,[]string(Todos))



	fmt.Println(Todos)
	response, err := json.Marshal(Todos)
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(w, string(response))



	
	// defer insert.Close()
	// if err != nil {
	// fmt.Fprintf(w,"Error")
    // }
	
	// fmt.Fprintf(w,"Success")
}
