package util

import(
  "fmt"
  "github.com/nu7hatch/gouuid"
)

func GetRandomId() string {
  u4, err := uuid.NewV4()
  id := u4.String()
  if err != nil {
    fmt.Println("error:", err)
      return "Error occurred"
  }
  return id
}
