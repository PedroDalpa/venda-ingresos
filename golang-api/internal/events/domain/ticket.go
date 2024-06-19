package domain

import "fmt"

type TicketType string

var (
	ErrTicketPriceZero = fmt.Errorf("ticket price must be greater than or equal to zero")
)

const (
	TicketTypeHalf TicketType = "half"
	TicketTypeFull TicketType = "full"
)

type Ticket struct {
	ID         string
	EventID    string
	Spot       *Spot
	TicketType TicketType
	Price      float64
}

func isValidTicketType(ticketType TicketType) bool {
	return ticketType == TicketTypeHalf || ticketType == TicketTypeFull
}

func (t *Ticket) CalculatePrice() {
	if t.TicketType == TicketTypeHalf {
		t.Price /= 2
	}
}

func (t *Ticket) Validate() error {
	if t.Price < 0 && isValidTicketType(t.TicketType) {
		return ErrTicketPriceZero
	}
	return nil
}
