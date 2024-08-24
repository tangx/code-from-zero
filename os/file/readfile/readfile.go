package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
)

func main() {

	readAllContent("README.md")

	readFileLineByLine("README.md")

}

func readAllContent(filename string) {
	fmt.Println("## Reading all content")
	b, err := os.ReadFile(filename)
	if err != nil {
		panic(err)
	}

	fmt.Println(string(b))
}

func readFileLineByLine(filename string) {
	fmt.Println("## Reading file line by line")
	f, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	defer f.Close()

	scanner := bufio.NewScanner(f)

	n := 0
	for scanner.Scan() {
		n += 1
		fmt.Println(n, scanner.Text())
	}

	if err := scanner.Err(); err != nil {
		if errors.Is(err, os.ErrClosed) {
			// fmt.Println("Scanner closed")
			return
		} else {
			panic(err)
		}
	}
}
