# Real Estate App

This repository contains an example of a real estate app written in React and TypeScript, running on Node.js with PostgresSQL. The entire app is contained within a Docker container.

## Getting Started

To run the project, you will need to have Docker and Docker Compose installed on your machine.

### Environment Variables

The app requires a `.env` file with the following variables:

- `DB_CONTAINER_NAME`: The name of the PostgresSQL container.
- `DB_NAME`: The name of the database.
- `DB_USER`: The username for the database.
- `DB_PASSWORD`: The password for the database.
- `DB_DATA`: The directory to store data for the database.
- `DB_HOSTNAME`: The hostname for the database.

You can create a `.env` file by copying the `.env.example` file and filling in the necessary information.

### Running the App

To start the app, run the following command:
```console
docker-compose up
```

This will start the containers and initialize the database. Once the containers are running, you can access the app at `http://localhost:3000`.

## Technologies Used

- React
- TypeScript
- Node.js
- PostgreSQL
- Docker

## Contributing

If you wish to contribute to the project, please fork the repository and submit a pull request. All contributions are welcome!
