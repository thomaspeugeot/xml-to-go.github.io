package main

import (
	"fmt"
	"syscall/js"
)

// main is the entry point of the Go WebAssembly application.
func main() {
	// Print a message to indicate the start of the Go WebAssembly application.
	fmt.Println("Golang ffjslkfjslfkjf WebAssembly main 2")
	// log.Println("Golang WebAssembly main")

	// Register a JavaScript function named 'xmlDataToGoTypeCode' and link it to the Go function 'xmlDataToGoTypeCodeWasmWrapper'.
	// This allows JavaScript to call the Go function as if it were a JavaScript function.
	js.Global().Set("xmlDataToGoTypeCode", js.FuncOf(xmlDataToGoTypeCodeWasmWrapper))

	// Create a channel to block the program from exiting, effectively keeping the WebAssembly module running indefinitely.
	done := make(chan struct{})
	<-done
}

// xmlDataToGoTypeCodeWasmWrapper is a placeholder function that will be linked with the JavaScript function call.
// Add the actual implementation of this function according to your requirements.
func xmlDataToGoTypeCodeWasmWrapper(this js.Value, args []js.Value) interface{} {
	var (
		content  = args[0].String()
		inline   = args[1].Bool()
		compact  = args[2].Bool()
		withJSON = args[3].Bool()
	)

	return xmlDataToGoTypeCode(content, inline, compact, withJSON)
}
