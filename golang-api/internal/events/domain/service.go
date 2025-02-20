package domain

import (
	"errors"
	"fmt"
)

var (
	ErrInvalidGenerateQuantity = errors.New("quantity must be greater than zero")
)

type spotService struct{}

func NewSpotService() *spotService {
	return &spotService{}
}

func (s *spotService) GenerateSpots(event *Event, numberOfSpots int) error {
	if numberOfSpots <= 0 {
		return ErrInvalidGenerateQuantity
	}

	for i := range numberOfSpots {
		spotName := fmt.Sprintf("%c%d", 'A'+i/10, i%10+1)
		spot, err := NewSpot(event, spotName)
		if err != nil {
			return err
		}

		event.Spots = append(event.Spots, *spot)
	}
	return nil
}
