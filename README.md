MAFUNDI POOL - Connecting Tradespeople in KenyaProject DescriptionMAFUNDI POOL is a web application designed to connect Kenyans with skilled and reliable local tradespeople. It aims to simplify the process of finding the right professional for any job, providing easy access to verified and skilled craftsmen.FeaturesTradesmen Profiles: Displays profiles of various tradespeople, including their names, skills, location, contact information, and a short bio.Easy Contact: Provides a direct way to contact tradespeople.About Us Page: Provides information about the mission and story behind MAFUNDI POOL.Responsive Design: The application is designed to work on various screen sizes.Dark/Light Mode: Users can toggle between a dark and light color scheme.Technologies UsedHTMLCSSJavaScriptJSON Server (for the fake API)Project SetupFollow these steps to set up and run the MAFUNDI POOL application on your local machine:PrerequisitesNode.js: Ensure you have Node.js installed. You can download it from nodejs.org.  JSON Server runs on Node.js.InstallationClone the repository: If you have the project files in a Git repository, clone it to your local machine.  If you have downloaded the files, proceed to the next step.Create db.json:Create a file named db.json in the root directory of your project (the same directory as index.html).Populate db.json with the following JSON data, ensuring that you have a "tradesmen" key containing an array of tradesman objects:{
  "tradesmen": [
    {
      "id": 1,
      "name": "John Doe",
      "expertise": ["Plumbing", "Electrical", "Solar Installation"],
      "region": "Nairobi, Kenya",
      "contactNumber": "+254712345678",
      "profileDetails": "Highly skilled plumber and electrician...",
      "photo": "https://placehold.co/150x150/EEE/31343C?text=JD&font=Montserrat"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "expertise": ["Carpentry", "Painting", "Interior Finishing"],
      "region": "Mombasa, Kenya",
      "contactNumber": "+254798765432",
      "profileDetails": "Expert carpenter and painter...",
      "photo": "https://placehold.co/150x150/EEE/31343C?text=JS&font=Montserrat"
    }
  ]
}
Important: The "tradesmen" key is crucial.  JSON Server uses this to create the API endpoint.Make sure the JSON is valid.  You can use a JSON validator like jsonlint.com to check for errors.Start JSON Server:Open your terminal or command prompt.Navigate to your project directory (the one containing db.json).Run the following command:json-server --watch db.json
This will start JSON Server and create a fake API using the data in db.json.  It will also "watch" the db.json file for changes, so if you update the data, the API will be updated as well.You should see output in the terminal indicating that JSON Server is running, and it will provide you with a URL (e.g., http://localhost:3000/tradesmen) where the data is available.Open index.html:Open the index.html file in your web browser.  You can do this by double-clicking the file, right-clicking and choosing "Open with," or dragging and dropping the file into your browser window.  If you are using VS Code, the "Live Server" extension is recommended.View the Application:You should now be able to see the MAFUNDI POOL web application in your browser.  The application will fetch the tradesmen data from the JSON Server you started and display it on the page.Important NotesJSON Server Port: JSON Server runs on port 3000 by default.  If port 3000 is already in use on your system, you can specify a different port using the --port option:json-server --watch db.json --port 3001
If you change the port, you must also update the URL in your script.js file to use the new port:fetch('http://localhost:3001/tradesmen') // Change 3000 to 3001
File Paths: Ensure that the paths to your styles.css and script.js files are correct in your index.html file.  If your styles.css file is in a folder named "style", the link tag should be: <link rel="stylesheet" href="style/styles.css">
