package db

import (
	"log"
	"gopkg.in/mgo.v2"
)

//database config
const (
	MongoDBHosts = "localhost:27017"
	AuthDatabase = "admin"
	AuthUserName = "ecomdevuser"
	AuthPassword = "ecomdevuser123"
)

var mgoSession   *mgo.Session

func GetMongoSession() *mgo.Session {
	mongoDBDialInfo := &mgo.DialInfo {
		Addrs:    []string{MongoDBHosts},
		Database: AuthDatabase,
		Username: AuthUserName,
		Password: AuthPassword,
	}
	if mgoSession == nil {
			mgoSession, err := mgo.DialWithInfo(mongoDBDialInfo)
			if err != nil {
					log.Fatal("Failed to start the Mongo session")
			}
			mgoSession.SetMode(mgo.Monotonic, true)
			return mgoSession.Clone()
	}
	return mgoSession
}
