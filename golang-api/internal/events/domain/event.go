package domain

import "time"

type Rating string

const (
	RatingFree     Rating = "L"
	RatingTen      Rating = "10"
	RatingTwelve   Rating = "12"
	RatingFourteen Rating = "14"
	RatingSixteen  Rating = "16"
	RatingEighteen Rating = "18"
)

type Event struct {
	ID           string
	Name         string
	Location     string
	Organization string
	Rating       Rating
	Date         time.Time
	ImageURL     string
	Capacity     int
	Price        float64
	PartnerID    int
	Spots        []Spot
	Tickets      []Ticket
}
func (e *Event) AddSpot(name string) (*Spot, error) {
	spot, err := NewSpot(e, name)

	if err != nil {
		return nil, err
	}

	e.Spots = append(e.Spots, *spot)

	return spot, nil
}
