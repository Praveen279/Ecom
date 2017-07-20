package products

import(
	"net/http"
	"app/common/db"
	"app/common/util"
	"fmt"
	"encoding/json"
	"gopkg.in/mgo.v2/bson"
)

type Product struct {
  Id string
	CategoryId string
  Name string
	Code string
	Description string
	Availability int
	Price float32
}

func GetProducts(w http.ResponseWriter, r *http.Request) {
	session := db.GetMongoSession()
	var products []Product
	if session != nil {
		err := session.DB("ecomdev").C("products").Find(nil).All(&products)
    if err != nil {
			fmt.Println("Error in getting the records", err)
    }
		js, error := json.Marshal(products)
		if error != nil {
			fmt.Println("Error in parsing the records", err)
		}
		w.Write(js)
	} else {
		fmt.Println("Error in getting a db session")
	}
}

func AddProduct(w http.ResponseWriter, r *http.Request) {
	session := db.GetMongoSession()
	if session != nil {
    decoder := json.NewDecoder(r.Body)
		var p Product
		err := decoder.Decode(&p)
		if err != nil {
			fmt.Println("error in reading the json data", err)	
		}
		c := session.DB("ecomdev").C("products")
		c.Insert(&Product{util.GetRandomId(), p.CategoryId, p.Name, p.Code, p.Description, p.Availability, p.Price})
		GetProducts(w, r)
	} else {
		fmt.Println("Error in getting a db session")
	}
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	session := db.GetMongoSession()
	if session != nil {
    decoder := json.NewDecoder(r.Body)
		var p Product
		err := decoder.Decode(&p)
		if err != nil {
			fmt.Println("error in reading the json data", err)	
		}
		c := session.DB("ecomdev").C("products")
		colQuerier := bson.M{"id": p.Id}
		change := bson.M{"$set": bson.M{
			"categoryId": p.CategoryId,
			"name": p.Name,
			"code": p.Code,
			"description": p.Description,
			"availibility": p.Availability,
			"price": p.Price}}
		err = c.Update(colQuerier, change)
		GetProducts(w, r)
	} else {
		fmt.Println("Error in getting a db session")
	}
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	session := db.GetMongoSession()
	if session != nil {
    decoder := json.NewDecoder(r.Body)
		var p Product
		err := decoder.Decode(&p)
		if err != nil {
			fmt.Println("error in decoding the input", err)
		}
		c := session.DB("ecomdev").C("products")
		err = c.Remove(bson.M{"id": p.Id})
		if err != nil {
			fmt.Println("error in deleting the record", err)
		}
		GetProducts(w, r)
	} else {
		fmt.Println("Error in getting a db session")
	}
}
