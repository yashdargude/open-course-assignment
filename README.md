# Mini Collection Management System

## Overview

The Mini Collection Management System is a simplified application designed to manage customer payments and notifications. This system demonstrates the use of full-stack technologies, real-time updates, and basic AI integration.

## Features

### Authentication System

- User registration and login functionality
- JWT-based authentication

### Customer Management

- CRUD operations for customer details:
  - Name
  - Contact information
  - Outstanding payment amount
  - Payment due date
  - Payment status
- Bulk customer upload via Excel
  - Provide a template for upload
  - Validate data before import
  - Show import success/error summary
- List view with filtering and sorting options

### Payment Management

- Mock payment API endpoint
- Mark payments as completed/pending
- Real-time payment status updates using WebSocket

### Notification System

- Real-time notifications using WebSocket
  - Payment received
  - Payment overdue
  - New customer added
- Notification center to view all notifications

## Technical Requirements

### Frontend (React.js/Next.js)

- Clean and responsive UI
- State management (Redux/Context API)
- Form validation
- Error handling
- Loading states
- Real-time updates
- File upload handling

### Backend (Node.js)

- RESTful API architecture
- WebSocket implementation
- File handling for Excel uploads
- JWT authentication
- Input validation
- Error handling middleware
- Logging system

### Database

- SQL/Elasticsearch (Preferred Elasticsearch)

### Documentation

- Swagger/OpenAPI documentation

## Setup Instructions

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL
- Redis

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/mini-collection-management.git
   cd mini-collection-management/backend
   ```
