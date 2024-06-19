package domain

type SpotStatus string

const (
	SpotStatusAvailable SpotStatus = "available"
	SpotStatusSold      SpotStatus = "sold"
)

type Spot struct {
	ID       string
	EventId  string
	Name     string
	Status   SpotStatus
	TicketID string
}
