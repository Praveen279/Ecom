package categories

import(
	"net/http"
	"app/common/db"
	"app/common/util"
	"fmt"
	"encoding/json"
)

type Category struct {
  Id string
  Name string
}

func GetCategories(w http.ResponseWriter, r *http.Request) {
	session := db.GetMongoSession()
	var categories []Category
	if session != nil {
		err := session.DB("ecomdev").C("categories").Find(nil).All(&categories)
    if err != nil {
			fmt.Println("Error in getting the records", err)
    }
		js, error := json.Marshal(categories)
		if error != nil {
			fmt.Println("Error in parsing the records", err)
		}
		w.Write(js)
	} else {
		fmt.Println("Error in getting a db session")
	}
}

func AddCategory(w http.ResponseWriter, r *http.Request) {
	session := db.GetMongoSession()
	if session != nil {
    decoder := json.NewDecoder(r.Body)
		var t Category
		err := decoder.Decode(&t)
		if err != nil {
			fmt.Println("error in reading the json data", err)	
		}
		c := session.DB("ecomdev").C("categories")
		c.Insert(&Category{util.GetRandomId(), t.Name})
	} else {
		fmt.Println("Error in getting a db session")
	}
}
