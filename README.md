# QuoteMaster: Anime Edition - Web App

**QuoteMaster: Anime Edition** is a web platform designed to entertain anime fans by displaying random memorable quotes from their favorite characters. Users can generate new quotes and easily share or download them as stylized images, providing a fun and interactive way for anime enthusiasts to enjoy and share their favorite moments.

## Features

- **Random Anime Quotes**: Discover a new anime quote each time you load the app.
  
- **Downloadable Quotes**: Easily save your favorite quotes as images to share with friends or use as wallpapers.

## Installation and Setup

To run **QuoteMaster: Anime Edition** locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sodiqsanusi/quotemasters_anime.git
    ```

2. Navigate into the project directory:
    ```bash
    cd quotemasters_anime
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open `http://localhost:3000` in your browser to use the app.

## Technical Overview

**QuoteMaster: Anime Edition** is built using **Next.js** with a focus on client-side rendering, enabling smooth and fast performance. The app integrates with a custom-built API to provide anime quotes and offers dynamic image generation for easy sharing and downloading.

### Technologies Used

- **Next.js**: Chosen for fast performance and effective client-side rendering, ensuring a seamless user experience.

- **Axios**: Used to handle data fetching from the API, simplifying API integration.
  
- **html2canvas**: Converts DOM elements into images, allowing users to download quotes as personalized images.
  
- **Google Spreadsheet (using App Scripts)**: Hosts the quote dataset and acts as a lightweight backend solution.

### Challenges

- **API Limitations**: Encountered rate limits and CORS issues with public APIs, which led to the creation of a custom API.
- **Image Generation**: Implemented dynamic image generation using **html2canvas** to allow users to download quotes as images.

### Lessons Learned

- **API Development**: Built an API off a Kaggle dataset (which I had to clean using the Python [Pandas library](https://pandas.pydata.org/)) when public APIs proved insufficient due to rate limits.
- **Frontend Focus**: This project reaffirmed my interest in frontend development, particularly in building user interfaces over backend management.

## Next Steps

- **Design Upgrades**: Working on improving the design for a more user-friendly experience.
  
- **New Features**:
  - Adding a "Copy Quote" functionality for easier sharing.
  - Further refining the image generation process to improve performance and compatibility across devices.

## Contribution

Contributions to **QuoteMaster: Anime Edition** are welcome! To contribute:

1. Fork the repository.
  
2. Create a new branch (`git checkout -b feature-branch`).
  
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
  
4. Push to the branch (`git push origin feature-branch`).
  
5. Open a Pull Request.

For major changes, please open an issue first to discuss your proposed modifications.

## License

This project is licensed under the MIT License.

## Connect with Us

- **Project Lead**: Sodiq "Ade" Sanusi - [GitHub](https://github.com/sodiqsanusi) | [LinkedIn](https://www.linkedin.com/in/sodiqsanusi)
  
## Links

- **GitHub Repository**: [QuoteMaster: Anime Edition](https://github.com/sodiqsanusi/quotemasters_anime)
- **Live Demo**: [https://quotemaster-anime.netlify.app/](https://quotemaster-anime.netlify.app/)
- **Kaggle Dataset**: [Link to Dataset](https://www.kaggle.com/datasets/mahendrasinghrajpoot/anime-quotes-dataset)
