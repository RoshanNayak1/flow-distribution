# Flow Distribution Algorithm

## Overview
This project implements a flow distribution algorithm to connect users with astrologers in a fair and balanced manner, with the ability to adjust flow for top astrologers.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/flow-distribution.git
   cd flow-distribution


   API Endpoints
Allocate User:

URL: /api/allocate
Method: POST
Body:
json
Copy code
{
  "id": 1,
  "name": "User 1"
}
Response:
json
Copy code
{
  "id": 1,
  "name": "Astrologer 1",
  "isTopAstrologer": false,
  "currentFlow": 1
}
Toggle Top Astrologer:

URL: /api/toggle
Method: POST
Body:
json
Copy code
{
  "id": 1,
  "isTop": true
}
Get Astrologers:

URL: /api/astrologers
Method: GET
Response:
json
Copy code
[
  {
    "id": 1,
    "name": "Astrologer 1",
    "isTopAstrologer": false,
    "currentFlow": 0
  },
  ...
]
